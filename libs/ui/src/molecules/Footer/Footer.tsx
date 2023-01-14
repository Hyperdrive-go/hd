
import Image from "next/image";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";

const logo = require('../../assets/images/logo.png');
const backgroundFooter = require('../../assets/images/backgroundFooter.png');

const Footer = () => {
  return (
    <footer>
      {/* Background footer */}
      <div className="mx-auto">
        <div style={{
          zIndex: -1,
          position: "absolute"
        }}
        className="w-full h-80 md:h-72"
        >
        <Image 
            src={backgroundFooter}
            alt="background"
            className="cover"
            fill
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:divide-y divide-slate-800 divide-solid md:ml-12 md:mr-12 lg:ml-16">
        {/* First layer */}
        <div className="relative md:flex h-44 pt-12">
            <div className="items-center px-4 md:px-2 lg:px-0">
              <Image
                className="hidden h-8 w-auto lg:block"
                src={logo}
                alt="Your Company"
              />
              <div className="md:pt-4">
                <div className="rounded-md text-sm font-medium text-white">
                    Discover, collect, and sell digital items on the
                </div>
                <div className="rounded-md text-sm font-medium text-white">
                  largest Layer 2 NFT marketplace
                </div>
              </div>
            </div>
            <div className="pt-6 px-4 md:px-0 md:pt-0 md:flex flex-1 justify-center md:justify-end">
              <div>
                <h3 className="text-white md:text-xl font-medium">Join the community</h3>
                <div className="flex pt-4 md:pt-6 space-x-4">
                  <button
                      type="button"
                      className="flex-shrink-0 px-4 py-4 rounded-lg bg-blue-900"
                    >
                  <FaTwitter className="h-5 w-5 text-white"/>
                  </button>
                  <button
                      type="button"
                      className="flex-shrink-0 px-4 py-4 rounded-lg bg-blue-900"
                    >
                  <FaDiscord className="h-5 w-5 text-white"/>
                  </button>
                  <button
                      type="button"
                      className="flex-shrink-0 px-4 py-4 rounded-lg bg-blue-900"
                    >
                  <FaTelegram className="h-5 w-5 text-white"/>
                  </button>
                </div>
              </div>
            </div>
        </div>
        {/* Second layer */}
        <div className="md:flex px-4 h-28 pt-10 md:pt-4 md:px-0">
            <hr className="md:hidden pt-1 bg-slate-800 border-0"/>
            <div className="items-center">
              <div className="md:flex space-x-4">
                <div className="rounded-md text-sm font-medium text-white py-2 pt-4 md:pt-0">
                  @2022 HyperDrive. All rights reserved.
                </div>
              </div>
            </div>
            <div className="md:flex flex-1 justify-end">
              <div>
                <div className="md:flex space-x-2 md:space-x-8 ">
                  <a
                    href="#"
                    className="rounded-md py-2 text-sm font-medium text-white"
                  >
                    Help
                  </a>
                  <a
                    href="#"
                    className="rounded-md py-2 text-sm font-medium text-white"
                  >
                    Status
                  </a>
                  <a
                    href="#"
                    className="rounded-md py-2 text-sm font-medium text-white"
                  >
                    API
                  </a>
                  <a
                    href="#"
                    className="rounded-md py-2 text-sm font-medium text-white"
                  >
                    Brand
                  </a>
                  <a
                    href="#"
                    className="rounded-md py-2 text-sm font-medium text-white"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="rounded-md py-2 text-sm font-medium text-white"
                  >
                    Privacy
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
