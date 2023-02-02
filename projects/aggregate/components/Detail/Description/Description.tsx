import bannerBackground from "@/images/hero_banner.png"
import Image from "next/image";
import banner3 from "@/images/sample/banner3.png"
import detailSample from "@/images/sample/detail.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const detail = {
  name: "Murders and Executions #1920",
  imageUrl: banner3,
  view: "213",
  like: "213",
  description: "My eyes are falling out from looking at screens. I roll the dice and FOMO into every project I see. I pump it, I dump it. I get high, fuck, no sleep and repeat. I've become a monster in the Metaverse. Greed is Good.",
  price: "0.23 ETH",
  contractAddress: "0x9B9...42ad12",
  tokenId: "3662",
  tokenStandard: "ERC-721",
  contractOwner: "gigachad",
  blockchain: "Optimism",
  creatorEarnings: "0%"
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
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-12 pt-12">
          {/* Left */}
          <div className="flex">
            <Image
              className="rounded-lg w-full"
              src={detailSample}
              alt=""
              priority
            />
          </div>
          {/* Right */}
          <div>
            <div className="grid grid-cols-5 gap-4">
              <Image
                className="rounded-lg bg-white w-24 h-24 p-1"
                src={detail.imageUrl}
                alt=""
                priority
              />
              <div className="col-start-2 col-end-4">
                <h2 className="text-white text-2xl font-bold inline">Optimism Quests</h2>
                <FontAwesomeIcon icon={faCircleCheck} className="ml-2 text-white w-4 h-4 inline mb-2" />
                <button type="button" className="text-white hover:text-white border-2 border-white mt-4
                 font-medium rounded-lg text-lg px-8 py-2 text-left mr-2">Follow +</button>
              </div>
              <div className="col-start-5">
                <FontAwesomeIcon icon={faTwitter} className="ml-4 text-white w-5 h-5 inline mt-2" />
                <FontAwesomeIcon icon={faDiscord} className="ml-4 text-white w-5 h-5 inline mt-2" />
              </div>
            </div>
            <div className="p-2 mt-8 rounded-xl" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
              <div className="p-3 text-white">
                <h2 className="font-bold text-2xl">{detail.name}</h2>
                <div className="flex py-2">
                  <p>{detail.view} view</p>
                  <FontAwesomeIcon icon={faEye} className="mx-2 text-white w-4 h-4 mt-1" />
                  <p className="ml-2 mx-2">{detail.like} like</p>
                  <FontAwesomeIcon icon={faHeart} className="text-white w-4 h-4 mt-1" />
                </div>
                <p>{detail.description}</p>
                <h5 className="py-6 text-3xl font-bold">{detail.price}</h5>
                <div className="flex py-2">
                  <button type="button" className="text-white bg-red-500 mt-4
                  font-medium rounded-lg text-lg px-14 py-2 text-left mr-2">Buy Now</button>
                  <button type="button" className="text-white hover:text-white border-2 border-white mt-4
                  font-medium rounded-lg text-lg px-14 py-2 text-left mr-2">Make Offer</button>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-sm text-gray-500 mb-1 ml-1">Items</p>
                    <p className="text-sm text-black ml-1 font-bold">{detail.contractAddress}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-sm text-gray-500 mb-1 ml-1">Token ID</p>
                    <p className="text-sm text-black ml-1 font-bold">{detail.tokenId}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-sm text-gray-500 mb-1 ml-1">Token Standard</p>
                    <p className="text-sm text-black ml-1 font-bold">{detail.tokenStandard}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-sm text-gray-500 mb-1 ml-1">Contract Owner</p>
                    <p className="text-sm text-red-600 ml-1 font-bold">{detail.contractOwner}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-sm text-gray-500 mb-1 ml-1">Blockchain</p>
                    <p className="text-sm text-black ml-1 font-bold">{detail.blockchain}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-sm text-gray-500 mb-1 ml-1">Creator Earnings</p>
                    <p className="text-sm text-black ml-1 font-bold">{detail.creatorEarnings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}