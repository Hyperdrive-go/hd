import { Description } from "./Description/Description"
import { Listings } from "./Listings/Listings"
import { Filter } from "./Filter/Filter"

export const Collection = () => {
    return (
      <>
        <Description/>
        <div className="bg-black py-10">
          <div className="grid grid-cols-4 gap-4 mx-auto max-w-7xl">
              <div className="col-start-1 col-end-2">
                <Filter/>
              </div>
              <div className="col-start-2 col-end-5">
                <Listings/>
              </div>
          </div>
        </div>
      </>
    )
}