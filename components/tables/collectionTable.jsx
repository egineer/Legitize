const CollectionsTable = ()=>{
    return(
        <div class="scrollbar-custom overflow-x-auto">
        <div
          role="table"
          class="w-full min-w-[736px] border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white lg:rounded-2lg"
        >
          <div class="flex rounded-t-2lg bg-jacarta-50 dark:bg-jacarta-600" role="row">
            <div class="w-[28%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Collection</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Volume</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">24h %</span>
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">7d %</span>
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Floor Price</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Owners</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Items</span>
            </div>
          </div>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">1</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_1.jpg" alt="avatar 1" class="rounded-2lg" loading="lazy" />
                <div
                  class="absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
                NFT Funny Cat
              </span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">30,643.01</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-35.75%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-49.99%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">15.49</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>3.5K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>10.0K</span>
            </div>
          </a>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">2</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_2.jpg" alt="avatar 2" class="rounded-2lg" loading="lazy" />
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white"> Cryptopank </span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">18,973.17</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-green">+25.79%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-10.28%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">7.57</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>6.2K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>8.2K</span>
            </div>
          </a>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">3</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_5.jpg" alt="avatar 5" class="rounded-2lg" loading="lazy" />
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white"> Bored Bunny </span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">13,503.09</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-green">+71.77%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-61.16%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">3.31</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>11.8K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>6.2K</span>
            </div>
          </a>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">4</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_9.jpg" alt="avatar 9" class="rounded-2lg" loading="lazy" />
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white"> NFT stars </span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">6,098.71</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-35.75%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-green">+27.79%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">7.57</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>5K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>8.2K</span>
            </div>
          </a>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">5</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_13.jpg" alt="avatar 13" class="rounded-2lg" loading="lazy" />
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white">Arcahorizons</span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">4,689.20</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-73.64%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-green">+97.87%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">0.55</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>3.4K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>5.2K</span>
            </div>
          </a>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">6</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_6.jpg" alt="avatar 6" class="rounded-2lg" loading="lazy" />
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white">Wow Frens</span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">4,342.51</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-8.65%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-green">+58.15%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">1.84</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>5.4K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>6.2K</span>
            </div>
          </a>
          <a href="user.html" class="flex transition-shadow hover:shadow-lg" role="row">
            <div
              class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="mr-2 lg:mr-4">7</span>
              <figure class="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                <img src="img/avatars/avatar_10.jpg" alt="avatar 10" class="rounded-2lg" loading="lazy" />
                <div
                  class="absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
              </figure>
              <span class="font-display text-sm font-semibold text-jacarta-700 dark:text-white">Asumitsu</span>
            </div>
            <div
              class="flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">3,156.28</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-green">+40.79%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="text-red">-55.40%</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span class="-ml-1" data-tippy-content="ETH">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1920 1920"
                  xmlSpace="preserve"
                  class="mr-1 h-4 w-4"
                >
                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                </svg>
              </span>
              <span class="text-sm font-medium tracking-tight">3.75</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>2.1K</span>
            </div>
            <div
              class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
              role="cell"
            >
              <span>10.1K</span>
            </div>
          </a>
        </div>
      </div>
    )
}

export default CollectionsTable;