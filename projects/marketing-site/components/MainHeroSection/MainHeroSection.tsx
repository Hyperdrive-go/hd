import { BlueSplash, RedSplash, SimpleNavbar } from "@/components/index";
import Link from "next/link";
import { useTranslation } from 'next-i18next'

const MainHeroSection = () => {
  const { t } = useTranslation()

  return (
    <div className="isolate dark:bg-black bg-white">
      <BlueSplash />
      <SimpleNavbar/>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 
                ring-1 dark:ring-gray-100/10 dark:hover:ring-gray-100/20 hover:ring-gray-700">
                  <span className="dark:text-gray-200 text-black font-semibold">
                    {t("marketing:vision_page.0.announce")} {" "}
                    <Link
                      href="/funding"
                      className="font-semibold text-blue-500"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {t("marketing:vision_page.0.readmore")}
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-white text-black">
                  {t("marketing:vision_page.0.top_title")}
                </h1>
                <p className="mt-6 text-lg leading-8 dark:text-gray-200 text-gray-800 sm:text-center">
                  {t("marketing:vision_page.0.top_desc")}
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/funding"
                    className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 
                    text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                  >
                    {t("marketing:vision_page.0.proposal")}
                    <span className="darK:text-gray-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="/team"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 
                    dark:text-gray-100 text-gray-800 ring-1 dark:ring-gray-100/10 dark:hover:ring-gray-100/20 hover:ring-gray-700"
                  >
                    {t("marketing:vision_page.0.team")}
                    <span className="dark:text-gray-200 text-gray-800" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
              <RedSplash />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainHeroSection;
