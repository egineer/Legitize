import Layout from "../../components/layout.jsx";
import CollectionsSection from "../../components/sections/collections.jsx";

export default function Collections() {
  const collectionItems = [{}, {}, {}, {}, {}, {}];

  return (
    <Layout>
      <main>
        <CollectionsSection />
      </main>
    </Layout>
  );
}
