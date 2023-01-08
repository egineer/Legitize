import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/layout.jsx";
import { useRouter } from "next/router";

import BidModal from "../../components/modals/bidModal.js";
import { waitTimeout } from "../../helpers/frontend";
import { useSession } from "next-auth/react";
import Link from "next/link.js";

export default function SingleAsset() {
  const router = useRouter();
  const { id } = router.query;
  const { status, data } = useSession();
  const [asset, setAsset] = useState({});
  const [bidPrice, setBidPrice] = useState(0);
  const [showBidModal, setShowBidModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userHasBid, setUserHasBid] = useState("undefined");
  const [loggedInUser, setLoggedInUser] = useState({});

  const getAsset = async (id) => {
    const response = await axios.get(`/api/nft/asset/${id}`);
    if (response.data && response.data.data) {
      setAsset(response.data.data);
    }
  };

  const saveBid = async () => {
    if (asset.id && bidPrice) {
      setIsProcessing(true);
      // Add Some Delay
      await waitTimeout(2000);
      const formData = new FormData();
      formData.append("assetId", asset.id);
      formData.append("price", bidPrice);

      const config = {
        headers: { "content-type": "application/json" },
      };

      const response = await axios.post(
        "/api/nft/bid/create",
        formData,
        config
      );
      console.log(response);
      if (response.data && response.data.status === "success") {
        setIsProcessing(false);
        setShowBidModal(false);
        getAsset(id);
      } else {
        setIsProcessing(false);
        setShowBidModal(false);
      }
    }
  };

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setLoggedInUser(JSON.parse(loggedInUserData));
    }
  }, []);

  useEffect(() => {
    getAsset(id);
  }, [id]);

  useEffect(() => {
    if (asset && asset.price) {
      setBidPrice(Number(asset.price));
      // console.log(data);
      // Check if user has placed a bid
      if (asset.bids && asset.bids.length) {
        const bidIndex = asset.bids.findIndex((bid) => {
          return bid.userId === loggedInUser.id;
        });
        if (bidIndex >= 0) {
          setUserHasBid(true);
        } else {
          setUserHasBid(false);
        }
      }
    }
  }, [asset]);

  const onCloseModal = (e) => {
    setShowBidModal(false);
  };

  const onPlaceBid = (e) => {
    e.preventDefault();
    setShowBidModal(true);
  };

  let placeBidButton = "";
  if (status === "authenticated") {
    if (userHasBid === true) {
      placeBidButton = (
        <a
          href="#"
          class="inline-block w-full rounded-full bg-slate-300 py-3 px-8 text-center font-semibold text-black transition-all"
        >
          You already placed a bid
        </a>
      );
    } else if (userHasBid === false) {
      placeBidButton = (
        <a
          href="#"
          class="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          onClick={(e) => onPlaceBid(e)}
        >
          Place Bid
        </a>
      );
    }
  } else {
    placeBidButton = (
      <Link
        href="/auth/login"
        class="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
      >
        Sign in to place bid
      </Link>
    );
  }

  return (
    <Layout>
      <main class="mt-24">
        <section class="relative pt-12 pb-24 lg:py-24">
          <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/img/gradient_light.jpg"
              alt="gradient"
              class="h-full w-full"
            />
          </picture>
          <div class="container">
            <div class="md:flex md:flex-wrap">
              <figure class="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
                <img
                  src={asset?.image}
                  alt="item"
                  class="cursor-pointer rounded-2.5xl w-[100%] h-[100%] object-cover object-bottom"
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                />
                <div
                  class="modal fade"
                  id="imageModal"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <div class="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                    <img src="/img/products/item_single_full.jpg" alt="item" />
                  </div>

                  <button
                    type="button"
                    class="btn-close absolute top-6 right-6"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="h-6 w-6 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                  </button>
                </div>
              </figure>

              <div class="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                <div class="mb-3 flex">
                  <div class="flex items-center">
                    <a
                      href="collection.html"
                      class="mr-2 text-sm font-bold text-accent"
                    >
                      CryptoGuysNFT
                    </a>
                    <span
                      class="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                    </span>
                  </div>

                  <div class="ml-auto flex space-x-2">
                    <div class="flex items-center space-x-1 rounded-xl border border-jacarta-100 bg-white py-2 px-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <span
                        class="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../public/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          class="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z"></path>
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                        </svg>
                      </span>
                      <span class="text-sm dark:text-jacarta-200">188</span>
                    </div>

                    <div class="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        class="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm"
                        role="button"
                        id="collectionActions"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="16"
                          height="4"
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx="2" cy="2" r="2"></circle>
                          <circle cx="8" cy="2" r="2"></circle>
                          <circle cx="14" cy="2" r="2"></circle>
                        </svg>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="collectionActions"
                      >
                        <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr class="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 class="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">
                  {asset?.name}
                </h1>

                <div class="mb-8 flex items-center space-x-4 whitespace-nowrap">
                  <div class="flex items-center">
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
                        <path
                          fill="#8A92B2"
                          d="M959.8 80.7L420.1 976.3 959.8 731z"
                        ></path>
                        <path
                          fill="#62688F"
                          d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                        ></path>
                        <path
                          fill="#454A75"
                          d="M959.8 1295.4l539.8-319.1L959.8 731z"
                        ></path>
                        <path
                          fill="#8A92B2"
                          d="M420.1 1078.7l539.7 760.6v-441.7z"
                        ></path>
                        <path
                          fill="#62688F"
                          d="M959.8 1397.6v441.7l540.1-760.6z"
                        ></path>
                      </svg>
                    </span>
                    <span class="text-sm font-medium tracking-tight text-green">
                      {asset?.price} ETH
                    </span>
                  </div>
                  <span class="text-sm text-jacarta-400 dark:text-jacarta-300">
                    Highest bid
                  </span>
                  <span class="text-sm text-jacarta-400 dark:text-jacarta-300">
                    1/1 available
                  </span>
                </div>

                <p class="mb-10 dark:text-jacarta-300">{asset?.description}</p>

                <div class="mb-8 flex flex-wrap">
                  <div class="mr-8 mb-4 flex">
                    <figure class="mr-4 shrink-0">
                      <a href="user.html" class="relative block">
                        <img
                          src="/img/avatars/avatar_7.jpg"
                          alt="avatar 7"
                          class="rounded-2lg"
                          loading="lazy"
                        />
                        <div
                          class="absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                      </a>
                    </figure>
                    <div class="flex flex-col justify-center">
                      <span class="block text-sm text-jacarta-400 dark:text-white">
                        Creator <strong>10% royalties</strong>
                      </span>
                      <a href="user.html" class="block text-accent">
                        <span class="text-sm font-bold">@creative_world</span>
                      </a>
                    </div>
                  </div>

                  <div class="mb-4 flex">
                    <figure class="mr-4 shrink-0">
                      <a href="user.html" class="relative block">
                        <img
                          src="/img/avatars/avatar_1.jpg"
                          alt="avatar 1"
                          class="rounded-2lg"
                          loading="lazy"
                        />
                        <div
                          class="absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                      </a>
                    </figure>
                    <div class="flex flex-col justify-center">
                      <span class="block text-sm text-jacarta-400 dark:text-white">
                        Owned by
                      </span>
                      <a href="user.html" class="block text-accent">
                        <span class="text-sm font-bold">@051_Hart</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="rounded-2lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                  <div class="mb-8 sm:flex sm:flex-wrap">
                    <div class="sm:w-1/2 sm:pr-4 lg:pr-8">
                      <div class="block overflow-hidden text-ellipsis whitespace-nowrap">
                        <span class="text-sm text-jacarta-400 dark:text-jacarta-300">
                          Highest bid by{" "}
                        </span>
                        <a
                          href="user.html"
                          class="text-sm font-bold text-accent"
                        >
                          0x695d2ef170ce69e794707eeef9497af2de25df82
                        </a>
                      </div>
                      <div class="mt-3 flex">
                        <figure class="mr-4 shrink-0">
                          <a href="user.html" class="relative block">
                            <img
                              src="/img/avatars/avatar_4.jpg"
                              alt="avatar"
                              class="rounded-2lg"
                              loading="lazy"
                            />
                          </a>
                        </figure>
                        <div>
                          <div class="flex items-center whitespace-nowrap">
                            <span class="-ml-1" data-tippy-content="ETH">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 1920 1920"
                                xmlSpace="preserve"
                                class="h-5 w-5"
                              >
                                <path
                                  fill="#8A92B2"
                                  d="M959.8 80.7L420.1 976.3 959.8 731z"
                                ></path>
                                <path
                                  fill="#62688F"
                                  d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                ></path>
                                <path
                                  fill="#454A75"
                                  d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                ></path>
                                <path
                                  fill="#8A92B2"
                                  d="M420.1 1078.7l539.7 760.6v-441.7z"
                                ></path>
                                <path
                                  fill="#62688F"
                                  d="M959.8 1397.6v441.7l540.1-760.6z"
                                ></path>
                              </svg>
                            </span>
                            <span class="text-lg font-medium leading-tight tracking-tight text-green">
                              4.7 ETH
                            </span>
                          </div>
                          <span class="text-sm text-jacarta-400 dark:text-jacarta-300">
                            ~10,864.10
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 dark:border-jacarta-600 sm:mt-0 sm:w-1/2 sm:border-l sm:border-jacarta-100 sm:pl-4 lg:pl-8">
                      <span class="js-countdown-ends-label text-sm text-jacarta-400 dark:text-jacarta-300">
                        Auction ends in
                      </span>
                      <div
                        class="js-countdown-single-timer mt-3 flex space-x-4"
                        data-countdown="2023-09-07T19:40:30"
                        data-expired="This auction has ended"
                      >
                        <span class="countdown-days text-jacarta-700 dark:text-white">
                          <span class="js-countdown-days-number text-lg font-medium lg:text-[1.5rem]"></span>
                          <span class="block text-xs font-medium tracking-tight">
                            Days
                          </span>
                        </span>
                        <span class="countdown-hours text-jacarta-700 dark:text-white">
                          <span class="js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]"></span>
                          <span class="block text-xs font-medium tracking-tight">
                            Hrs
                          </span>
                        </span>
                        <span class="countdown-minutes text-jacarta-700 dark:text-white">
                          <span class="js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]"></span>
                          <span class="block text-xs font-medium tracking-tight">
                            Min
                          </span>
                        </span>
                        <span class="countdown-seconds text-jacarta-700 dark:text-white">
                          <span class="js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]"></span>
                          <span class="block text-xs font-medium tracking-tight">
                            Sec
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {placeBidButton}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BidModal
        show={showBidModal}
        onClose={onCloseModal}
        initialValue={bidPrice}
        onPriceChange={setBidPrice}
        onPlaceBid={saveBid}
        isProcessing={isProcessing}
      />
    </Layout>
  );
}
