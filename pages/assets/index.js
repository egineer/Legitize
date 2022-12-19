import Layout from "../../components/layout.jsx";

export default function Assets() {
  const assetItems = ["", "", "", "", "", "", "", ""];
  return (
    <Layout>
      <main>
        <section className="relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/img/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <h2 class="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
              Browse NFTs
            </h2>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="items"
                role="tabpanel"
                aria-labelledby="items-tab"
              >
                <div className="mb-8 flex flex-wrap items-center justify-between">
                  <div className="flex flex-wrap items-center">
                    <div className="my-1 mr-2.5">
                      <button
                        className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                        id="blockchainFilter"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z" />
                        </svg>
                        <span>Blockchain</span>
                      </button>
                      <div
                        className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="blockchainFilter"
                      >
                        <ul className="flex flex-col flex-wrap">
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              <span className="text-jacarta-700 dark:text-white">
                                Ethereum
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mb-[3px] h-4 w-4 fill-accent"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Polygon
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Flow
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Tezos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="my-1 mr-2.5">
                      <button
                        className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                        id="categoriesFilter"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                        </svg>
                        <span>Category</span>
                      </button>
                      <div
                        className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="categoriesFilter"
                      >
                        <ul className="flex flex-col flex-wrap">
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              <span className="text-jacarta-700 dark:text-white">
                                All
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mb-[3px] h-4 w-4 fill-accent"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Art
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Collectibles
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Domain
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Music
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Photography
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Virtual World
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="my-1 mr-2.5">
                      <button
                        className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                        type="button"
                        id="propertiesFilter"
                        data-bs-toggle="modal"
                        data-bs-target="#propertiesModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                        </svg>
                        <span>Properties</span>
                      </button>

                      <div
                        className="modal fade"
                        id="propertiesModal"
                        tabIndex="-1"
                        aria-labelledby="propertiesModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog max-w-md">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="propertiesModalLabel"
                              >
                                Properties
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                                >
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                              </button>
                            </div>

                            <div className="modal-body">
                              <div className="accordion" id="accordionProps">
                                <div className="accordion-item border-b border-jacarta-100 dark:border-jacarta-600">
                                  <h2
                                    className="accordion-header"
                                    id="prop-heading-1"
                                  >
                                    <button
                                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-6 py-5 font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#prop-background"
                                      aria-expanded="false"
                                      aria-controls="prop-background"
                                    >
                                      <span>Background</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 fill-jacarta-700 transition-transform dark:fill-white"
                                      >
                                        <path
                                          fill="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                      </svg>
                                    </button>
                                  </h2>
                                  <div
                                    id="prop-background"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="prop-heading-1"
                                    data-bs-parent="#accordionProps"
                                  >
                                    <div className="accordion-body px-2 pb-4">
                                      <div className="flex flex-col">
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Red</span>
                                          <span>14</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Green</span>
                                          <span>56</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Blue</span>
                                          <span>11</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>White</span>
                                          <span>25</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item border-b border-jacarta-100 dark:border-jacarta-600">
                                  <h2
                                    className="accordion-header"
                                    id="prop-heading-2"
                                  >
                                    <button
                                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-6 py-5 font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#prop-eyes"
                                      aria-expanded="false"
                                      aria-controls="prop-eyes"
                                    >
                                      <span>Eyes</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 fill-jacarta-700 transition-transform dark:fill-white"
                                      >
                                        <path
                                          fill="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                      </svg>
                                    </button>
                                  </h2>
                                  <div
                                    id="prop-eyes"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="prop-heading-2"
                                    data-bs-parent="#accordionProps"
                                  >
                                    <div className="accordion-body px-2 pb-4">
                                      <div className="flex flex-col">
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Red</span>
                                          <span>14</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Green</span>
                                          <span>56</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Blue</span>
                                          <span>11</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>White</span>
                                          <span>25</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="prop-heading-3"
                                  >
                                    <button
                                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-6 py-5 font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#prop-face"
                                      aria-expanded="false"
                                      aria-controls="prop-face"
                                    >
                                      <span>Face</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 fill-jacarta-700 transition-transform dark:fill-white"
                                      >
                                        <path
                                          fill="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                      </svg>
                                    </button>
                                  </h2>
                                  <div
                                    id="prop-face"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="prop-heading-3"
                                    data-bs-parent="#accordionProps"
                                  >
                                    <div className="accordion-body px-2 pb-4">
                                      <div className="flex flex-col">
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Red</span>
                                          <span>14</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Green</span>
                                          <span>56</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>Blue</span>
                                          <span>11</span>
                                        </button>
                                        <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                          <span>White</span>
                                          <span>25</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="modal-footer">
                              <div className="flex items-center justify-center space-x-4">
                                <button
                                  type="button"
                                  className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                >
                                  Clear All
                                </button>
                                <button
                                  type="button"
                                  className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="propertiesFilter"
                      >
                        <ul className="flex flex-col flex-wrap">
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              <span className="text-jacarta-700 dark:text-white">
                                All
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mb-[3px] h-4 w-4 fill-accent"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Art
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Collectibles
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Domain
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Music
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Photography
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Virtual World
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="my-1 mr-2.5">
                      <button
                        className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                        id="saleTypeFilter"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z" />
                        </svg>
                        <span>Sale type</span>
                      </button>
                      <div
                        className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="saleTypeFilter"
                      >
                        <ul className="flex flex-col flex-wrap">
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              <span className="text-jacarta-700 dark:text-white">
                                Timed auction
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mb-[3px] h-4 w-4 fill-accent"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Fixed price
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Not for sale
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Open for offers
                            </a>
                          </li>
                        </ul>

                        <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                          <button
                            type="button"
                            className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                          >
                            Clear
                          </button>
                          <button
                            type="button"
                            className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="my-1 mr-2.5">
                      <button
                        className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                        id="priceRangeFilter"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                        </svg>
                        <span>Price Range</span>
                      </button>

                      <div
                        className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="priceRangeFilter"
                      >
                        <div className="dropdown mb-4 cursor-pointer px-5 pt-2">
                          <div
                            className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 py-3.5 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                            role="button"
                            id="filterPriceBlockchain"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="flex items-center font-display">
                              <img
                                src="/img/chains/ETH.png"
                                alt="eth"
                                className="mr-2 h-5 w-5 rounded-full"
                              />
                              ETH
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                            </svg>
                          </div>

                          <div
                            className="dropdown-menu z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                            aria-labelledby="filterPriceBlockchain"
                          >
                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                              <span className="flex items-center">
                                <img
                                  src="/img/chains/ETH.png"
                                  alt="eth"
                                  className="mr-2 h-5 w-5 rounded-full"
                                />
                                ETH
                              </span>
                            </button>
                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                              <span className="flex items-center">
                                <img
                                  src="/img/chains/FLOW.png"
                                  alt="flow"
                                  className="mr-2 h-5 w-5 rounded-full"
                                />
                                FLOW
                              </span>
                            </button>

                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                              <span className="flex items-center">
                                <img
                                  src="/img/chains/FUSD.png"
                                  alt="fusd"
                                  className="mr-2 h-5 w-5 rounded-full"
                                />
                                FUSD
                              </span>
                            </button>

                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                              <span className="flex items-center">
                                <img
                                  src="/img/chains/XTZ.png"
                                  alt="xtz"
                                  className="mr-2 h-5 w-5 rounded-full"
                                />
                                XTZ
                              </span>
                            </button>

                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                              <span className="flex items-center">
                                <img
                                  src="/img/chains/DAI.png"
                                  alt="dai"
                                  className="mr-2 h-5 w-5 rounded-full"
                                />
                                DAI
                              </span>
                            </button>

                            <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                              <span className="flex items-center">
                                <img
                                  src="/img/chains/RARI.png"
                                  alt="rari"
                                  className="mr-2 h-5 w-5 rounded-full"
                                />
                                RARI
                              </span>
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 px-5 pb-2">
                          <input
                            type="number"
                            placeholder="From"
                            className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                          />
                          <input
                            type="number"
                            placeholder="To"
                            className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                          />
                        </div>

                        <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                          <button
                            type="button"
                            className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                          >
                            Clear
                          </button>
                          <button
                            type="button"
                            className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown my-1 cursor-pointer">
                    <div
                      className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                      role="button"
                      id="sort"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="font-display">Recently Added</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </div>

                    <div
                      className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                      aria-labelledby="sort"
                    >
                      <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">
                        Sort By
                      </span>
                      <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Recently Added
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="mb-[3px] h-4 w-4 fill-accent"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      </button>
                      <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Price: Low to High
                      </button>

                      <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Price: High to Low
                      </button>

                      <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Auction ending soon
                      </button>
                      <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">
                        Options
                      </span>
                      <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        <span className="flex items-center justify-between">
                          <span>Verified Only</span>
                          <input
                            type="checkbox"
                            value="checkbox"
                            name="check"
                            checked
                            className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                          />
                        </span>
                      </div>
                      <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        <span className="flex items-center justify-between">
                          <span>NFSW Only</span>
                          <input
                            type="checkbox"
                            value="checkbox"
                            name="check"
                            className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                          />
                        </span>
                      </div>
                      <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        <span className="flex items-center justify-between">
                          <span>Show Lazy Minted</span>
                          <input
                            type="checkbox"
                            value="checkbox"
                            name="check"
                            className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                  {assetItems.map((asset, index) => {
                    return (
                      <article>
                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                          <figure className="relative">
                            <a href="item.html">
                              <img
                                src="/img/products/item_5.jpg"
                                alt="item 5"
                                className="w-full rounded-[0.625rem]"
                                loading="lazy"
                              />
                            </a>
                            <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                              <span
                                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                data-tippy-content="Favorite"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                >
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                </svg>
                              </span>
                              <span className="text-sm dark:text-jacarta-200">
                                15
                              </span>
                            </div>
                            <div className="absolute left-3 -bottom-3">
                              <div className="flex -space-x-2">
                                <a href="#">
                                  <img
                                    src="/img/avatars/creator_1.png"
                                    alt="creator"
                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                    data-tippy-content="Creator: Sussygirl"
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/img/avatars/owner_1.png"
                                    alt="owner"
                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                    data-tippy-content="Owner: Sussygirl"
                                  />
                                </a>
                              </div>
                            </div>
                          </figure>
                          <div className="mt-7 flex items-center justify-between">
                            <a href="item.html">
                              <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                Flourishing Cat #180
                              </span>
                            </a>
                            <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                              <a
                                href="#"
                                className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                role="button"
                                id="itemActions"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <svg
                                  width="16"
                                  height="4"
                                  viewBox="0 0 16 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="fill-jacarta-500 dark:fill-jacarta-200"
                                >
                                  <circle cx="2" cy="2" r="2" />
                                  <circle cx="8" cy="2" r="2" />
                                  <circle cx="14" cy="2" r="2" />
                                </svg>
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                aria-labelledby="itemActions"
                              >
                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                  New bid
                                </button>
                                <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                  Refresh Metadata
                                </button>
                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                  Share
                                </button>
                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                  Report
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                              From 8.49 ETH
                            </span>
                            <span className="text-jacarta-500 dark:text-jacarta-300">
                              2/8
                            </span>
                          </div>

                          <div className="mt-8 flex items-center justify-between">
                            <button
                              className="font-display text-sm font-semibold text-accent"
                              data-bs-toggle="modal"
                              data-bs-target="#buyNowModal"
                            >
                              Buy now
                            </button>
                            <a
                              href="item.html"
                              className="group flex items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                              >
                                <path fill="none" d="M0 0H24V24H0z" />
                                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                              </svg>
                              <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                View History
                              </span>
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
