import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import bannerBackground from "@/images/hero_banner.png"
import banner1 from "@/images/sample/banner1.png"
import banner2 from "@/images/sample/banner2.png"
import banner3 from "@/images/sample/banner3.png"
import banner4 from "@/images/sample/banner4.png"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

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
  {
    name: "Cat god 5",
    code: "#7083",
    imageUrl: banner1,
    timeLeft: "4h 30m 22s",
    price: "0.23 ETH"
  },
  {
    name: "Cat god 6",
    code: "#7083",
    imageUrl: banner2,
    timeLeft: "4h 30m 22s",
    price: "1.33 ETH"
  },
  {
    name: "Cat god 7",
    code: "#7083",
    imageUrl: banner3,
    timeLeft: "4h 30m 22s",
    price: "0.14 ETH"
  },
  {
    name: "Cat god 8",
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
          className="w-full h-96 lg:h-full"
          >
          <Image 
              src={bannerBackground}
              alt="background"
              className="cover"
              fill
            />
          </div>
        </div>
        <h1 className="text-white p-6 lg:p-8 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          Explore, collect, and sell NFTs
        </h1>          
        <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            renderButtonGroupOutside={true}
            centerMode={true}
            rewindWithAnimation={true}
          >
            {sliders.map((slider, index) => (
              <div
                key={index}
                className="p-2"
              >
                <div className="rounded-lg bg-white p-3">
                    <div className="grid grid-cols-3">
                      <div className="flex col-start-1 col-end-3">
                        <Image
                          className="rounded-lg h-5 w-5 lg:h-6 lg:w-6"
                          src={slider.imageUrl}
                          alt=""
                          priority
                        />
                          <p className="text-sm lg:text-md font-light tracking-tight text-gray-900 px-2">{slider.name}</p>
                          <FontAwesomeIcon icon={faCircleCheck} className="text-red-600 w-3 h-3 lg:w-4 lg:h-4 mt-1" />
                      </div>
                      <p className="text-sm lg:text-md font-light tracking-tight text-red-600 text-right">{slider.code}</p>
                    </div>
                    <div className="py-3">
                      <Image
                        className="rounded-lg"
                        src={slider.imageUrl}
                        alt=""
                        priority
                      />
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="text-sm lg:text-md font-light tracking-tight text-gray-900">{slider.timeLeft}</p>
                      <p className="text-sm lg:text-md font-bold tracking-tight text-red-600 text-right">{slider.price}</p>
                    </div>
                  </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    )
}