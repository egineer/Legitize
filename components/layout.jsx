import Head from "next/head";
import styles from "../styles/layout.module.css";
import Header from "./nav/header";
import Footer from "./nav/footer";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import MarketplaceAbi from "../nft/contractsData/Legitize-goerli.json";
import MarketplaceAddress from "../nft/contractsData/Legitize-goerli_address.json";
import NFTAbi from "../nft/contractsData/NFTMint-goerli.json";
import NFTAddress from "../nft/contractsData/nftMint-goerli_address.json";
import { ethers } from "ethers";

const name = "Ricano Dago";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children}) {

  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState(null);
  // MetaMask Login/Connect
  const web3Handler = async () => {
    console.log("called??");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    console.log(accounts);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
  };
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  };

  useEffect(() => {
    web3Handler();
  }, []);

  //Jordi's edit start. I added this function here for the layout to list the items. 
  console.log("marketplace", marketplace);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount();
    console.log("itemCount", itemCount);
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.Items(i);
      console.log("item", item);
      if (!item.sold) {
        try {
          // get uri url from nft contract
          const uri = await nft.tokenURI(item.tokenId);
          console.log("uri", uri);
          // use uri to fetch the nft metadata stored on ipfs
          const response = await fetch(uri);
          console.log(response);
          if (response.ok === true) {
            const metadata = await response.json();
            // get total price of item (item price + fee)
            const totalPrice = await marketplace.getTotalPrice(item.itemId);
            // Add item to items array
            items.push({
              totalPrice,
              itemId: item.itemId,
              seller: item.seller,
              name: metadata.name,
              description: metadata.description,
              image: metadata.image,
            });
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    }
    setLoading(false);
    console.log("items", items);
    setItems(items);
  };
  //Jordi's edit Stop.
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link rel="shortcut icon" href="img/favicon.ico" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.html" />
        <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
        <title>Legitize</title>
      </Head>
      <Header web3Handler={web3Handler} account={account}/>
      {children}
      <Footer/>
    </div>
  );
}
