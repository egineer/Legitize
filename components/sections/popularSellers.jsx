const PopularSellers = ()=>{

    const popularSellersItems = ["","","","","","","",""];

    return(
        <section class="relative py-4 md:py-10">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="img/gradient_light.jpg" alt="gradient" class="h-full w-full" />
        </picture>
        <div class="container">

          <h2 class="py-4 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
            Popular Sellers
          </h2>

          {/* <!-- Grid --> */}
          <div class="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
            {
                popularSellersItems.map((item,index)=>{
                    return(
                        <article>
                        <div
                          class="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                          style={{backgroundImage:"url(img/collections/collection_1_1.jpg)"}}
                        >
                          <a href="collection.html" class="flex space-x-[0.625rem]">
                            <span class="w-[100%]" style={{height:"150px"}}>
                            </span>
                          </a>
                          <div
                              class="flex rounded-2.5xl border border-jacarta-100 bg-white py-3 px-4 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                              >
                              <figure class="mr-4 shrink-0">
                                  <a href="collection.html" class="relative block">
                                  <img src="img/avatars/avatar_1.jpg" alt="avatar 1" class="rounded-2lg" loading="lazy" />
                                  </a>
                              </figure>
                              <div className="relative flex">
                                  <a href="collection.html" class="flex">
                                  <div class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white"
                                      >NFT Funny Cat 
                                                                        <div
                                      class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                      data-tippy-content="Verified Collection"
                                  >
                                      <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      class="h-[.875rem] w-[.875rem] fill-white"
                                      >
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                      </svg>
                                  </div>
                                      </div>
                                  </a>
                              </div>
                              </div>
                        </div>
                      </article>
                    )
                })
            }
          </div>
        </div>
      </section>
    )
}

export default PopularSellers;