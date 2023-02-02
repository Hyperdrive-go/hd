import bannerBackground from "@/images/hero_banner.png"
import Image from "next/image";
import banner1 from "@/images/sample/banner1.png"
import banner2 from "@/images/sample/banner2.png"
import banner3 from "@/images/sample/banner3.png"
import banner4 from "@/images/sample/banner4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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

export const Hero = () => {
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
        <h1 className="text-white p-8 text-center text-4xl font-bold">
          Explore, collect, and sell NFTs
        </h1>          
        <div className="mx-auto max-w-7xl">
          <ul
            role="list"
            className="grid grid-cols-4 gap-4"
          >
            {sliders.map((slider) => (
              <li
                key={slider.name}
                className="rounded-lg bg-white"
              >
                <div className="rounded-lg bg-white p-4">
                    <div className="grid grid-cols-2">
                      <div className="flex">
                        <Image
                          className="rounded-lg h-6 w-6"
                          src={slider.imageUrl}
                          alt=""
                          priority
                        />
                          <p className="text-lg font-light tracking-tight text-gray-900 px-2">{slider.name}</p>
                          <FontAwesomeIcon icon={faCircleCheck} className="text-red-600 w-4 h-4 mt-1" />
                      </div>
                      <p className="text-lg font-light tracking-tight text-red-600 text-right">{slider.code}</p>
                    </div>
                    <div className="py-4">
                      <Image
                        className="rounded-lg"
                        src={slider.imageUrl}
                        alt=""
                        priority
                      />
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="text-lg font-light tracking-tight text-gray-900">{slider.timeLeft}</p>
                      <p className="text-lg font-bold tracking-tight text-red-600 text-right">{slider.price}</p>
                    </div>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}