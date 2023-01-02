import Layout from "../../components/layout.jsx";
import CollectionsSection from "../../components/sections/collections.jsx";

export default function Collections({
  web3Handler,
  account,
  marketplace,
  nft,
}) {
  const collectionItems = [{}, {}, {}, {}, {}, {}];

  return (
    <Layout
      web3Handler={web3Handler}
      account={account}
      marketplace={marketplace}
      nft={nft}
    >
      <main>
        <CollectionsSection />
      </main>
    </Layout>
  );
}
