import React from "react";
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

export default function Layout({ children, web3Handler, account, marketplace , nft}) {

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
      <div id="app">
      {children}
      </div>
      <Footer/>
    </div>
  );
}
