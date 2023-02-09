import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import featureBanner from "@/images/feature_banner.png"
import banner1 from "@/images/sample/banner1.png"
import ethereumLogo from "@/images/ethereum-eth-logo.png"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
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

const features = [
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  },
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  },
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  },
  {
    name: "RabbitHole L2 Explorer",
    description: "These explorers are learning and discovering the best of web3 together.",
    volume: "153 443.133",
    items: "105.7K",
    owners: "96.9K",
    listed: "4.1%",
    floor: "0.245",
    imageUrl: banner1
  }
]

export const FeaturedCreators = () => {
    return (
      <div className="bg-black pb-12">
        <h2 className="text-white p-6 lg:p-8 text-center tex-xl md:text-2xl lg:text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="mx-auto max-w-sm md:max-w-2xl lg:max-w-7xl">
          <Carousel
            swipeable={true}
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
            {features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-lg p-3"
              >
                <div className="max-w-sm bg-gray-900 rounded-lg pb-2">
                    <Image 
                      src={featureBanner}
                      alt="background"
                      className="-z-10"
                    />
                    <Image 
                      src={feature.imageUrl}
                      alt="background"
                      className="mx-auto p-1 bg-white w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-lg -mt-8 md:-mt-16 z-50 relative"
                    />
                    <div className="p-5 text-center">
                       <div className="flex-auto mb-2">
                        <h5 className="mr-2 text-sm lg:text-lg font-bold text-white inline">{feature.name}</h5>
                        <FontAwesomeIcon icon={faCircleCheck} className="text-red-600 w-4 h-4 inline" />
                       </div>
                       <p className="sm:font-light text-xs lg:text-sm text-white">{feature.description}</p>
                    </div>
                    <div className="mx-auto w-11/12 bg-gray-800 rounded-lg p-2 mb-2">
                      <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">Volume</p>
                      <Image
                          className="rounded-lg h-4 w-4 mr-1 inline"
                          src={ethereumLogo}
                          alt=""
                          priority
                        />
                      <p className="text-xs lg:text-sm text-white inline">{feature.volume}</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2 gap-2">
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-1 md:p-2">
                        <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">Items</p>
                        <p className="text-xs lg:text-sm text-white ml-1">{feature.items}</p>
                      </div>
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-1 md:p-2">
                        <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">Owners</p>
                        <p className="text-xs lg:text-sm text-white ml-1">{feature.owners}</p>
                      </div>
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-1 md:p-2">
                        <p className="text-xs lg:text-sm text-gray-500 mb-2 ml-1">Listed</p>
                        <p className="text-xs lg:text-sm text-white ml-1">{feature.listed}</p>
                      </div>
                      <div className="mx-auto w-10/12 bg-gray-800 rounded-lg p-1 md:p-2">
                        <p className="text-xs lg:text-sm text-gray-500 mb-1 ml-1">Floor</p>
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
              </div>
            ))}
          </Carousel>
        </div>
        <div className="text-center mt-6 lg:mt-12">
          <button type="button" className="text-white bg-red-700 px-6 py-2 lg:px-8 lg:py-2.5 rounded-lg">
            View More
          </button>
        </div>
      </div>
    )
}