import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const UserProfile = (account)=>{

  const clipboardCopyAccount = ()=>{

    // Copy the text inside the text field
    navigator.clipboard.writeText(account);
    toast("Account ID copied to clipboard!");
  }


    return(
        <section class="relative bg-light-base pb-12 pt-28 dark:bg-jacarta-800">
        <div class="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <figure class="relative">
            <img
              src="/img/user/user_avatar.gif"
              alt="collection avatar"
              class="rounded-xl border-[5px] border-white dark:border-jacarta-600"
            />
            <div
              class="absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
        </div>

        <div class="container">
          <div class="text-center">
            <h2 class="mb-2 font-display text-4xl font-medium text-jacarta-700 dark:text-white">Sad Ducks</h2>
            <div
              class="mb-8 inline-flex items-center justify-center rounded-full border border-jacarta-100 bg-white py-1.5 px-4 dark:border-jacarta-600 dark:bg-jacarta-700"
            >
              <span data-tippy-content="ETH">
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
              <button
                class="js-copy-clipboard max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap dark:text-jacarta-200"
                data-tippy-content="Copy"
              >
                {/**Code to display the user's address */}
                {account ? (
                      <button 
                        className="js-copy-clipboard my-4 flex select-none items-center whitespace-nowrap px-5 font-display leading-none text-jacarta-700 dark:text-white"
                        data-tippy-content="Copy"
                        id = "userAdress"
                        onClick={clipboardCopyAccount}
                      >
                              <span className="max-w-[10rem] overflow-hidden text-ellipsis">
                                <Nav.Link
                                      href={`https://etherscan.io/address/${account}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="button nav-button btn-sm mx-4">
                                      {account}

                                  </Nav.Link>
                                </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="ml-1 mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                >
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                                  />
                              </svg>
                              </button>
                          ) : (
                            <span className="max-w-[10rem] overflow-hidden text-ellipsis">
                            <Button onClick={web3Handler} variant="outline-light" className="my-4 flex select-none items-center whitespace-nowrap px-5 font-display leading-none text-jacarta-700 dark:text-white">Connect Wallet</Button>
                            </span> 
                          )}
            {/**Code to display the user's address ends */}
                <span>0x7a86c0b064171007716bbd6af96676935799a63e</span>
              </button>
            </div>

            <p class="mx-auto mb-2 max-w-xl text-lg dark:text-jacarta-300">
              I make art with the simple goal of giving you something pleasing to look at for a few seconds.
            </p>
            <span class="text-jacarta-400">Joined December 2019</span>

            <div class="mt-6 flex items-center justify-center space-x-2.5">
              <div
                class="rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600"
              >
                <div
                  class="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('../public/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                  role="button"
                  data-tippy-content="Favorite"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path
                      d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600"
              >
                <a
                  href="#"
                  class="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm"
                  role="button"
                  id="collectionShare"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-tippy-content="Share"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z"
                    />
                  </svg>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                  aria-labelledby="collectionShare"
                >
                  <a
                    href="#"
                    class="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook"
                      class="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      ></path>
                    </svg>
                    <span class="mt-1 inline-block">Facebook</span>
                  </a>
                  <a
                    href="#"
                    class="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      class="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                    <span class="mt-1 inline-block">Twitter</span>
                  </a>
                  <a
                    href="#"
                    class="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="discord"
                      class="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                      ></path>
                    </svg>
                    <span class="mt-1 inline-block">Discord</span>
                  </a>
                  <a
                    href="#"
                    class="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
                      />
                    </svg>
                    <span class="mt-1 inline-block">Email</span>
                  </a>
                  <a
                    href="#"
                    class="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
                      />
                    </svg>
                    <span class="mt-1 inline-block">Copy</span>
                  </a>
                </div>
              </div>
              <div
                class="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600"
              >
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
                    <circle cx="2" cy="2" r="2" />
                    <circle cx="8" cy="2" r="2" />
                    <circle cx="14" cy="2" r="2" />
                  </svg>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                  aria-labelledby="collectionActions"
                >
                  <button
                    class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    New bid
                  </button>
                  <hr class="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                  <button
                    class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    Refresh Metadata
                  </button>
                  <button
                    class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    Share
                  </button>
                  <button
                    class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default UserProfile;