const RelatedAssets = ()=>{

    return(
        <section class="bg-light-base py-24 dark:bg-jacarta-800">
        <div class="container">
          <h2 class="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            Related Assets
          </h2>

          <div class="relative">
            <div class="swiper card-slider-4-columns !py-5">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <article>
                    <div
                      class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure>
                        <a href="item.html">
                          <img
                            src="/img/products/item_1.jpg"
                            alt="item 1"
                            width="230"
                            height="230"
                            class="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                        </a>
                      </figure>
                      <div class="mt-4 flex items-center justify-between">
                        <a href="item.html">
                          <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >ETH Me Outside</span
                          >
                        </a>
                        <span
                          class="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600"
                        >
                          <span data-tippy-content="ETH">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 1920 1920"
                              xmlSpace="preserve"
                              class="h-4 w-4"
                            >
                              <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                              <path
                                fill="#62688F"
                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                              />
                              <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                              <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                              <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                            </svg>
                          </span>
                          <span class="text-sm font-medium tracking-tight text-green">1.55 ETH</span>
                        </span>
                      </div>
                      <div class="mt-2 text-sm">
                        <span class="dark:text-jacarta-300">Current Bid</span>
                        <span class="text-jacarta-700 dark:text-jacarta-100">1.3 ETH</span>
                      </div>

                      <div class="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          class="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#placeBidModal"
                        >
                          Place bid
                        </button>

                        <div class="flex items-center space-x-1">
                          <span
                            class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          <span class="text-sm dark:text-jacarta-200">159</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <div
                      class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure>
                        <a href="item.html">
                          <img
                            src="/img/products/item_2.jpg"
                            alt="item 2"
                            width="230"
                            height="230"
                            class="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                        </a>
                      </figure>
                      <div class="mt-4 flex items-center justify-between">
                        <a href="item.html">
                          <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >Lazyone Panda</span
                          >
                        </a>
                        <span
                          class="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600"
                        >
                          <span data-tippy-content="ETH">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 1920 1920"
                              xmlSpace="preserve"
                              class="h-4 w-4"
                            >
                              <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                              <path
                                fill="#62688F"
                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                              />
                              <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                              <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                              <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                            </svg>
                          </span>
                          <span class="text-sm font-medium tracking-tight text-green">2 ETH</span>
                        </span>
                      </div>
                      <div class="mt-2 text-sm">
                        <span class="dark:text-jacarta-300">Current Bid</span>
                        <span class="text-jacarta-700 dark:text-jacarta-100">0.001 ETH</span>
                      </div>

                      <div class="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          class="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#placeBidModal"
                        >
                          Place bid
                        </button>
                        <div class="flex items-center space-x-1">
                          <span
                            class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          <span class="text-sm dark:text-jacarta-200">75</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <div
                      class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure>
                        <a href="item.html">
                          <img
                            src="/img/products/item_6.jpg"
                            alt="item 6"
                            width="230"
                            height="230"
                            class="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                        </a>
                      </figure>
                      <div class="mt-4 flex items-center justify-between">
                        <a href="item.html">
                          <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >Splendid Girl</span
                          >
                        </a>
                        <span
                          class="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600"
                        >
                          <span data-tippy-content="ETH">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 1920 1920"
                              xmlSpace="preserve"
                              class="h-4 w-4"
                            >
                              <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                              <path
                                fill="#62688F"
                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                              />
                              <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                              <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                              <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                            </svg>
                          </span>
                          <span class="text-sm font-medium tracking-tight text-green">5.1 ETH</span>
                        </span>
                      </div>
                      <div class="mt-2 text-sm">
                        <span class="dark:text-jacarta-300">Current Bid</span>
                        <span class="text-jacarta-700 dark:text-jacarta-100">4.7 ETH</span>
                      </div>

                      <div class="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          class="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#placeBidModal"
                        >
                          Place bid
                        </button>
                        <div class="flex items-center space-x-1">
                          <span
                            class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          <span class="text-sm dark:text-jacarta-200">253</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <div
                      class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure>
                        <a href="item.html">
                          <img
                            src="/img/products/item_4.jpg"
                            alt="item 4"
                            width="230"
                            height="230"
                            class="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                        </a>
                      </figure>
                      <div class="mt-4 flex items-center justify-between">
                        <a href="item.html">
                          <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >Amazing NFT art</span
                          >
                        </a>
                        <span
                          class="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600"
                        >
                          <span data-tippy-content="ETH">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 1920 1920"
                              xmlSpace="preserve"
                              class="h-4 w-4"
                            >
                              <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                              <path
                                fill="#62688F"
                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                              />
                              <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                              <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                              <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                            </svg>
                          </span>
                          <span class="text-sm font-medium tracking-tight text-green">7 ETH</span>
                        </span>
                      </div>
                      <div class="mt-2 text-sm">
                        <span class="dark:text-jacarta-300">Current Bid</span>
                        <span class="text-jacarta-700 dark:text-jacarta-100">1.2 ETH</span>
                      </div>

                      <div class="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          class="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#placeBidModal"
                        >
                          Place bid
                        </button>
                        <div class="flex items-center space-x-1">
                          <span
                            class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          <span class="text-sm dark:text-jacarta-200">324</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <div
                      class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure class="relative">
                        <a href="item.html">
                          <img
                            src="/img/pixel.jpg"
                            data-src="./img/products/item_3.gif"
                            alt="item 3"
                            width="230"
                            height="230"
                            class="swiper-lazy w-full rounded-[0.625rem]"
                          />
                          <div class="swiper-lazy-preloader"></div>
                        </a>
                      </figure>
                      <div class="mt-4 flex items-center justify-between">
                        <a href="item.html">
                          <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >Portrait Gallery</span
                          >
                        </a>
                        <span
                          class="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600"
                        >
                          <span data-tippy-content="ETH">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 1920 1920"
                              xmlSpace="preserve"
                              class="h-4 w-4"
                            >
                              <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                              <path
                                fill="#62688F"
                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                              />
                              <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                              <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                              <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                            </svg>
                          </span>
                          <span class="text-sm font-medium tracking-tight text-green">0.7 ETH</span>
                        </span>
                      </div>
                      <div class="mt-2 text-sm">
                        <span class="dark:text-jacarta-300">Current Bid</span>
                        <span class="text-jacarta-700 dark:text-jacarta-100">0.05 ETH</span>
                      </div>

                      <div class="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          class="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#placeBidModal"
                        >
                          Place bid
                        </button>
                        <div class="flex items-center space-x-1">
                          <span
                            class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          <span class="text-sm dark:text-jacarta-200">54</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <div
                      class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure class="relative">
                        <a href="item.html">
                          <img
                            src="/img/pixel.jpg"
                            data-src="./img/products/item_5.jpg"
                            alt="item 5"
                            width="230"
                            height="230"
                            class="swiper-lazy w-full rounded-[0.625rem]"
                          />
                          <div class="swiper-lazy-preloader"></div>
                        </a>
                      </figure>
                      <div class="mt-4 flex items-center justify-between">
                        <a href="item.html">
                          <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >Flourishing Cat #180</span
                          >
                        </a>
                        <span
                          class="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600"
                        >
                          <span data-tippy-content="ETH">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 1920 1920"
                              xmlSpace="preserve"
                              class="h-4 w-4"
                            >
                              <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                              <path
                                fill="#62688F"
                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                              />
                              <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                              <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                              <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                            </svg>
                          </span>
                          <span class="text-sm font-medium tracking-tight text-green">3 ETH</span>
                        </span>
                      </div>
                      <div class="mt-2 text-sm">
                        <span class="dark:text-jacarta-300">Current Bid</span>
                        <span class="text-jacarta-700 dark:text-jacarta-100">0.25 ETH</span>
                      </div>

                      <div class="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          class="font-display text-sm font-semibold text-accent"
                          data-bs-toggle="modal"
                          data-bs-target="#placeBidModal"
                        >
                          Place bid
                        </button>
                        <div class="flex items-center space-x-1">
                          <span
                            class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          <span class="text-sm dark:text-jacarta-200">125</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div
              class="swiper-button-prev group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="fill-jacarta-700 group-hover:fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
              </svg>
            </div>
            <div
              class="swiper-button-next group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="fill-jacarta-700 group-hover:fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    )
}

export default RelatedAssets;