import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout.jsx";
import HeroBanner from "../components/banner/hero.jsx";
import styles from "../styles/Home.module.css";
import FeaturedItemsSection from "../components/sections/featuredItems.js";
import CollectionsSection from "../components/sections/collections.jsx";
import PopularSellers from "../components/sections/popularSellers.jsx";
import { isValidUrl } from "../helpers/frontend";

export default function Home({ web3Handler, account, marketplace, nft }) {
  const collectionItems = [{}, {}, {}, {}, {}, {}];
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount();
    const tempItems = [];
    for (let i = 3; i <= itemCount; i++) {
      const item = await marketplace.Items(i);
      console.log("item", item);
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        console.log("uri", uri);
        // use uri to fetch the nft metadata stored on ipfs
        if (isValidUrl(uri)) {
          const response = await fetch(uri);
          console.log("response", response);
          if (response.ok === true) {
            const metadata = await response.json();
            // get total price of item (item price + fee)
            const totalPrice = await marketplace.getTotalPrice(item.itemId);
            // Add item to items array
            tempItems.push({
              totalPrice,
              itemId: item.itemId,
              tokenId: item.tokenId,
              seller: item.seller,
              name: metadata.name,
              description: metadata.description,
              image: metadata.image,
            });
          }
        }
      }
    }
    setLoading(false);
    console.log("items", tempItems);
    // Update Items Saved In Local Storage
    localStorage.setItem("assets", JSON.stringify(tempItems));
    setItems(tempItems);
  };

  const buyMarketItem = async (item) => {
    await (
      await marketplace.buyItem(item.itemId, { value: item.totalPrice })
    ).wait();
    loadMarketplaceItems();
  };

  useEffect(() => {
    if (marketplace) {
      loadMarketplaceItems();
    }
  }, [marketplace]);

  useEffect(() => {
    // Load Assets From Local Storage
    const assets = localStorage.getItem("assets");
    if (assets) {
      setItems(JSON.parse(assets));
    }
  }, []);

  return (
    <Layout
      web3Handler={web3Handler}
      account={account}
      marketplace={marketplace}
      nft={nft}
    >
      <main>
        <HeroBanner />
        <CollectionsSection />
        {items.length ? <FeaturedItemsSection items={items} /> : ""}
        <PopularSellers />
      </main>
    </Layout>
  );
}
