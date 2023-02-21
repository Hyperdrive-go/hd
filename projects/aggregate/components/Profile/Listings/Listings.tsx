import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faMagnifyingGlass, faBookBookmark, faImage, faWindowRestore, faImages, faEyeSlash, faFileArchive } from "@fortawesome/free-solid-svg-icons";

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
  },
  {
    name: "Cat god",
    code: "#7083",
    volume: "$93.96K",
    floor: "77.5",
    imageUrl: banner1
  }
]

export const Listings = () => {
    return (
      <div className="bg-black md:bg-gray-900 rounded-lg p-4">
        <div className="mx-auto max-w-2xl lg:max-w-7xl border-b border-gray-400 dark:border-gray-700 hidden md:block">
            <ul className="text-xs lg:text-md flex flex-auto -mb-px text-md font-medium text-center text-white  dark:text-gray-400">
                <li className="w-full">
                    <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faImage} className="text-red-600 w-5 h-5 lg:w-7 lg:h-7 inline" />
                        <p className="text-red-500 font-medium ml-1 mt-1">NFTs</p> 
                    </div>
                </li>
                <li className="w-full">
                <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faImages} className="text-white w-5 h-5 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">ERC-1155 NFTs</p> 
                    </div>
                </li>
                <li className="w-full">
                    <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faWindowRestore} className="text-white w-5 h-5 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Created</p> 
                    </div>
                </li>
                <li className="w-full">
                    <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faBookBookmark} className="text-white w-5 h-5 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Favourited</p> 
                    </div>
                </li>
                <li className="w-full">
                <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faEyeSlash} className="text-white w-5 h-5 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Hidden</p> 
                    </div>
                </li>
                <li className="w-full">
                    <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faFileArchive} className="text-white w-5 h-5 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Activity</p> 
                    </div>
                </li>
            </ul>
        </div>


        <div className="mx-auto max-w-7xl">
          <div className="flex flex-1 justify-center px-2 py-4">
            <div className="w-full md:max-w-7xl sm:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search name, id
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-lg border border-gray-400 bg-transparent
                  py-4 md:py-3 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white "
                  placeholder="Search name, id ..."
                  type="search"
                />
              </div>
            </div>
          </div>

          <ul
            role="list"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
                    <div className="px-8 md:px-3 p-2 lg:p-5 flex">
                       <div className="flex-auto">
                        <Image
                            className="w-5 h-5 lg:h-8 lg:w-8 mr-2 inline rounded-lg"
                            src={feature.imageUrl}
                            alt=""
                            priority
                          />
                        <p className="mr-1 lg:mr-2 text-xs lg:text-lg font-bold text-white inline">{feature.name}</p>
                        <FontAwesomeIcon icon={faCircleCheck} className="text-red-600 mt-2 lg:mt-0 w-2 h-2 lg:w-4 lg:h-4 inline absolute lg:relative" />
                       </div>
                       <p className="text-xs lg:text-sm text-white mt-1 inline">{feature.code}</p>
                    </div>
                    <div className="mx-auto w-10/12 md:w-11/12 bg-gray-800 rounded-lg p-2 mb-2 flex">
                        <p className="text-xs lg:text-sm text-gray-500 inline">Price</p>
                        <div className="flex-auto text-end">
                          <p className="text-xs lg:text-sm text-gray-500 lg:inline">({feature.volume})</p>
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
      </div>
    )
}