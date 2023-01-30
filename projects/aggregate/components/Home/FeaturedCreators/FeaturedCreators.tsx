import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import featureBanner from "@/images/feature_banner.png"
import banner1 from "@/images/sample/banner1.png"
import ethereumLogo from "@/images/ethereum-eth-logo.png"

const features = [
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  },
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  },
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  },
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  }
]

export const FeaturedCreators = () => {
    return (
      <div className=" bg-black pb-12">
        <h2 className="text-white p-8 text-center text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="mx-auto max-w-7xl">
          <ul
            role="list"
            className="grid grid-cols-4 gap-4"
          >
            {features.map((feature) => (
              <li
                key={feature.name}
                className="rounded-lg"
              >
                <div className="max-w-sm bg-gray-900 rounded-lg pb-4">
                    <Image 
                      src={featureBanner}
                      alt="background"
                      className="-z-10"
                    />
                    <Image 
                      src={feature.imageUrl}
                      alt="background"
                      className="mx-auto p-1 bg-white w-32 h-32 rounded-lg -mt-16 z-50 relative"
                    />
                    <div className="p-5 text-center">
                       <div className="flex-auto mb-4">
                        <h5 className="mr-2 text-lg font-bold text-white inline">{feature.name}</h5>
                        <FontAwesomeIcon icon={faCircleCheck} className="text-red-600 w-4 h-4 inline" />
                       </div>
                       <p className="mb-2 text-sm text-white">{feature.description}</p>
                    </div>
                    <div className="mx-auto w-11/12 bg-gray-800 rounded-lg p-2 mb-2">
                      <p className="text-sm text-gray-500 mb-1 ml-1">Volume</p>
                      <Image
                          className="rounded-lg h-4 w-4 mr-1 inline"
                          src={ethereumLogo}
                          alt=""
                          priority
                        />
                      <p className="text-sm text-white inline">{feature.volume}</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2 gap-2">
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-2">
                        <p className="text-sm text-gray-500 mb-1 ml-1">Items</p>
                        <p className="text-sm text-white ml-1">{feature.items}</p>
                      </div>
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-2">
                        <p className="text-sm text-gray-500 mb-1 ml-1">Owners</p>
                        <p className="text-sm text-white ml-1">{feature.owners}</p>
                      </div>
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-2">
                        <p className="text-sm text-gray-500 mb-1 ml-1">Listed</p>
                        <p className="text-sm text-white ml-1">{feature.listed}</p>
                      </div>
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-2">
                        <p className="text-sm text-gray-500 mb-1 ml-1">Floor</p>
                        <Image
                            className="rounded-lg h-4 w-4 mr-1 inline"
                            src={ethereumLogo}
                            alt=""
                            priority
                          />
                        <p className="text-sm text-white inline">{feature.floor}</p>
                      </div>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-12">
          <button type="button" className="text-white bg-red-700 px-8 py-2.5 rounded-lg">
            View More
          </button>
        </div>
      </div>
    )
}