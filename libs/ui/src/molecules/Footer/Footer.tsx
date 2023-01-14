
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
        className="w-full md:h-72"
        >
        <Image 
            src={backgroundFooter}
            alt="background"
            className="cover"
            fill
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 divide-y divide-slate-800 divide-solid md:ml-8">
        {/* First layer */}
        <div className="relative flex h-44 pt-12">
            <div className="items-center px-2 lg:px-0">
              <Image
                className="hidden h-8 w-auto lg:block"
                src={logo}
                alt="Your Company"
              />
              <div className="pt-4">
                <div className="rounded-md text-sm font-medium text-white">
                    Discover, collect, and sell digital items on the
                </div>
                <div className="rounded-md text-sm font-medium text-white">
                  largest Layer 2 NFT marketplace
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center lg:justify-end">
              <div className="lg:mr-12">
                <h3 className="text-white text-xl font-medium">Join the community</h3>
                <div className="flex pt-6 space-x-4">
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
        <div className="flex h-24 pt-4">
            <div className="items-center">
              <div className="flex space-x-4">
                <div className="rounded-md text-sm font-medium text-white py-2">
                  @2022 HyperDrive. All rights reserved.
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center px-2 md:px-8 lg:ml-6 lg:justify-end">
              <div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Help
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Status
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    API
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Brand
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
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
