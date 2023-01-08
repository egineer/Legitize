import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import AssetFilters from "../../components/filters/assetFilters";
import AssetGrid from "../../components/grids/assetGrid";
import CollectionGrid from "../../components/grids/collectionGrid";
import AssetsTable from "../../components/tables/assetsTable";
import CollectionsTable from "../../components/tables/collectionTable";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import ProcessingAnimation from "../../components/snippets/ProcessingAnimation";
import axios from "axios";
import { INFURA_ID, INFURA_SECRET_KEY } from "../../config";

import { waitTimeout } from "../../helpers/frontend";
import { fi } from "date-fns/locale";

const auth =
  "Basic " +
  Buffer.from(INFURA_ID + ":" + INFURA_SECRET_KEY).toString("base64");
// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  path: "/api/v0",
  headers: {
    authorization: auth,
  },
});

const PanelIndex = ({ web3Handler, account, marketplace, nft }) => {
  console.log(marketplace);
  console.log(nft);

  const assetsList = ["", "", "", "", "", "", "", ""];
  const collectionsList = ["", "", "", "", "", "", "", ""];
  const [assets, setAssets] = useState([]);

  const [creatingAsset, setCreatingAsset] = useState(false);
  const [instantStatus, setInstantStatus] = useState("");
  const [processingTitle, setProcessingTitle] = useState("");
  const [image, setImage] = useState("");

  const getAssets = async () => {
    // Get Assets
    const response = await axios.get("/api/nft/asset/all");
    if (response.data && response.data.data) {
      setAssets(response.data.data);
    }
  };

  const uploadToIPFS = async (event) => {
    event.preventDefault();
    // const file = event.target.files[0];
    const response = await axios({
      url: "/img/nfts/assets/7d74b2ada7d14a09abc3bfd07941597a.png",
      responseType: "blob",
    });
    const file = response.data;
    console.log(file);
    console.log(typeof file);
    if (typeof file !== "undefined") {
      try {
        const result = await client.add(file);
        console.log(result);
        setImage(`https://ipfs.io/ipfs/${result.path}`);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    }
  };

  const checkAssetData = async (artId) => {
    const formData = new FormData();
    // Image Data
    formData.append("artId", artId);

    const config = {
      headers: { "content-type": "application/json" },
    };

    const response = await axios.post("/api/nft/asset/data", formData, config);
    console.log("res", response);
    if (response.data && response.data.artData) {
      return response.data.artData;
    }
    return null;
  };

  const createNFT = async (asset) => {
    setProcessingTitle("Please, wait while your asset is being created.");
    setCreatingAsset(true);
    try {
      setInstantStatus("Preparing your asset data...");
      await waitTimeout(2000);

      const response = await axios.post("/api/nft/art/create", {
        itemId: asset.id,
      });
      console.log("responseData", response.data);
      if (
        response.data &&
        response.data.status === "success" &&
        response.data.artId
      ) {
        setInstantStatus("Creating your art...");
        // Check Progress of Creation of Art
        let artData = null;
        while (artData === null) {
          await waitTimeout(1000);
          artData = await checkAssetData(response.data.artId);
          console.log("artData", artData);
        }
        await waitTimeout(2000);
        // Upload Image to IPFS
        setInstantStatus("Adding your NFT to blockchain...");
        try {
          // download art from marketplace server
          // const config = {
          //   headers: { "response-type": "stream" },
          // };
          // const fileData = await axios.get(artData.image, config);
          // console.log("fileData", fileData.data);

          const response = await axios({
            url: artData.image,
            responseType: "blob",
          });
          const file = response.data;
          const result = await client.add(file);
          console.log(result);
          // Create Asset in Marketplace with the Art Created
          const res = await client.add(
            JSON.stringify({
              image: `https://ipfs.io/ipfs/${result.path}`,
              price: asset.price,
              name: asset.name,
              description: asset.description,
            })
          );
          setInstantStatus(
            "Please, follow instructions on Metamask popup on your browser..."
          );
          const tokenId = await mintItem(res);
          await waitTimeout(1000);
          // Save Asset Id
          const resp = await axios.post("/api/nft/asset/finalize", {
            itemId: asset.id,
            tokenId,
          });
          if (resp.data && resp.data.status === "success") {
            setInstantStatus("Congrats! Your NFT was created sucessfully!");
            await waitTimeout(2000);
            setCreatingAsset(false);
            // Refresh Assets
            getAssets();
          } else {
            setInstantStatus("Something went wrong while finalizing your NFT.");
            await waitTimeout(2000);
            setCreatingAsset(false);
          }
        } catch (error) {
          console.log("ipfs image upload error: ", error);
        }
      }

      // setInstantStatus("Creating your art...");
      // await waitTimeout(3000);
      // setInstantStatus("Creating your asset...");
      // await waitTimeout(1000);
      // // Create Asset in Marketplace with the Art Created
      // const result = await client.add(
      //   JSON.stringify({ image, price, name, description })
      // );
      // await mintItem(result);
      // setCreatingAsset(false);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }
    return;
  };
  const mintItem = async (result) => {
    const uri = `https://ipfs.io/ipfs/${result.path}`;
    // mint nft
    await (await nft.mint(uri)).wait();
    // get tokenId of new nft
    const id = await nft.tokenCount();
    // approve marketplace to spend nft
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();
    return id;
  };

  const listItem = async (price, tokenId, itemId) => {
    setProcessingTitle("Please, wait while your asset is being listed.");
    setCreatingAsset(true);
    setInstantStatus("Listing your item...");
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString());
    await (
      await marketplace.listItem(nft.address, tokenId, listingPrice)
    ).wait();
    setInstantStatus("One last step...");
    await waitTimeout(2000);
    // Mark As Listed
    const resp = await axios.post("/api/nft/asset/list", {
      itemId,
    });
    if (resp.data && resp.data.status === "success") {
      setInstantStatus("YAY! Your asset was listed sucessfully!");
      await waitTimeout(2000);
      setCreatingAsset(false);
      // Refresh Assets
      getAssets();
    }
  };

  // const finalizeAsset = (assetId) => {
  //   console.log("finalizing...", assetId);
  // };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <Layout
      web3Handler={web3Handler}
      account={account}
      marketplace={marketplace}
      nft={nft}
    >
      {creatingAsset ? (
        <ProcessingAnimation
          isLoading={creatingAsset}
          title={processingTitle}
          description={instantStatus}
        />
      ) : (
        ""
      )}
      <main class="pt-[5.5rem] lg:pt-24">
        <div class="relative">
          <img
            src="/img/user/banner.jpg"
            alt="banner"
            class="h-[18.75rem] object-cover"
          />
        </div>

        <section class="relative py-24 pt-20">
          <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/img/gradient_light.jpg"
              alt="gradient"
              class="h-full w-full"
            />
          </picture>
          <div class="container">
            <ul
              class="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="created-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#created"
                  type="button"
                  role="tab"
                  aria-controls="created"
                  aria-selected="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-1 h-5 w-5 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
                  </svg>
                  <span class="font-display text-base font-medium">
                    Assets (20)
                  </span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="collections-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#collections"
                  type="button"
                  role="tab"
                  aria-controls="collections"
                  aria-selected="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-1 h-5 w-5 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                  </svg>
                  <span class="font-display text-base font-medium">
                    Collections
                  </span>
                </button>
              </li>
            </ul>

            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="on-sale"
                role="tabpanel"
                aria-labelledby="on-sale-tab"
              >
                <AssetFilters />
                <AssetsTable
                  assets={assets}
                  finalize={createNFT}
                  listItem={listItem}
                />
              </div>

              <div
                class="tab-pane fade"
                id="owned"
                role="tabpanel"
                aria-labelledby="owned-tab"
              >
                <AssetFilters />
                <AssetGrid assets={assetsList} />
              </div>

              <div
                class="tab-pane fade"
                id="created"
                role="tabpanel"
                aria-labelledby="created-tab"
              >
                <AssetFilters />
                <AssetGrid assets={assetsList} />
              </div>

              <div
                class="tab-pane fade"
                id="collections"
                role="tabpanel"
                aria-labelledby="collections-tab"
              >
                <CollectionGrid collections={collectionsList} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PanelIndex;
