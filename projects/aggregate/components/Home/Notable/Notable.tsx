import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import banner1 from "@/images/sample/banner1.png"
import ethereumLogo from "@/images/ethereum-eth-logo.png"

const features = [
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  }
]

export const Notable = () => {
    return (
      <div className="bg-black pb-12">
        <h2 className="text-white p-6 lg:p-8 text-center text-3xl font-bold">
          Notable buys today
        </h2>
        <div className="mx-auto max-w-sm md:max-w-2xl lg:max-w-7xl">
          <ul
            role="list"
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {features.map((feature) => (
              <li
                key={feature.name}
                className="rounded-lg"
              >
                <div className="max-w-sm bg-gray-900 rounded-lg pb-4">
                    <div className="pt-4"/>
                    <Image 
                      src={feature.imageUrl}
                      alt="background"
                      className="mx-auto w-10/12 lg:w-11/12 rounded-lg"
                    />
                    <div className="px-8 md:px-3 p-3 lg:p-5 flex">
                       <div className="flex-auto">
                        <div className="flex space-x-2 md:space-x-1">
                          <Image
                              className="h-6 w-6 lg:h-8 lg:w-8 md:hidden lg:inline-block lg:mr-2 rounded-lg"
                              src={feature.imageUrl}
                              alt=""
                              priority
                            />
                          <p className="mt-1 md:mt-0 mr-1 lg:mr-2 text-xs lg:text-lg font-medium text-white inline">{feature.name}</p>
                        <FontAwesomeIcon icon={faCircleCheck} className="mt-1 md:mt-0 text-red-600 h-3 w-3 lg:w-4 lg:h-4 inline" />
                        </div>
                       </div>
                       <p className="text-xs lg:text-sm text-white mt-1 inline">{feature.code}</p>
                    </div>
                    <div className="mx-auto w-10/12 md:w-11/12 bg-gray-800 rounded-lg p-2 mb-2 flex">
                        <p className="text-xs lg:text-sm text-gray-500 lg:mt-1 inline">Price</p>
                        <div className="flex-auto text-end">
                          <p className="text-xs lg:text-sm text-gray-500 lg:inline-block">({feature.volume})</p>
                          <Image
                                className="rounded-lg h-4 w-4 mr-1 inline"
                                src={ethereumLogo}
                                alt=""
                                priority
                              />
                          <p className="text-xs lg:text-sm text-white inline">{feature.floor}</p>
                        </div>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-6 lg:mt-12">
          <button type="button" className="text-white bg-red-700 px-6 py-2 lg:px-8 lg:py-2.5 rounded-lg">
            View More
          </button>
        </div>
      </div>
    )
}