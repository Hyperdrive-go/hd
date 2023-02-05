import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faImages, faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import banner1 from "@/images/sample/banner1.png"
import ethereumLogo from "@/images/ethereum-eth-logo.png"

export const Body = () => {
    return (
      <div className="bg-gray-900 py-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl border-b border-gray-200 dark:border-gray-700">
            <ul className="text-sm lg:text-md flex flex-auto -mb-px text-md font-medium text-center text-white  dark:text-gray-400">
                <li className="mr-2 w-full">
                    <div className="p-6 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faUser} className="text-red-600 w-6 h-6 lg:w-8 lg:h-8 inline" />
                        <p className="text-red-500 font-medium ml-1 mt-1">Profile</p> 
                    </div>
                </li>
                <li className="mr-2 w-full">
                <div className="p-6 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faBell} className="text-white w-6 h-6 lg:w-8 lg:h-8 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Created</p> 
                    </div>
                </li>
                <li className="mr-2 w-full">
                    <div className="p-6 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faFile} className="text-white w-6 h-6 lg:w-8 lg:h-8 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Hidden</p> 
                    </div>
                </li>
            </ul>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="grid grid-cols-2 gap-12 text-sm lg:text-md ">
                <div className="mt-4">
                    <div className="py-6">
                        <p className="text-white font-bold text-lg inline py-10">Username</p>
                        <button type="button" className="text-gray-400 bg-gray-800 rounded-lg p-2 w-full pl-5 text-left">Enter a username</button>
                    </div>
                    <div className="py-6">
                        <p className="text-white font-bold text-lg inline py-10">Bio</p>
                        <button type="button" className="text-gray-400 bg-gray-800 rounded-lg p-2 w-full pl-5 text-left">Bio</button>
                    </div>
                    <div className="py-6">
                        <p className="text-white font-bold text-lg inline py-10">Add Links</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="py-6">
                        <p className="text-white font-bold text-lg inline mb-2">Wallet Address</p>
                        <button type="button" className="text-gray-400 bg-gray-800 rounded-lg p-2 w-full pl-5 text-left">0x.....</button>
                    </div>
                    <div className="py-6">
                        <p className="text-white font-bold text-lg inline py-10">Profile Image</p>
                    </div>
                    <div className="py-6">
                        <p className="text-white font-bold text-lg inline py-10">Cover Image</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-6 lg:mt-12">
          <button type="button" className="text-white bg-red-700 px-6 py-2 lg:px-8 lg:py-2.5 rounded-lg font-bold">
            Save Changes
          </button>
        </div>
      </div>
    )
}