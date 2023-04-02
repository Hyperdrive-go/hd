import { Description } from "./Description/Description"
import { Filter } from "./Filter/Filter"
import { Listings } from "./Listings/Listings"
import { useEffect, useState } from "react";
import { ERC721Tokens } from "../ERC721Tokens";

import {
  fetchProfileCollections,
  fetchProfileFilteredActivity,
  fetchProfileFilteredTokens,
} from "@libs/api/src/profile";
import { fetchMoreByURL } from "@libs/api/src/general";

export const Profile = ({ profile }) => {
  const [tokensState, setTokensState] = useState({
    tokens: null,
    moreTokens: false,
    tokenResults: [],
    tokensUpdating: true,
  });

  async function fetchMoreTokens() {
    if (tokensState.tokens && tokensState.tokens.next) {
      const moreTokens = await fetchMoreByURL(tokensState.tokens.next);

      setTokensState({
        ...tokensState,
        tokens: moreTokens,
        moreTokens: moreTokens.next ? true : false,
        tokenResults: tokensState.tokenResults.concat(moreTokens.results),
      });
    }
  }

  const [filters, setFilters] = useState({
    tokenSort: "price:desc",
    activitySort: "timestamp:desc",
    availability: "all",
    eventTypes: [],
    minPrice: "",
    maxPrice: "",
    paymentToken: "all",
    collections: [],
    chains: [],
    searchQuery: "",
  });

  const [collectionFilters, setCollectionFilters] = useState({
    collections: null,
    moreCollections: false,
    collectionResults: [],
  });

  useEffect(() => {
    const fetchCollections = async () => {
      const collections = await fetchProfileCollections(profile.address);

      setCollectionFilters({
        ...collectionFilters,
        collections: collections,
        moreCollections: collections.next ? true : false,
        collectionResults: collections.results,
      });
  
    };
  
    fetchCollections();
  }, [profile]);
  
    return (
      <>
         <Description profile={profile}/>
         <div className="bg-black py-6 lg:py-10">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-2xl lg:max-w-7xl">
               <div className="col-start-1 col-end-2 hidden md:block">
                 <Filter/>
               </div>
               <div className="md:col-start-2 md:col-end-5">
                 {/* <Listings/> */}
                 <ERC721Tokens
                  tokensState={tokensState}
                  setTokensState={setTokensState}
                  fetchMoreTokens={fetchMoreTokens}
                  profileAddress={profile.address}
                  filters={filters}
                  setFilters={setFilters}
                  collectionFilters={collectionFilters}
                />
               </div>
           </div>
         </div>
      </>
    )
}