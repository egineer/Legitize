const AssetItem = ({item})=>{
    return(
        <article>
        <div
          className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
        >
          <figure className="relative">
            <a href="item.html">
              <img
                src="/img/products/item_5.jpg"
                alt="item 5"
                className="w-full rounded-[0.625rem]"
                loading="lazy"
              />
            </a>
            <div
              className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700"
            >
              <span
                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../public/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
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
                  <path
                    d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                  />
                </svg>
              </span>
              <span className="text-sm dark:text-jacarta-200">15</span>
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
              <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                >Flourishing Cat #180</span
              >
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
                <button
                  className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  New bid
                </button>
                <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                <button
                  className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  Refresh Metadata
                </button>
                <button
                  className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  Share
                </button>
                <button
                  className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                >
                  Report
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm">
            <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 8.49 ETH</span>
            <span className="text-jacarta-500 dark:text-jacarta-300">2/8</span>
          </div>

          <div className="mt-8 flex items-center justify-between">
                            <button
                              className="font-display text-sm font-semibold text-accent"
                              data-bs-toggle="modal"
                              data-bs-target="#buyNowModal"
                            >
                              Add To Cart
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
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                              </svg>
                              <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                Buy Now
                              </span>
                            </a>
                          </div>
        </div>
      </article>
    )
}

export default AssetItem;