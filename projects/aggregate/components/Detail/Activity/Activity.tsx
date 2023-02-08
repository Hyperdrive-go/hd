import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const activities = [
    {
      event: "Sale",
      price: "0,109 ETH",
      from: "Douglas",
      to: "Parisian",
      time: "51 min ago"
    },
    {
      event: "Transfer",
      price: "0,109 ETH",
      from: "Douglas",
      to: "Parisian",
      time: "51 min ago"
    },
    {
      event: "Mint",
      price: "0,109 ETH",
      from: "Douglas",
      to: "Parisian",
      time: "51 min ago"
    },
    {
      event: "List",
      price: "0,109 ETH",
      from: "Douglas",
      to: "Parisian",
      time: "51 min ago"
    },
  ];

export const Activity = () => {
    return (
    <div className="mx-auto bg-black">
      <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl bg-gray-900 rounded-lg p-4">
        <div className="flex">
            <div className="flex-auto">
                <FontAwesomeIcon icon={faFileCircleCheck} className="text-white w-5 h-5 lg:w-6 lg:h-6 inline mb-2 mr-2" />
                <h6 className="text-white font-bold text-xl inline">Activity</h6>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-white w-5 h-5 lg:w-6 lg:h-6 inline mb-2 text-end" />
        </div>
        <div className="md:flex py-4 md:space-x-4 space-y-4 md:space-y-0">
          <button type="button" className="text-red-600 border-2 border-red-600 rounded-lg  p-1 px-6 lg:px-12 text-left mr-2 md:mr-0">All</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-6 lg:px-12 text-left mr-2 md:mr-0">Sale</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-6 lg:px-12 text-left">Transfers</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-6 lg:px-12 text-left mr-2 md:mr-0">Mints</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-6 lg:px-12 text-left mr-2 md:mr-0">Lists</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-6 lg:px-12 text-left">Sales</button>

        </div>
        <table className="w-full table-auto text-white">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-4 px-4 md:text-start text-sm lg:text-md hidden md:inline-block">Event</th>
              <th className="py-4 pr-4 md:text-start text-sm lg:text-md">Price</th>
              <th className="py-4 pr-8 md:text-start text-sm lg:text-md">From</th>
              <th className="py-4 pr-8 md:text-start text-sm lg:text-md">To</th>
              <th className="py-4 pr-8 md:text-start text-sm lg:text-md hidden md:inline-block">Time</th>
            </tr>
          </thead>
          <tbody className="mx-auto bg-gray-900">
            {activities.map((activity) => (
                <tr key={activity.from}>
                    <td className="py-4 px-4 text-start text-sm lg:text-md hidden md:inline-block">{activity.event}</td>
                    <td className="py-4 px-4 text-start text-sm lg:text-md">{activity.price}</td>
                    <td className="py-4 px-4 text-start text-sm lg:text-md">{activity.from}</td>
                    <td className="py-4 px-4 text-start text-sm lg:text-md">{activity.to}</td>
                    <td className="py-4 px-4 text-start text-red-600 text-sm lg:text-md hidden md:inline-block">{activity.from}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}