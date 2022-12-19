import Layout from "../../components/layout"
import AssetFilters from "../../components/filters/assetFilters"
import AssetGrid from "../../components/grids/assetGrid"
import CollectionGrid from "../../components/grids/collectionGrid"
import AssetsTable from "../../components/tables/assetsTable"
import CollectionsTable from "../../components/tables/collectionTable"

const PanelIndex = ()=>{

    const assetsList = ["","","","","","","",""];
    const collectionsList = ["","","","","","","",""];
    return(
        <Layout>
            <main class="pt-[5.5rem] lg:pt-24">

                <div class="relative">
                <img src="/img/user/banner.jpg" alt="banner" class="h-[18.75rem] object-cover" />
                </div>

                <section class="relative py-24 pt-20">
                <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="/img/gradient_light.jpg" alt="gradient" class="h-full w-full" />
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
                            <path
                            d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z"
                            />
                        </svg>
                        <span class="font-display text-base font-medium">Assets (20)</span>
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
                            <path
                            d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                            />
                        </svg>
                        <span class="font-display text-base font-medium">Collections</span>
                        </button>
                    </li>
                    </ul>

                    <div class="tab-content">
                    <div class="tab-pane fade show active" id="on-sale" role="tabpanel" aria-labelledby="on-sale-tab">
                    <AssetFilters/>
                    <AssetsTable/>
                    </div>

                    <div class="tab-pane fade" id="owned" role="tabpanel" aria-labelledby="owned-tab">
                    <AssetFilters/>
                    <AssetGrid assets={assetsList}/>
                    </div>

                    <div class="tab-pane fade" id="created" role="tabpanel" aria-labelledby="created-tab">
                    <AssetFilters/>
                    <AssetGrid assets={assetsList}/>
                    </div>

                    <div class="tab-pane fade" id="collections" role="tabpanel" aria-labelledby="collections-tab">
                    <CollectionGrid collections={collectionsList}/>
                    </div>
                    </div>
                </div>
                </section>
                </main>
        </Layout>
    )
}

export default PanelIndex;