import bannerBackground from "@/images/hero_banner.png"
import Image from "next/image";
import banner1 from "@/images/sample/banner1.png"
import banner2 from "@/images/sample/banner2.png"
import banner3 from "@/images/sample/banner3.png"
import banner4 from "@/images/sample/banner4.png"
import detailSample from "@/images/sample/detail.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";


const sliders = [
  {
    name: "Cat god 1",
    code: "#7083",
    imageUrl: banner1,
    timeLeft: "4h 30m 22s",
    price: "0.23 ETH"
  },
  {
    name: "Cat god 2",
    code: "#7083",
    imageUrl: banner2,
    timeLeft: "4h 30m 22s",
    price: "1.33 ETH"
  },
  {
    name: "Cat god 3",
    code: "#7083",
    imageUrl: banner3,
    timeLeft: "4h 30m 22s",
    price: "0.14 ETH"
  },
  {
    name: "Cat god 4",
    code: "#7083",
    imageUrl: banner4,
    timeLeft: "4h 30m 22s",
    price: "6.54 ETH"
  },
];

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
                src={banner3}
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
            <div className="p-2 mt-8 opacity-50	 bg-gray-700">
              <p className="text-white opacity-10 font-bold">aa</p>
              
            </div>
          </div>
        </div>
      </div>
    )
}