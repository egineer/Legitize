const CollectionGrid = ({collections})=>{
    return(
      <div class="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
        {
            collections.map((collection,index)=>{
                return(
                    <article key={index}>
                    <div
                      class="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <a href="collection.html" class="flex space-x-[0.625rem]">
                        <span class="w-[74.5%]">
                          <img
                            src="img/collections/collection_1_1.jpg"
                            alt="item 1"
                            class="h-full w-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />
                        </span>
                        <span class="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img
                            src="img/collections/collection_1_2.jpg"
                            alt="item 1"
                            class="h-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />
                          <img
                            src="img/collections/collection_1_3.jpg"
                            alt="item 1"
                            class="h-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />
                          <img
                            src="img/collections/collection_1_4.jpg"
                            alt="item 1"
                            class="h-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />
                        </span>
                      </a>
          
                      <a
                        href="collection.html"
                        class="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                      >
                        Art Me Outside
                      </a>
          
                      <div class="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                        <div class="flex flex-wrap items-center">
                          <a href="user.html" class="mr-2 shrink-0">
                            <img src="img/avatars/owner_5.png" alt="owner" class="h-5 w-5 rounded-full" />
                          </a>
                          <span class="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" class="text-accent">
                            <span>Wow Frens</span>
                          </a>
                        </div>
                        <span class="text-sm dark:text-jacarta-300">10K Items</span>
                      </div>
                    </div>
                  </article>
                )
            })
        }
      </div>
    )
}

export default CollectionGrid;