import Link from "next/link";
import Date from "../date";
const AssetsTable = ({assets,finalize,listItem})=>{
    const assetsList = ["","","","","",""];

    const onFinalize = (e,item)=>{
      e.preventDefault();
      finalize(item);
    }

    const onList = (e,item)=>{
      e.preventDefault();
      listItem(item.price,item.tokenId,item.id);
    }

    const topBid = (bids)=>{
      if(bids && bids.length){
        // return bids[0].price;
        return Math.max.apply(Math, bids.map(function(o) { return o.price; }))
      }
      return "No bid";
    }

    return(
        <div class="scrollbar-custom overflow-x-auto">
        <div
          role="table"
          class="w-full min-w-[736px] border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white lg:rounded-2lg"
        >
          <div class="flex rounded-t-2lg bg-jacarta-50 dark:bg-jacarta-600" role="row">
            <div class="w-[28%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Asset</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Top Bid</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Floor Price</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100"
                >Bids</span
              >
            </div>
            <div class="w-[12%] py-3 px-4" role="columnheader">
              <span class="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Status</span>
            </div>
          </div>
            {
                assets.map((asset,index)=>{
                  let itemButton = "";
                  if(asset.status==="pending"){
                    itemButton = (
                      <Link
                      href={`/assets/${asset.tokenId?.hex}`}
                      class="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-red-volume transition-all"
                    >
                        View
                    </Link>
                    )
                  }
                  else if(asset.status==="approved"){
                    itemButton = (
                      <a
                      href="#"
                      class="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                      onClick={(e)=>{onFinalize(e,asset)}}
                    >
                        Finalize
                    </a>
                    )
                  }
                  else if(asset.status==="created"){
                    itemButton = (
                      <a
                      href="#"
                      class="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                      onClick={(e)=>{onList(e,asset)}}
                    >
                        List
                    </a>
                    )
                  }
                  else if(asset.status==="listed"){
                    itemButton = (
                      <a
                      href="#"
                      class="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                    >
                        Unlist
                    </a>
                    )
                  }


                    return(
                        <Link href={`/assets/${asset.tokenId?.hex}`} class="flex transition-shadow hover:shadow-lg" role="row">
                        <div
                          class="flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                          role="cell"
                        >
                          <span class="mr-2 lg:mr-4">1</span>
                          <figure class="relative mr-2 w-8 h-8 shrink-0 self-start lg:mr-5 lg:w-12">
                            <img src={asset.image} alt="avatar 1" class="rounded-2lg w-[100%] h-[100%] object-cover object-center" loading="lazy" />
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
                            {asset.name}
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
                          <span class="text-sm font-medium tracking-tight">{topBid(asset.bids)}</span>
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
                          <span class="text-sm font-medium tracking-tight">{asset.price}</span>
                        </div>
                        <div
                          class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                          role="cell"
                        >
                          <span>{asset.bids?.length}</span>
                        </div>
                        <div
                          class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                          role="cell"
                        >
                          {
                            asset.status==="pending" ? 
                            (
                              <span class="rounded bg-yellow-500 py-1 px-2 text-xxs font-bold uppercase leading-none text-white"
                              >Pending</span
                      >
                            )
                            :
                            (
                              <span class="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white"
                                    >{asset.status}</span
                            >
                            )
                          }
                        </div>
                        <div
                          class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                          role="cell"
                        >
                            <span><Date dateString={asset.createdAt} /></span>
                        </div>
                        <div
                          class="flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                          role="cell"
                        >
                            <span>
                            {itemButton}
                            </span>
                        </div>
                      </Link>
                    )
                })
            }

        </div>
      </div>
    )
}

export default AssetsTable;