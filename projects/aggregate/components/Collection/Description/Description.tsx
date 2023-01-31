import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


import bannerBackground from "@/images/hero_banner.png"
import banner5 from "@/images/sample/banner5.png"
import optichad from "@/images/sample/optichad.png"

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ethereumLogo from "@/images/ethereum-eth-logo.png"

const detail = {
  name: "OptiChads",
  description: "Buy a Chad to join the most exclusive club on Optimism! OptiChads is a fitness movement on OP with unique art, promoting healthy lifestyle while creating tools to benefit the",
  items: "10K",
  owners: "10K",
  listed: "4.6%",
  sales: "11.2K",
  floor: "76.7",
  volume: "76.7",
}

export const Description = () => {
    return (
      <div className="">
        <div className="mx-auto">
          <div style={{
            zIndex: -1,
            position: "absolute"
          }}
          className="w-full h-full"
          >
          <Image 
              src={bannerBackground}
              alt="background"
              className="cover"
              fill
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl p-12">  
          <Image 
              src={banner5}
              alt="background"
              className="-z-10"/>
          <div className="mx-auto max-w-6xl relative px-6 grid grid-cols-6 gap-4">
            <Image 
                src={optichad}
                alt=""
                className="w-40 h-40 rounded-lg -mt-8"/>

            <div className="col-start-2 col-end-5 mt-2">
              <div className="flex py-2">
                <div className="flex-auto">
                  <h2 className="text-white text-2xl font-bold inline">{detail.name}</h2>
                  <FontAwesomeIcon icon={faCircleCheck} className="ml-2 text-white font-bold w-4 h-4 inline mb-2" />
                </div>
                <FontAwesomeIcon icon={faTwitter} className="ml-4 text-white w-5 h-5 inline mt-2" />
                <FontAwesomeIcon icon={faDiscord} className="ml-4 text-white w-5 h-5 inline mt-2" />
              </div>
              <p className="text-white font-light">{detail.description}</p>
            </div>

            <div className="col-start-5 col-end-7">
              <div className="grid grid-cols-3 gap-2 bg-white p-2 -mt-8 rounded-lg">
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-sm text-gray-500 mb-1 ml-1">items</p>
                  <p className="text-sm text-black ml-1 font-bold">{detail.items}</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-sm text-gray-500 mb-1 ml-1">owners</p>
                  <p className="text-sm text-black ml-1 font-bold">{detail.owners}</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-sm text-gray-500 mb-1 ml-1">listed</p>
                  <p className="text-sm text-black ml-1 font-bold">{detail.listed}</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-sm text-gray-500 mb-1 ml-1">sales</p>
                  <p className="text-sm text-black ml-1 font-bold">{detail.sales}</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-sm text-gray-500 mb-1 ml-1">floor price</p>
                  <p className="text-sm text-black ml-1 font-bold">
                    <Image
                      className="rounded-lg h-4 w-4 mr-1 inline"
                      src={ethereumLogo}
                      alt=""
                      priority
                    />
                      {detail.floor}
                    </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-sm text-gray-500 mb-1 ml-1">volume</p>
                  <p className="text-sm text-black ml-1 font-bold">
                  <Image
                    className="rounded-lg h-4 w-4 mr-1 inline"
                    src={ethereumLogo}
                    alt=""
                    priority
                  />
                    {detail.volume}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}