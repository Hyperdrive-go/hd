import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const offers = [
    {
      price: "0,109 ETH",
      usdPrice: "$137,97",
      floor: "22% below",
      expiration: "about 23 hours",
      from: "Parisian"
    },
    {
        price: "0,109 ETH",
        usdPrice: "$137,97",
        floor: "22% below",
        expiration: "about 23 hours",
        from: "Douglas"
    },
    {
        price: "0,109 ETH",
        usdPrice: "$137,97",
        floor: "22% below",
        expiration: "about 23 hours",
        from: "Batz"
    }
  ];

export const Offers = () => {
    return (
    <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex pb-4">
            <div className="flex-auto">
                <FontAwesomeIcon icon={faPercentage} className="text-white w-6 h-6 inline mb-2 mr-2" />
                <h6 className="text-white font-bold text-xl inline">Offers</h6>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-white w-6 h-6 inline mb-2 text-end" />
        </div>
        <table className="w-full table-auto text-white">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 pr-4 text-start">USD Price</th>
              <th className="py-4 pr-8">Floor Difference</th>
              <th className="py-4 pr-8">Expiration</th>
              <th className="py-4 pr-8">From</th>
            </tr>
          </thead>
          <tbody className="mx-auto bg-gray-900">
            {offers.map((offer) => (
                <tr>
                    <td className="py-4 px-4 text-start">{offer.price}</td>
                    <td className="py-4 px-4 text-start">{offer.usdPrice}</td>
                    <td className="py-4 px-4 text-start">{offer.floor}</td>
                    <td className="py-4 px-4 text-start">{offer.expiration}</td>
                    <td className="py-4 px-4 text-start text-red-600">{offer.from}</td>
                </tr>
            ))}
          </tbody>
        </table>
    </div>
    )
}