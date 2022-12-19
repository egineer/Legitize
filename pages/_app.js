import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import MarketplaceAbi from "../nft/contractsData/Legitize-goerli.json";
import MarketplaceAddress from "../nft/contractsData/Legitize-goerli_address.json";
import NFTAbi from "../nft/contractsData/NFTMint-goerli.json";
import NFTAddress from "../nft/contractsData/nftMint-goerli_address.json";
import { useState } from "react";
import { ethers } from "ethers";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
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

  return (
    <SessionProvider session={pageProps.session}>
      <Component
        {...pageProps}
        web3Handler={web3Handler}
        account={account}
        marketplace={marketplace}
        nft={nft}
        loading={loading}
      />
    </SessionProvider>
  );
}

export default MyApp;
