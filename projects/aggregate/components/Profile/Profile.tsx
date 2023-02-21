import { useEffect, useState } from "react";

import { Description } from "./Description/Description"
import { Filter } from "./Filter/Filter"
import { Listings } from "./Listings/Listings"
import { fetchProfile } from "@libs/api/src/profile";

export const Profile = () => {
  // const address = useSelector((state: State) => state.address);
  const address = "0x1557EE78Ab23F7264366a055eCAce48390b5B0C7";
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const profileRes = await fetchProfile(address);

      setProfile(profileRes);
    }

    if (address) {
      setProfile(null);
      getProfile();
    }
  }, [address]);
  console.log(profile)

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