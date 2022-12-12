import Image from "next/image";
import Link from "next/link";
import commonLang from "@/lang/common.json";
import { useRouter } from 'next/router';

{
  /* <Link href="https://qx.app/stats">
<span className="font-semibold text-red-600 underline">
  volume.
</span>
</Link> */
}

export default function ProposalL2() {
  const { locale } = useRouter();

  return (
    <div className="relative overflow-hidden rounded-lg bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["introducing"]}
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["introducing_title"]}
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["introducing_desc"]}
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          {/* <figure>
            <Image
              className="w-full rounded-lg"
              src=""
              alt=""
              width={873}
              height={873}
              layout="responsive"
            />
            <figcaption className="flex justify-center">
              <Link href="https://gov.optimism.io/t/draft-gf-phase-1-proposal-optichads-nft-project/3430">
                <span className="font-semibold text-red-600 underline">
                  Full Unadulterated Proposal Link Here, bro
                </span>
              </Link>
            </figcaption>
          </figure> */}
          <h2>{commonLang.funding_page.filter(j => j.locale === locale)[0]["summary"]}</h2>
          <p>
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["summary_desc1"]}
          </p>

          <blockquote>
            <p>
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["summary_desc2"]}
            </p>
          </blockquote>
        </div>
      </div>

      <div className="relative mt-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["detail"]}
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["background"]}
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc1"]}
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc2"]}
          </p>

          <h2>
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_title1"]}
          </h2>
          <p>
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc3"]}{" "}
            <Link href="https://optimistic.etherscan.io/address/0xC97345922F2d2B284661bDDCC9F1dD5Ae71A8656">
              <span className="cursor-pointer font-semibold text-red-600 underline">
                {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_link1"]}
              </span>
            </Link>{" "}
          </p>

          <p>
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc4"]}{" "}
            <Link href="https://arbiscan.io/address/0x0816354dCB6F79DFaE6c1c62FA7F4BFE8B288302">
              <span className="cursor-pointer font-semibold text-red-600 underline">
                {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_link2"]}
              </span>
            </Link>{" "}
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc5"]}
          </p>

          <h2>{commonLang.funding_page.filter(j => j.locale === locale)[0]["background_title2"]}</h2>
          <p>
            {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc6"]}
          </p>

          <h3>{commonLang.funding_page.filter(j => j.locale === locale)[0]["background_title3"]}</h3>
          <ol role="list">
            <li>
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc7"]}
            </li>
            <li>
              {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc8"]}
            </li>
          </ol>

          <h3>{commonLang.funding_page.filter(j => j.locale === locale)[0]["background_title4"]}</h3>
          <p>{commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc9"]}</p>

          <h3>{commonLang.funding_page.filter(j => j.locale === locale)[0]["background_title5"]}</h3>
          <p>
          {commonLang.funding_page.filter(j => j.locale === locale)[0]["background_desc10"]}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
