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
      <div className="mx-auto max-w-7xl bg-gray-900 rounded-lg p-4">
        <div className="flex">
            <div className="flex-auto">
                <FontAwesomeIcon icon={faFileCircleCheck} className="text-white w-6 h-6 inline mb-2 mr-2" />
                <h6 className="text-white font-bold text-xl inline">Activity</h6>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-white w-6 h-6 inline mb-2 text-end" />
        </div>
        <div className="flex py-4 space-x-4">
          <button type="button" className="text-red-600 border-2 border-red-600 rounded-lg  p-1 px-12 text-left">All</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-12 text-left">Sale</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-12 text-left">Transfers</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-12 text-left">Mints</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-12 text-left">Lists</button>
          <button type="button" className="text-white border border-white rounded-lg  p-1 px-12 text-left">Sales</button>

        </div>
        <table className="w-full table-auto text-white">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-4 px-4 text-start">Event</th>
              <th className="py-4 pr-4 text-start">Price</th>
              <th className="py-4 pr-8 text-start">From</th>
              <th className="py-4 pr-8 text-start">To</th>
              <th className="py-4 pr-8 text-start">Time</th>
            </tr>
          </thead>
          <tbody className="mx-auto bg-gray-900">
            {activities.map((activity) => (
                <tr key={activity.from}>
                    <td className="py-4 px-4 text-start">{activity.event}</td>
                    <td className="py-4 px-4 text-start">{activity.price}</td>
                    <td className="py-4 px-4 text-start">{activity.from}</td>
                    <td className="py-4 px-4 text-start">{activity.to}</td>
                    <td className="py-4 px-4 text-start text-red-600">{activity.from}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}