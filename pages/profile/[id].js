import AssetFilters from "../../components/filters/assetFilters";
import AssetGrid from "../../components/grids/assetGrid";
import CollectionGrid from "../../components/grids/collectionGrid";
import Layout from "../../components/layout";
import UserProfile from "../../components/profile/userProfile";

const Profile = ({ web3Handler, account, marketplace, nft }) => {
  const assetsList = ["", "", "", "", "", "", "", ""];
  const collectionsList = ["", "", "", "", "", "", "", ""];
  return (
    <Layout
      web3Handler={web3Handler}
      account={account}
      marketplace={marketplace}
      nft={nft}
    >
      <main className="pt-[5.5rem] lg:pt-24">
        <div className="relative">
          <img
            src="/img/user/banner.jpg"
            alt="banner"
            className="h-[18.75rem] object-cover"
          />
        </div>

        <UserProfile account={account} />

        <section className="relative py-24 pt-20">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/img/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <ul
              className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="on-sale-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#on-sale"
                  type="button"
                  role="tab"
                  aria-controls="on-sale"
                  aria-selected="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-5 w-5 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                  </svg>
                  <span className="font-display text-base font-medium">
                    On Sale
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="owned-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#owned"
                  type="button"
                  role="tab"
                  aria-controls="owned"
                  aria-selected="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-5 w-5 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 8h3l-4 4-4-4h3V9h2v4z" />
                  </svg>
                  <span className="font-display text-base font-medium">
                    Owned
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
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
                    className="mr-1 h-5 w-5 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
                  </svg>
                  <span className="font-display text-base font-medium">
                    Created (20)
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
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
                    className="mr-1 h-5 w-5 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                  </svg>
                  <span className="font-display text-base font-medium">
                    Collections
                  </span>
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="on-sale"
                role="tabpanel"
                aria-labelledby="on-sale-tab"
              >
                <AssetFilters />
                <AssetGrid assets={assetsList} />
              </div>

              <div
                className="tab-pane fade"
                id="owned"
                role="tabpanel"
                aria-labelledby="owned-tab"
              >
                <AssetFilters />
                <AssetGrid assets={assetsList} />
              </div>

              <div
                className="tab-pane fade"
                id="created"
                role="tabpanel"
                aria-labelledby="created-tab"
              >
                <AssetFilters />
                <AssetGrid assets={assetsList} />
              </div>

              <div
                className="tab-pane fade"
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

export default Profile;
