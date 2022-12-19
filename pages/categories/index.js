import Layout from "../../components/layout";
import CategoriesSection from "../../components/sections/categories";

const Categories = () => {
  return (
    <Layout>
      <main>
        <section class="relative py-16 md:py-24 dark:bg-jacarta-800">
          <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="img/gradient_light.jpg"
              alt="gradient"
              class="h-full w-full"
            />
          </picture>
          <div class="container">
            <h2 class="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
              Browse by Category
            </h2>

            <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_1.jpg"
                      alt="avatar 1"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      1
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      NFT Funny Cat
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    7,080.95 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_2.jpg"
                      alt="avatar 2"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-sm text-white dark:border-jacarta-600">
                      2
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Cryptopank
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    6,548,133 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_3.jpg"
                      alt="avatar 3"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      3
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Prince Ape Planet
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    4,823,927 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_4.jpg"
                      alt="avatar 4"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      4
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Hey Mrsmeseks
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">3,186 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_5.jpg"
                      alt="avatar 5"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      5
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Bored Bunny
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">3,027 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_6.gif"
                      alt="avatar 6"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      6
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Wow Frens
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">2,586 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_7.jpg"
                      alt="avatar 7"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      7
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Origin Morish
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    2,347.85 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_8.jpg"
                      alt="avatar 8"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      8
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Superdo
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    2,115.71 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_9.jpg"
                      alt="avatar 9"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      9
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      NFT stars
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">2,027 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_10.jpg"
                      alt="avatar 10"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      10
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Asumitsu
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    1,989.70 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_11.jpg"
                      alt="avatar 11"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      11
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Pank Skull
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    1,726.70 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_12.jpg"
                      alt="avatar 12"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      12
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Lazy Panda
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">
                    1,589.03 ETH
                  </span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_13.jpg"
                      alt="avatar 13"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      13
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Arcahorizons
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">1,157 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_14.jpg"
                      alt="avatar 14"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      14
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Sussygirl
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">1,030 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_15.jpg"
                      alt="avatar 15"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      15
                    </div>
                    <div
                      class="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Smilebin
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">999.51 ETH</span>
                </div>
              </div>
              <div class="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure class="mr-4 shrink-0">
                  <a href="collection.html" class="relative block">
                    <img
                      src="img/avatars/avatar_16.jpg"
                      alt="avatar 16"
                      class="rounded-2lg"
                      loading="lazy"
                    />
                    <div class="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      16
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" class="block">
                    <span class="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      Pankysmoke
                    </span>
                  </a>
                  <span class="text-sm dark:text-jacarta-300">875.65 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Categories;
