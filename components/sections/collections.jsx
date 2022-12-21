const CollectionsSection = ()=>{

    return(
        <section className="relative py-16 md:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
        </picture>
        <div className="container">

          <h2 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
            Explore Collections
          </h2>

          {/* <!-- Filters --> */}
          <div className="mb-8 flex flex-wrap items-center justify-between">
            <ul className="flex flex-wrap items-center">
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center justify-center rounded-lg bg-jacarta-100 px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                  >All</a
                >
              </li>
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                    />
                  </svg>
                  <span>Art</span>
                </a>
              </li>
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                    />
                  </svg>
                  <span>Collectibles</span>
                </a>
              </li>
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
                    />
                  </svg>
                  <span>Domain</span>
                </a>
              </li>
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                  </svg>
                  <span>Music</span>
                </a>
              </li>
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"
                    />
                  </svg>
                  <span>Photography</span>
                </a>
              </li>
              <li className="my-1 mr-2.5">
                <a
                  href="#"
                  className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
                    />
                  </svg>
                  <span>Virtual World</span>
                </a>
              </li>
              <li className="my-1 mr-2.5">
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
                        <path
                          d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
                        />
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
                            <span className="text-jacarta-700 dark:text-white">All</span>
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
              </li>
            </ul>
            <div className="dropdown relative my-1 cursor-pointer">
              <div
                className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                role="button"
                id="categoriesSort"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="font-display">Trending</span>
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
                className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                aria-labelledby="categoriesSort"
              >
                <button
                  className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  Trending
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-4 w-4 fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </button>
                <button
                  className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  Top
                </button>

                <button
                  className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  Recent
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_1_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_1_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_1_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_1_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  Art Me Outside
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_5.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>Wow Frens</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">10K Assets</span>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_2_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_2_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_2_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_2_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  PankySkal
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_9.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>NFT stars</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">2.8K Assets</span>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_3_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_3_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_3_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_3_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  VR Space_287
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_4.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>Origin Morish</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">8K Assets</span>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_4_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_4_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_4_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_4_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  Metasmorf
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_10.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>Lazy Panda</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">1.5K Assets</span>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_5_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_5_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_5_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_5_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  3Landers
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_11.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>051_Hart</span>
                    </a>
                  </div>
                  <div className="">
                  <span className="text-sm dark:text-jacarta-300"><span className="text-jacarta-500 text-xs">15K</span> Assets</span><br/>
                  <span className="text-sm dark:text-jacarta-300"><span className="text-jacarta-500 text-xs">Floor Price</span> 1000 $</span>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_6_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_6_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_6_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_6_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  SlimHoods
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_3.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>Crytopank</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">8.8K Assets</span>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_7_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_7_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_7_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_7_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  The Overseers
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/creator_2.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>Hey Mrsmeseks</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">13K Assets</span>
                </div>
              </div>
            </article>
            <article>
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
              >
                <a href="collection.html" className="flex space-x-[0.625rem]">
                  <span className="w-[74.5%]">
                    <img
                      src="img/collections/collection_8_1.jpg"
                      alt="item 1"
                      className="h-full w-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                    <img
                      src="img/collections/collection_8_2.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_8_3.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                    <img
                      src="img/collections/collection_8_4.jpg"
                      alt="item 1"
                      className="h-full rounded-[0.625rem] object-cover"
                      loading="lazy"
                    />
                  </span>
                </a>

                <a
                  href="collection.html"
                  className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                  Dope Shibas
                </a>

                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                  <div className="flex flex-wrap items-center">
                    <a href="user.html" className="mr-2 shrink-0">
                      <img src="img/avatars/owner_12.png" alt="owner" className="h-5 w-5 rounded-full" />
                    </a>
                    <span className="mr-1 dark:text-jacarta-400">by</span>
                    <a href="user.html" className="text-accent">
                      <span>alyxbow</span>
                    </a>
                  </div>
                  <span className="text-sm dark:text-jacarta-300">3K Assets</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
}

export default CollectionsSection;