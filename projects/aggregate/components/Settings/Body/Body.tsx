import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter, faTelegram  } from "@fortawesome/free-brands-svg-icons";
import banner1 from "@/images/sample/banner1.png"
import ethereumLogo from "@/images/ethereum-eth-logo.png"
import selectImage from "@/images/select-image.png"

export const Body = () => {
    return (
      <div className="bg-gray-900 py-6">
        <div className="mx-auto max-w-2xl lg:max-w-7xl border-b border-gray-400 dark:border-gray-700">
            <ul className="text-sm lg:text-md flex flex-auto -mb-px text-md font-medium text-center text-white  dark:text-gray-400">
                <li className="mr-2 w-full">
                    <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faUser} className="text-red-600 w-6 h-6 lg:w-7 lg:h-7 inline" />
                        <p className="text-red-500 font-medium ml-1 mt-1">Profile</p> 
                    </div>
                </li>
                <li className="mr-2 w-full">
                <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faBell} className="text-white w-6 h-6 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Created</p> 
                    </div>
                </li>
                <li className="mr-2 w-full">
                    <div className="p-4 border-b-2 border-transparent rounded-t-lg group">
                        <FontAwesomeIcon icon={faFile} className="text-white w-6 h-6 lg:w-7 lg:h-7 inline" />
                        <p className="text-white font-medium ml-1 mt-1">Hidden</p> 
                    </div>
                </li>
            </ul>
        </div>

        <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm lg:text-md py-8">
                <div className="mt-4 space-y-10">
                    <div className="space-y-4">
                        <p className="text-white font-bold text-lg inline">Username</p>
                        <input type="text" className="text-gray-400 bg-gray-900 rounded-lg p-2 w-full pl-5 border-gray-700" placeholder="Enter a username" required/>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-bold text-lg inline">Bio</p>
                        <textarea id="message" rows={6} className="text-gray-400 bg-gray-900 rounded-lg p-2 w-full pl-5 border-gray-700" placeholder="Share your story"></textarea>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-bold text-lg inline">Add Links</p>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-5 md:right-7 flex items-center pl-3 pointer-events-none text-white text-xs md:text-sm">
                                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 mr-2" /> Twitter
                            </div>
                            <input type="text" className="text-gray-400 bg-gray-900 rounded-lg p-2 w-full pl-5 border-gray-700" placeholder="Enter your Twitter handle" required/>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-5 md:right-6 flex items-center pl-3 pointer-events-none text-white text-xs md:text-sm">
                                <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 mr-2" /> Discord
                            </div>
                            <input type="text" className="text-gray-400 bg-gray-900 rounded-lg p-2 w-full pl-5 border-gray-700" placeholder="Enter your Discord handle" required/>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none text-white text-xs md:text-sm">
                                <FontAwesomeIcon icon={faTelegram} className="w-4 h-4 mr-2" /> Telegram
                            </div>
                            <input type="text" className="text-gray-400 bg-gray-900 rounded-lg p-2 w-full pl-5 border-gray-700" placeholder="Enter your Telegram handle" required/>
                        </div>
                    </div>
                </div>
                <div className="mt-4 space-y-10">
                    <div className="space-y-4">
                        <p className="text-white font-bold text-lg inline">Wallet Address</p>
                        <input type="text" className="text-gray-400 bg-gray-900 rounded-lg p-2 w-full pl-5 border-gray-700" placeholder="0xdAb8AB47...757a02ecA3" required/>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-bold text-lg inline">Profile Image</p>
                        <Image className="h-auto w-full rounded-lg" src={selectImage} alt="image description"/>
                        <p className="text-gray-500 font-light text-sm inline">The suggested aspect ration is 1:1</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-bold text-lg inline ">Cover Image</p>
                        <Image className="h-auto w-full rounded-lg" src={selectImage} alt="image description"/>
                        <p className="text-gray-500 font-light text-sm inline">The cover image has a fixed height of 250px. The width varies with the page.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-6">
          <button type="button" className="text-white bg-red-700 px-6 py-2 lg:px-8 lg:py-2.5 rounded-lg font-bold">
            Save Changes
          </button>
        </div>
      </div>
    )
}