import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import ethereumLogo from "@/images/ethereum-eth-logo.png"
import opLogo from "@/images/optimism-eth-logo.png"


export const Filter = () => {
    return (
    <div className="bg-gray-900 rounded-lg p-4">
        <div className="pb-4 divide-y divide-gray-600">

            {/* Sort */}
            <div className="mb-4">
                <p className="text-white font-bold text-lg inline">Sort</p>
                <div className="py-2">
                    <select className="bg-gray-800 text-white text-sm rounded-lg w-full">
                        <option selected value="LH">Price: Low to High</option>
                        <option value="HU">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Availability */}
            <div className="py-4">
                <div className="flex pb-4">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Availability</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className="text-white w-4 h-4 inline mt-1" />
                </div>

                <div className="py-2 space-y-3">
                    <button type="button" className="text-red-600 border border-red-600 rounded-lg p-2 w-full pl-5 text-left">All</button>
                    <button type="button" className="text-white border border-gray-600 rounded-lg p-2 w-full pl-5 text-left">Buy Now</button>
                    <button type="button" className="text-white border border-gray-600 rounded-lg p-2 w-full pl-5 text-left">Has Offers</button>
                    <button type="button" className="text-white border border-gray-600 rounded-lg p-2 w-full pl-5 text-left">Not Listed</button>
                </div>
            </div>

            {/* Price */}
            <div className="py-4">
                <div className="flex pb-4">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Price</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className="text-white w-4 h-4 inline mt-1" />
                </div>

                <div className="py-2 grid grid-cols-2 gap-4">
                    <button type="button" className="text-gray-400 bg-gray-800 rounded-lg p-2 w-full pl-5 text-left">Min</button>
                    <button type="button" className="text-gray-400 bg-gray-800 rounded-lg p-2 w-full pl-5 text-left">Max</button>
                </div>
            </div>

            {/* Currency */}
            <div className="py-4">
                <div className="flex pb-4">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Currency</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className="text-white w-4 h-4 inline mt-1" />
                </div>

                <div className="py-2 space-y-3">
                    <button type="button" className="text-red-600 border border-red-600 rounded-lg p-2 w-full pl-5 text-left">All</button>
                    <button type="button" className="text-white border border-gray-600 rounded-lg p-2 w-full pl-4 text-left">
                        <Image
                            className="rounded-lg h-4 w-4 mr-1 inline"
                            src={ethereumLogo}
                            alt=""
                            priority
                            />
                        ETH
                    </button>
                    <button type="button" className="text-white border border-gray-600 rounded-lg p-2 w-full pl-4 text-left">
                        <Image
                            className="rounded-lg h-4 w-4 mr-2 inline"
                            src={opLogo}
                            alt=""
                            priority
                            />
                        OP
                    </button>
                </div>
            </div>

            {/* Filter list */}
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">1 of 1</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Background</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Body</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Earrings</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Eyes</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Head</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Mouth</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Outfit</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
            <div className="py-4">
                <div className="flex">
                    <div className="flex-auto">
                        <p className="text-white font-bold text-lg inline">Attribute Filter Method</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="text-white w-4 h-4 inline mt-1" />
                </div>
            </div>
        </div>
    </div>
    )
}