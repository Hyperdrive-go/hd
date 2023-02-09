import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListSquares, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const listings = [
    {
      price: "0,109 ETH",
      usdPrice: "$137,97",
      expiration: "about 23 hours",
      from: "0xdAb...02ecA3"
    },
    {
        price: "0,109 ETH",
        usdPrice: "$137,97",
        expiration: "about 23 hours",
        from: "0xdAb...02ecA3"
    },
    {
        price: "0,109 ETH",
        usdPrice: "$137,97",
        expiration: "about 23 hours",
        from: "0xdAb...02ecA3"
    }
  ];

export const Listings = () => {
    return (
    <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex pb-4">
            <div className="flex-auto">
                <FontAwesomeIcon icon={faListSquares} className="text-white w-5 h-5 lg:w-6 lg:h-6 inline mb-2 mr-2" />
                <h6 className="text-white font-bold text-lg lg:text-xl inline">Listings</h6>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-white w-5 h-5 lg:w-6 lg:h-6 inline mb-2 text-end" />
        </div>
        <table className="w-full table-auto text-white">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-4 px-4 text-sm lg:text-md">Price</th>
              <th className="py-4 pr-4 text-start text-sm lg:text-md">USD Price</th>
              <th className="py-4 pr-8 hidden lg:inline-block text-sm lg:text-md">Expiration</th>
              <th className="py-4 pr-8 hidden lg:inline-block text-sm lg:text-md">From</th>
              <th className="py-4 pr-8"></th>
            </tr>
          </thead>
          <tbody className="mx-auto bg-gray-900">
            {listings.map((listing) => (
                <tr key={listing.from}>
                    <td className="py-4 px-2 text-start text-sm lg:text-md">{listing.price}</td>
                    <td className="py-4 px-2 text-start text-sm lg:text-md">{listing.usdPrice}</td>
                    <td className="py-4 px-2 text-start hidden lg:inline-block text-sm lg:text-md">{listing.expiration}</td>
                    <td className="py-4 px-2 text-start hidden lg:inline-block text-sm lg:text-md">{listing.from}</td>
                    <td className="py-4 px-2 text-start text-sm lg:text-md">
                      <button type="button" className="text-red-600 border-2 border-red-600 rounded-lg  p-1 px-6 text-left">Buy</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
    </div>
    )
}