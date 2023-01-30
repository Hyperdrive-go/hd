import bannerBackground from "@/images/hero_banner.png"
import Image from "next/image";
import banner5 from "@/images/sample/banner5.png"
import optichad from "@/images/sample/optichad.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";



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
              className="-z-10"
            />
          <div className="mx-auto max-w-6xl relative">
            <Image 
                src={optichad}
                alt=""
              />
          </div>
        </div>
      </div>
    )
}