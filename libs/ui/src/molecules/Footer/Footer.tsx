
import Image from "next/image";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";

const logo = require('../../assets/images/logo.png');

const Footer = () => {
  return (
    <footer style={{ background: `rgb(242,55,62) linear-gradient(179deg, rgba(242,55,62,1) 0%, rgba(33,54,174,1) 99%, rgba(34,54,175,1) 100%)` }}>
      <div className="mx-auto max-w-7xl">
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
                  largest NFT marketplace on Optimism
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center lg:justify-end">
              <div className="lg:mr-20">
                <h3 className="text-white text-xl font-medium">Join the community</h3>
                <div className="flex pt-6 space-x-6">
                  <button
                      type="button"
                      className="flex-shrink-0 px-2 py-2 rounded-lg bg-sky-900"
                    >
                  <FaTwitter className="h-6 w-6 text-white"/>
                  </button>
                  <button
                      type="button"
                      className="flex-shrink-0 px-2 py-2 rounded-lg bg-sky-900"
                    >
                  <FaDiscord className="h-6 w-6 text-white"/>
                  </button>
                  <button
                      type="button"
                      className="flex-shrink-0 px-2 py-2 rounded-lg bg-sky-900"
                    >
                  <FaTelegram className="h-6 w-6 text-white"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <hr/>
        {/* Second layer */}
        <div className="flex h-24 pt-4">
            <div className="items-center">
              <div className="flex space-x-4">
                <div className="rounded-md text-sm font-medium text-white px-3 py-2 ">
                  @2022 HyperDrive. All rights reserved.
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
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
