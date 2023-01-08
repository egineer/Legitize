import Link from "next/link";
import { getETHPrice } from "../../helpers/frontend";

const FeaturedItemsSection = ({ items }) => {
  console.log("items", items);
  return (
    <section className="relative py-10 dark:bg-jacarta-800">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <div className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">
          <h2 className="inline">Featured Assets</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
          {items.map((item, index) => {
            const itemId = item.tokenId._hex
              ? item.tokenId._hex
              : item.tokenId.hex;
            return (
              <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <Link href={`/assets/${itemId}`} className="relative block">
                    <img
                      src={item.image}
                      alt="avatar 1"
                      className="rounded-2lg w-14 h-14 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                      {index + 1}
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </Link>
                </figure>
                <div>
                  <Link href={`/assets/${itemId}`} className="block">
                    <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                      {item.name}
                    </span>
                  </Link>
                  <span className="text-sm dark:text-jacarta-300">
                    {getETHPrice(item.totalPrice)} ETH
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/assets"
            className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >
            See All Assets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSection;
