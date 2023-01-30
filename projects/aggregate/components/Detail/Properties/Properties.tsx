import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const detail = {
    bodyDesc: "Milk Chocolate",
    bodyTrait: "24 % have this trait",
    outfitDesc: "Trippy Flowers",
    outfitTrait: "29 % have this trait",
    mouthDesc: "Rose",
    mouthTrait: "23 % have this trait",
    backgroundDesc: "Silver",
    backgroundTrait: "25 % have this trait",
    eyesDesc: "Sunglasses",
    eyesTrait: "24 % have this trait",
    headDesc: "Scouter",
    headTrait: "24 % have this trait"
  }

export const Properties = () => {
    return (
    <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex pb-4">
            <div className="flex-auto">
                <FontAwesomeIcon icon={faChartArea} className="text-white w-6 h-6 inline mb-2 mr-2" />
                <h6 className="text-white font-bold text-xl inline">Properties</h6>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-white w-6 h-6 inline mb-2 text-end" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-sm text-red-600 font-bold py-2 ml-1">Body</p>
                <p className="text-sm text-white ml-1">{detail.bodyDesc}</p>
                <p className="text-sm text-gray-500 ml-1">{detail.bodyTrait}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-sm text-red-600 font-bold py-2 ml-1">Outfit</p>
                <p className="text-sm text-white ml-1">{detail.bodyDesc}</p>
                <p className="text-sm text-gray-500 ml-1">{detail.bodyTrait}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-sm text-red-600 font-bold py-2 ml-1">Mouth</p>
                <p className="text-sm text-white ml-1">{detail.bodyDesc}</p>
                <p className="text-sm text-gray-500 ml-1">{detail.bodyTrait}</p>            
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-sm text-red-600 font-bold py-2 ml-1">Background</p>
                <p className="text-sm text-white ml-1">{detail.bodyDesc}</p>
                <p className="text-sm text-gray-500 ml-1">{detail.bodyTrait}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-sm text-red-600 font-bold py-2 ml-1">Eyes</p>
                <p className="text-sm text-white ml-1">{detail.bodyDesc}</p>
                <p className="text-sm text-gray-500 ml-1">{detail.bodyTrait}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-sm text-red-600 font-bold py-2 ml-1">Head</p>
                <p className="text-sm text-white ml-1">{detail.bodyDesc}</p>
                <p className="text-sm text-gray-500 ml-1">{detail.bodyTrait}</p>
            </div>
        </div>
    </div>
    )
}