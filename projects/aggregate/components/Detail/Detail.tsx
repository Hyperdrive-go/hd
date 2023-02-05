import { MoreFromCollection } from "./MoreFromCollection/MoreFromCollection"
import { Description } from "./Description/Description"
import { Properties } from "./Properties/Properties"
import { PriceHistory } from "./PriceHistory/PriceHistory"
import { Offers } from "./Offers/Offers"
import { Listings } from "./Listings/Listings"
import { Activity } from "./Activity/Activity"

export const Detail = () => {
    return (
      <>
        <Description/>
        <div className="bg-black py-10">
          <div className="grid grid-cols-2 gap-4 mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl">
            <Properties/>
            <PriceHistory/>
            <Offers/>
            <Listings/>
          </div>
        </div>
        <Activity/>
        <MoreFromCollection/>
      </>
    )
}