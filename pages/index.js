import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout.jsx";
import HeroBanner from "../components/banner/hero.jsx";
import styles from "../styles/Home.module.css";
import CategoriesSection from "../components/sections/categories.jsx";
import CollectionsSection from "../components/sections/collections.jsx";
import PopularSellers from "../components/sections/popularSellers.jsx";

export default function Home({ web3Handler, account, marketplace, nft }) {
  const collectionItems = [{}, {}, {}, {}, {}, {}];
  console.log("marketplace", marketplace);
  console.log("nft", nft)
  console.log("Account", account)
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

  return (
    <Layout web3Handler={web3Handler} account={account} marketplace={marketplace} nft={nft}>
      <main>
        <HeroBanner />
        <CollectionsSection />
        <CategoriesSection items={items} />
        <PopularSellers />
      </main>
    </Layout>
  );
}
