import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


import bannerBackground from "@/images/hero_banner.png"

import banner5 from "@/images/sample/banner5.png"
import optichad from "@/images/sample/optichad.png"

import { faImages } from "@fortawesome/free-solid-svg-icons";

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ethereumLogo from "@/images/ethereum-eth-logo.png"

export const Description = ({ collection }) => {
    return (
      <div className="shadow-2xl">
        <div className="mx-auto">
          <div style={{
            zIndex: -1,
            position: "absolute"
          }}
          className="w-full h-2/3 md:h-3/6 lg:h-4/6"
          >
          <Image 
              src={bannerBackground}
              alt="background"
              className="cover"
              fill
            />
          </div>
        </div>
        <div className="mx-auto max-w-4xl lg:max-w-7xl md:p-4">  
          <div className="flex flex-col justify-center items-center bg-gray-800 h-28 md:h-48 lg:h-56 rounded-xl">
            <FontAwesomeIcon icon={faImages} className="text-gray-500 w-10 h-10" />
          </div>
          <div className="mx-auto max-w-6xl relative px-6 grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="col-start-3 col-end-4 md:col-start-4 md:col-end-12 lg:col-start-1 lg:col-end-2">
              <button type="button" className="bg-gray-800 border-4 border-white p-8 md:p-8 lg:p-10
                rounded-lg -mt-20 lg:-mt-8">
                <FontAwesomeIcon icon={faImages} className="text-gray-500 w-10 h-10" />
              </button>
            </div>

            {/* For mobile */}
            <div className="col-start-3 col-end-12 md:hidden">
              <div className="flex-auto">
                <h2 className="text-white text-xl lg:text-2xl font-bold inline">{collection.name}</h2>
                <FontAwesomeIcon icon={faCircleCheck} className="ml-2 text-white font-bold w-4 h-4 inline mb-2" />
              </div>
              <FontAwesomeIcon icon={faTwitter} className="ml-4 text-white w-5 h-5 inline mt-2" />
              <FontAwesomeIcon icon={faDiscord} className="ml-4 text-white w-5 h-5 inline mt-2" />
            </div>
            <div className="col-start-1 col-end-12 md:hidden">
              <p className="text-sm lg:text-md text-white font-light">{collection.description}</p>
            </div>

            <div className="col-start-2 col-end-5 lg:mt-2 hidden md:block">
              <div className="flex py-2">
                <div className="flex-auto">
                  <h2 className="text-white text-xl lg:text-2xl font-bold inline">{collection.name}</h2>
                  <FontAwesomeIcon icon={faCircleCheck} className="ml-2 text-white font-bold w-4 h-4 inline mb-2" />
                </div>
                <FontAwesomeIcon icon={faTwitter} className="ml-4 text-white w-5 h-5 inline mt-2" />
                <FontAwesomeIcon icon={faDiscord} className="ml-4 text-white w-5 h-5 inline mt-2" />
              </div>
              <p className="text-sm lg:text-md text-white font-light">{collection.description}</p>
            </div>

            <div className="col-start-1 mb-4 md:col-start-5 col-end-12 mt-8 lg:mt-0">
              <div className="grid grid-cols-3 gap-2 bg-white p-2 lg:p-3 -mt-8 rounded-lg">
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">items</p>
                  <p className="text-xs lg:text-sm text-black ml-1 font-bold">
                    {collection.supply > 999999
                      ? Math.floor((collection.supply / 1000000) * 100) / 100 +
                        "M"
                      : collection.supply > 999
                      ? Math.floor((collection.supply / 1000) * 10) / 10 + "K"
                      : collection.supply}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">owners</p>
                  <p className="text-xs lg:text-sm text-black ml-1 font-bold">
                    {collection.owners > 999999
                      ? Math.floor((collection.owners / 1000000) * 100) / 100 +
                        "M"
                      : collection.owners > 999
                      ? Math.floor((collection.owners / 1000) * 10) / 10 + "K"
                      : collection.owners}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">listed</p>
                  <p className="text-xs lg:text-sm text-black ml-1 font-bold">
                    {collection.listed && collection.supply
                      ? (collection.listed / collection.supply).toLocaleString(
                          undefined,
                          {
                            style: "percent",
                            minimumFractionDigits: 1,
                          }
                        )
                      : "—"}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">sales</p>
                  <p className="text-xs lg:text-sm text-black ml-1 font-bold">
                    {collection.sales > 999
                      ? Math.floor((collection.sales / 1000) * 10) / 10 + "K"
                      : collection.sales}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">floor price</p>
                  <p className="text-xs lg:text-sm text-black ml-1 font-bold">
                    <Image
                      className="rounded-lg h-4 w-4 mr-1 inline"
                      src={ethereumLogo}
                      alt=""
                      priority
                    />
                      {collection.floor}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">volume</p>
                  <p className="text-xs lg:text-sm text-black ml-1 font-bold">
                  <Image
                    className="rounded-lg h-4 w-4 mr-1 inline"
                    src={ethereumLogo}
                    alt=""
                    priority
                  />
                    {collection.volume}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}