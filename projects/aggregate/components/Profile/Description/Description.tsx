import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


import bannerBackground from "@/images/hero_banner.png"
import { faDiscord, faTwitter,  } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faEdit, faImages } from "@fortawesome/free-solid-svg-icons";

const detail = {
  name: "Omni Chad",
  description: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit Aenean id metus id velitAenean id  metus id velit",
  address: "0xdAb8AB47...757a02ecA3"
}

export const Description = () => {
    return (
      <div className="">
        <div className="mx-auto">
          <div style={{
            zIndex: -1,
            position: "absolute"
          }}
          className="w-full h-4/6 md:h-3/6 lg:h-4/6"
          >
          <Image 
              src={bannerBackground}
              alt="background"
              className="cover"
              fill
            />
          </div>
        </div>
        <div className="mx-auto max-w-3xl lg:max-w-7xl p-4 md:p-6 lg:p-12 mb-4">
            <div className="flex flex-col justify-center items-center bg-gray-800 h-28 md:h-48 lg:h-56 rounded-xl">
              <FontAwesomeIcon icon={faImages} className="text-gray-500 w-10 h-10" />
            </div>
          <div className="mx-auto max-w-6xl relative px-6 grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="col-start-2 col-end-6 md:col-start-4 md:col-end-12 lg:col-start-1 lg:col-end-2">
              <button type="button" className="bg-gray-800 border-4 border-white p-8 md:p-8 lg:p-10
                  rounded-lg -mt-20 lg:-mt-8">
                  <FontAwesomeIcon icon={faImages} className="text-gray-500 w-10 h-10" />
                </button>
            </div>
            {/* mobile */}
            <div className="col-start-2 col-end-12 md:hidden">
              <div className="flex">
                <div className="flex-auto">
                  <h2 className="text-white text-xl lg:text-2xl font-bold inline">{detail.name}</h2>
                </div>
              </div>
              <FontAwesomeIcon icon={faTwitter} className="ml-4 text-white w-5 h-5 inline mt-2" />
              <FontAwesomeIcon icon={faDiscord} className="ml-4 text-white w-5 h-5 inline mt-2" />
            </div>

            <div className="col-start-1 col-end-12 md:hidden">
              <p className="text-sm lg:text-md text-white font-light">{detail.description}</p>
            </div>

            <div className="col-start-2 col-end-6 lg:mt-2 hidden md:block">
              <div className="flex py-2">
                <div className="flex-auto">
                  <h2 className="text-white text-xl lg:text-2xl font-bold inline">{detail.name}</h2>
                </div>
                <FontAwesomeIcon icon={faTwitter} className="mr-2 text-white w-5 h-5 inline mt-2" />
                <FontAwesomeIcon icon={faDiscord} className="mr-4 text-white w-5 h-5 inline mt-2" />
              </div>
              <p className="text-sm lg:text-md text-white font-light">{detail.description}</p>
            </div>

            <div className="mx-auto col-start-1 col-end-12 md:col-start-6 md:col-end-12">
              <div className="text-sm lg:text-md bg-black p-2 px-4 mt-4 rounded-lg text-white font-light flex">
                {detail.address} <FontAwesomeIcon icon={faCopy} className="ml-2 text-white w-5 h-5" />
              </div>
              <div className="flex flex-row-reverse">
                  <a href="settings" className="right-0 bg-black p-2 px-4 mt-4 rounded-lg text-sm lg:text-md text-white font-light flex">
                    Edit page <FontAwesomeIcon icon={faEdit} className="ml-2 text-white w-5 h-5" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}