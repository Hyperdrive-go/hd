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

export const MoreFromCollection = () => {
    return (
      <div className=" bg-black pb-12">
        <h2 className="mx-auto max-w-7xl text-white py-8 text-left text-3xl font-bold">
          More from OptiChads
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
                    <div className="pt-4"/>
                    <Image 
                      src={feature.imageUrl}
                      alt="background"
                      className="mx-auto rounded-lg"
                    />
                    <div className="p-5 flex">
                       <div className="flex-auto">
                        <Image
                            className="h-8 w-8 mr-2 inline rounded-lg"
                            src={feature.imageUrl}
                            alt=""
                            priority
                          />
                        <p className="mr-2 text-lg font-bold text-white inline">{feature.name}</p>
                        <FontAwesomeIcon icon={faCircleCheck} className="text-red-600 w-4 h-4 inline" />
                       </div>
                       <p className="text-sm text-white mt-1 inline">{feature.code}</p>
                    </div>
                    <div className="mx-auto w-11/12 bg-gray-800 rounded-lg p-2 mb-2 flex">
                        <p className="text-sm text-gray-500 mt-1 inline">Price</p>
                        <div className="flex-auto text-end">
                          <p className="text-sm text-gray-500 inline">({feature.volume})</p>
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