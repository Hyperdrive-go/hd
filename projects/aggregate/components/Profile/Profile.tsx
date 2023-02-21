import { Description } from "./Description/Description"
import { Filter } from "./Filter/Filter"
import { Listings } from "./Listings/Listings"

export const Profile = () => {
    return (
      <>
        <Description/>
        <div className="bg-black py-6 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-2xl lg:max-w-7xl">
              <div className="col-start-1 col-end-2 hidden md:block">
                <Filter/>
              </div>
              <div className="md:col-start-2 md:col-end-5">
                <Listings/>
              </div>
          </div>
        </div>
      </>
    )
}