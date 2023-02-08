import Image from "next/image";

import banner1 from "@/images/sample/banner1.png"
import banner2 from "@/images/sample/banner2.png"
import banner3 from "@/images/sample/banner3.png"
import banner4 from "@/images/sample/banner4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ethereumLogo from "@/images/ethereum-eth-logo.png"

const collections = [
  {
    id: 1,
    name: "Optimism Quests",
    imageUrl: banner1,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 2,
    name: "RabbitHole L2 Explorer",
    imageUrl: banner2,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 3,
    name: "Early Optimists",
    imageUrl: banner3,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 4,
    name: "Optimistic Explorer",
    imageUrl: banner4,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 5,
    name: "Optimism Collective: Hello World",
    imageUrl: banner1,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 6,
    name: "OAYC",
    imageUrl: banner2,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 7,
    name: "Uniswap V3 Positions",
    imageUrl: banner3,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 8,
    name: "Velodrome",
    imageUrl: banner4,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 9,
    name: "Magic Baby",
    imageUrl: banner3,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  },
  {
    id: 10,
    name: "Magic Baby",
    imageUrl: banner4,
    volume24h: "313.34K",
    floorPrice: "0.23 ETH",
    owners24h: "40.79%",
    floor24h: "40.79%",
    owners: "50,272K",
    marketCap: "313.34K",
    sales24h: "104",
    totalAssets: "24,081K"
  }
];

export const TopCollections = () => {
    return (
      <div className="mt-10 lg:mt-20 bg-black pb-12">
        <h2 className="text-white p-8 text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Top NFT Collections by Trading Volume
        </h2>
        <table className="mx-auto table-fixed md:table-auto text-white mb-10">
          <thead className="bg-gray-800 text-gray-400">
            <tr className="hidden md:contents">
              <th className="py-6 px-4 text-sm lg:text-md">#</th>
              <th className="py-6 pr-4 text-start text-sm lg:text-md">Collection</th>
              <th className="py-6 pr-8 text-sm lg:text-md">24h Volume</th>
              <th className="py-6 pr-8 text-sm lg:text-md">Floor price</th>
              <th className="py-6 pr-8 hidden lg:inline-block text-sm lg:text-md">24h Owners</th>
              <th className="py-6 pr-8 hidden lg:inline-block text-sm lg:text-md">24h Floor</th>
              <th className="py-6 pr-8 text-sm lg:text-md">Owners</th>
              <th className="py-6 pr-8 hidden lg:inline-block text-sm lg:text-md">Market Cap</th>
              <th className="py-6 pr-8 hidden lg:inline-block text-sm lg:text-md">24h Sales</th>
              <th className="py-6 pr-8 hidden lg:inline-block text-sm lg:text-md">Total Assets</th>
            </tr>
          </thead>
          <tbody className="mx-auto bg-gray-900 divide-y divide-blue-900">
            {collections.map((collection) => (
                <tr key={collection.id}>
                  <td className="py-6 px-4 text-start text-sm lg:text-md">{collection.id}</td>
                  <td className="py-6 px-2 text-start text-sm lg:text-md ">
                    <div className="flex">
                      <Image
                        className="rounded-lg h-12 w-12 mr-2"
                        src={collection.imageUrl}
                        alt=""
                        priority
                      />
                      <p className="mt-3">{collection.name}</p>
                    </div>
                  </td>
                  <td className="py-6 px-2 text-start text-sm lg:text-md break-words	">
                    <div className="flex">
                        <Image
                          className="rounded-lg h-4 w-4 mr-1 mt-1"
                          src={ethereumLogo}
                          alt=""
                          priority
                        />
                        {collection.volume24h}
                    </div>
                  </td>
                  <td className="py-6 px-2 text-start text-sm lg:text-md ">
                    <div className="flex">
                        <Image
                          className="rounded-lg h-4 w-4 mr-1 mt-1"
                          src={ethereumLogo}
                          alt=""
                          priority
                        />
                        {collection.floorPrice}
                    </div>
                  </td>
                  <td className="py-6 px-2 text-start text-red-500 hidden lg:inline-block text-sm lg:text-md">
                    <div className="flex mt-4">
                      <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 mr-2 mt-1" />
                      {collection.owners24h}
                    </div>
                  </td>
                  <td className="py-6 px-2 text-start text-green-500 hidden lg:inline-block text-sm lg:text-md">
                    <div className="flex mt-4">
                      <FontAwesomeIcon icon={faChevronUp} className="w-3 h-3 mr-2 mt-1" />
                      {collection.floor24h}
                    </div>
                  </td>
                  <td className="py-6 px-2 text-start text-sm lg:text-md">{collection.owners}</td>
                  <td className="py-6 px-2 text-start hidden lg:inline-block text-sm lg:text-md">
                    <div className="flex mt-4">
                        <Image
                          className="rounded-lg h-4 w-4 mr-1 mt-1"
                          src={ethereumLogo}
                          alt=""
                          priority
                        />
                        {collection.marketCap}
                    </div>
                  </td>
                  <td className="py-6 px-8 text-right hidden lg:inline-block text-sm lg:text-md mt-4">{collection.sales24h}</td>
                  <td className="py-6 px-16 text-right hidden lg:inline-block text-sm lg:text-md mt-4">{collection.totalAssets}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="text-center mt-6 lg:mt-12">
          <button type="button" className="text-white bg-red-700 px-6 py-2 lg:px-8 lg:py-2.5 rounded-lg">
            View More
          </button>
        </div>
      </div>
    )
}