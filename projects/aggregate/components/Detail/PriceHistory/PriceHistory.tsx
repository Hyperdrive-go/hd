import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const PriceHistory = () => {
    return (
    <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex pb-4">
            <div className="flex-auto">
                <FontAwesomeIcon icon={faChartLine} className="text-white w-5 h-5 lg:w-6 lg:h-6 inline mb-2 mr-2" />
                <h6 className="text-white font-bold text-lg lg:text-xl inline">Price History</h6>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-white w-5 h-5 lg:w-6 lg:h-6 inline mb-2 text-end" />
        </div>
        
    </div>
    )
}