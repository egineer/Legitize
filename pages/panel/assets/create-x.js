import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import ProcessingAnimation from "../../../components/snippets/ProcessingAnimation";
import axios from "axios";

const INFURA_ID = "2J6mV3mY32wEj3TH7JYg0TO6GF2";
const INFURA_SECRET_KEY = "a1fe14c959a81ceccd7abe17aff35f30";
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

const CreateAsset = ({ web3Handler, account, marketplace, nft }) => {
  console.log("nft", nft);
  const [creatingAsset, setCreatingAsset] = useState(false);
  const [instantStatus, setInstantStatus] = useState("");
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const uploadToIPFS = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
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

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== "undefined") {
      setSelectedFile(file);
    }
  };

  const waitTimeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const checkAssetData = async (artId) => {
    const formData = new FormData();
    // Image Data
    formData.append("artId", artId);

    const config = {
      headers: { "content-type": "application/json" },
    };

    const response = await axios.post("/api/nft/asset/data", formData, config);

    if (response.data && response.data.artData) {
      return response.data.artData;
    }
    return null;
  };

  const createNFT = async () => {
    if (!selectedFile || !name || !description || !price) return;
    setCreatingAsset(true);
    try {
      // Upload Image to create NFT art
      setInstantStatus("Uploading photo...");
      await waitTimeout(5000);

      const formData = new FormData();
      // Image Data
      formData.append("image", selectedFile);
      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event) => {
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          );
        },
      };

      const response = await axios.post(
        "/api/nft/art/create",
        formData,
        config
      );
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
          const config = {
            headers: { "response-type": "blob" },
          };
          const fileData = await axios.get(artData.image, config);
          console.log("fileData", fileData.data);
          const result = await client.add(fileData.data);
          console.log(result);
          setImage(`https://ipfs.io/ipfs/${result.path}`);
          // Create Asset in Marketplace with the Art Created
          const res = await client.add(
            JSON.stringify({ image, price, name, description })
          );
          setInstantStatus("Sit tight. Your NFT is being finalized...");
          await mintItem(res);
          await waitTimeout(1000);
          setInstantStatus("Congrats! Your NFT was created sucessfully!");
          await waitTimeout(2000);
          setCreatingAsset(false);
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
  };

  const listItem = async (price, id) => {
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString());
    await (await marketplace.listItem(nft.address, id, listingPrice)).wait();
  };

  // useEffect(() => {
  //   if (creatingAsset) {
  //     createNFT();
  //   }
  // }, [creatingAsset]);

  const pageContent = (
    <section class="relative py-24">
      <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="/img/gradient_light.jpg"
          alt="gradient"
          class="h-full w-full"
        />
      </picture>
      <div class="container">
        <h1 class="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
          Create an Asset
        </h1>

        <div class="mx-auto max-w-[48.125rem]">
          <div class="mb-6">
            <label class="mb-2 block font-display text-jacarta-700 dark:text-white">
              Image, Video, Audio, or 3D Model
              <span class="text-red">*</span>
            </label>
            <p class="mb-3 text-2xs dark:text-jacarta-300">
              Drag or choose your file to upload
            </p>

            <div class="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700">
              <div class="relative z-10 cursor-pointer">
                {selectedFile ? (
                  <>
                    <img src={URL.createObjectURL(selectedFile)} />
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="mb-4 inline-block fill-jacarta-500 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                    </svg>
                    <p class="mx-auto max-w-xs text-xs dark:text-jacarta-300">
                      JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.
                      Max size: 100 MB
                    </p>
                  </>
                )}
              </div>
              <div class="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
              <input
                type="file"
                accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                id="file-upload"
                class="absolute inset-0 z-20 cursor-pointer opacity-0"
                onChange={handleFileUpload}
              />
            </div>
          </div>

          <div class="mb-6">
            <label
              for="item-name"
              class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Name<span class="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              placeholder="Item name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="mb-6">
            <label
              for="item-description"
              class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Description
            </label>
            <p class="mb-3 text-2xs dark:text-jacarta-300">
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </p>
            <textarea
              id="item-description"
              class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              rows="4"
              required
              placeholder="Provide a detailed description of your item."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div class="mb-6">
            <label
              for="item-name"
              class="mb-2 block font-display text-jacarta-700 dark:text-white"
            >
              Price (ETH)<span class="text-red">*</span>
            </label>
            <input
              type="number"
              id="item-name"
              class="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
              placeholder="Item Price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button
            class="cursor-pointer rounded-full bg-accent py-3 px-8 text-center font-semibold text-white transition-all"
            onClick={() => {
              createNFT();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <Layout web3Handler={web3Handler} account={account}>
      <main>
        {creatingAsset ? (
          <ProcessingAnimation
            isLoading={creatingAsset}
            title={"Please, wait while your asset is being created."}
            description={instantStatus}
          />
        ) : (
          ""
        )}
        {pageContent}
      </main>
    </Layout>
  );
};

export default CreateAsset;
