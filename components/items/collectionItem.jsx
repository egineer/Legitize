const CollectionItem = ({collection})=>{
    return(
        <article>
        <div
          className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
        >
          <a href="collection.html" className="flex space-x-[0.625rem]">
            <span className="w-[74.5%]">
              <img
                src="/img/collections/collection_1_1.jpg"
                alt="item 1"
                className="h-full w-full rounded-[0.625rem] object-cover"
                loading="lazy"
              />
            </span>
            <span className="flex w-1/3 flex-col space-y-[0.625rem]">
              <img
                src="/img/collections/collection_1_2.jpg"
                alt="item 1"
                className="h-full rounded-[0.625rem] object-cover"
                loading="lazy"
              />
              <img
                src="/img/collections/collection_1_3.jpg"
                alt="item 1"
                className="h-full rounded-[0.625rem] object-cover"
                loading="lazy"
              />
              <img
                src="/img/collections/collection_1_4.jpg"
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
                <img src="/img/avatars/owner_5.png" alt="owner" className="h-5 w-5 rounded-full" />
              </a>
              <span className="mr-1 dark:text-jacarta-400">by</span>
              <a href="user.html" className="text-accent">
                <span>Wow Frens</span>
              </a>
            </div>
            <span className="text-sm dark:text-jacarta-300">10K Items</span>
          </div>
        </div>
      </article>
    )
}

export default CollectionItem;