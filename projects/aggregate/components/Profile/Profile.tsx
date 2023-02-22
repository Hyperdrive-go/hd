import { useEffect, useState } from "react";

import { Description } from "./Description/Description"
import { Filter } from "./Filter/Filter"
import { Listings } from "./Listings/Listings"
import { fetchProfile } from "@libs/api/src/profile";
import Molecules from "@libs/ui/src/molecules";
import { useSelector } from "react-redux";
import { State } from "@/store/index";

export const Profile = () => {
  const address = useSelector((state: State) => state.address);
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

    return (
      <>
      {!!profile ? (
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
      ) : address ? (
        <Molecules.Loader />
      ) : (
        <Molecules.NotLoggedIn />
      )}
      </>
    )
}