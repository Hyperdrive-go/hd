import { Description } from "./Description/Description"
import { Filter } from "./Filter/Filter"
import { useEffect, useState } from "react";
import { ERC721Tokens } from "./ERC721Tokens";
import { Erc1155Tokens } from "./ERC1155Tokens";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faImage, faWindowRestore, faImages, faEyeSlash, faFileArchive } from "@fortawesome/free-solid-svg-icons";

import {
  fetchProfileCollections,
  fetchProfileFilteredActivity,
  fetchProfileFilteredTokens,
} from "@libs/api/src/profile";
import { fetchMoreByURL } from "@libs/api/src/general";

export const Profile = ({ profile, tab = 0 }) => {
  const [activityLoaded, setActivityLoaded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tab);
  const router = useRouter();

  const updateSelectedTab = (tab) => {
    setSelectedTab(tab);
    router.query.tab = tab;
    router.push(router, undefined, { shallow: true, scroll: false });
  };

  const [tokensState, setTokensState] = useState({
    tokens: null,
    moreTokens: false,
    tokenResults: [],
    tokensUpdating: true,
  });

  const [erc1155TokensState, setErc1155TokensState] = useState({
    tokens: null,
    moreTokens: false,
    tokenResults: [],
    tokensUpdating: true,
  });

  const [activityState, setActivityState] = useState({
    activity: null,
    moreActivity: false,
    activityResults: [],
    activityUpdating: true,
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

  async function fetchMoreErc1155Tokens() {
    if (erc1155TokensState.tokens && erc1155TokensState.tokens.next) {
      const moreTokens = await fetchMoreByURL(erc1155TokensState.tokens.next);

      setErc1155TokensState({
        ...erc1155TokensState,
        tokens: moreTokens,
        moreTokens: moreTokens.next ? true : false,
        tokenResults: erc1155TokensState.tokenResults.concat(
          moreTokens.results
        ),
      });
    }
  }

  const updateTokens = async () => {
    setTokensState({
      ...tokensState,
      tokensUpdating: true,
    });

    const updatedTokens = await fetchProfileFilteredTokens(
      profile.address,
      filters.collections,
      filters.availability,
      filters.tokenSort,
      filters.minPrice,
      filters.maxPrice,
      filters.paymentToken,
      filters.chains,
      filters.searchQuery,
      true,
      false
    );

    if (updatedTokens) {
      setTokensState({
        ...tokensState,
        tokens: updatedTokens,
        moreTokens: updatedTokens.next ? true : false,
        tokenResults: updatedTokens.results,
        tokensUpdating: false,
      });
    }
  };

  const updateErc1155Tokens = async () => {
    setErc1155TokensState({
      ...erc1155TokensState,
      tokensUpdating: true,
    });

    const updatedTokens = await fetchProfileFilteredTokens(
      profile.address,
      filters.collections,
      filters.availability,
      filters.tokenSort,
      filters.minPrice,
      filters.maxPrice,
      filters.paymentToken,
      filters.chains,
      filters.searchQuery,
      false,
      true
    );

    if (updatedTokens) {
      setErc1155TokensState({
        ...erc1155TokensState,
        tokens: updatedTokens,
        moreTokens: updatedTokens.next ? true : false,
        tokenResults: updatedTokens.results,
        tokensUpdating: false,
      });
    }
  };

  const updateActivity = async () => {
    setActivityState({
      ...activityState,
      activityUpdating: true,
    });

    const updatedActivity = await fetchProfileFilteredActivity(
      profile.address,
      filters.activitySort,
      filters.collections,
      filters.eventTypes,
      filters.minPrice,
      filters.maxPrice,
      filters.paymentToken,
      filters.chains
    );

    if (updatedActivity) {
      setActivityState({
        ...activityState,
        activity: updatedActivity,
        moreActivity: updatedActivity.next ? true : false,
        activityResults: updatedActivity.results,
        activityUpdating: false,
      });
    }
  };

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
    updateTokens();
    updateErc1155Tokens();

    if (activityLoaded) {
      updateActivity();
    }

  }, [filters, profile]);

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
                {/* Tab */}
                <div className="mx-auto max-w-2xl lg:max-w-7xl border-b border-gray-400 dark:border-gray-700 hidden md:block">
                  <ul className="text-xs lg:text-md flex flex-auto -mb-px text-md font-medium text-center text-white  dark:text-gray-400">
                      <li className="w-full p-1 border-b-2 border-transparent rounded-t-lg group cursor-pointer"
                          onClick={() => updateSelectedTab(0)}>
                          <div className={selectedTab == 0 ? "text-red-600" : ""}>
                              <FontAwesomeIcon icon={faImage} className="w-5 h-5 lg:w-7 lg:h-7 inline" />
                              <p className="font-medium ml-1 mt-1">NFTs
                              {tokensState.tokens && tokensState.tokens.count> 0 && (
                                <> - {tokensState.tokens.count.toLocaleString()}</>
                              )}
                              </p> 
                          </div>
                      </li>
                      <li className="w-full p-1 border-b-2 border-transparent rounded-t-lg group cursor-pointer"
                        onClick={() => updateSelectedTab(1)}>
                        <div className={selectedTab == 1 ? "text-red-600" : ""}>
                            <FontAwesomeIcon icon={faImages} className="w-5 h-5 lg:w-7 lg:h-7 inline" />
                            <p className="font-medium ml-1 mt-1">ERC-1155 NFTs
                              {erc1155TokensState.tokens &&
                                erc1155TokensState.tokens.count > 0 && (
                                  <> - {erc1155TokensState.tokens.count.toLocaleString()}</>
                              )}
                            </p> 
                        </div>
                      </li>
                      <li className="w-full p-1 border-b-2 border-transparent rounded-t-lg group cursor-pointer"
                          onClick={() => updateSelectedTab(2)}>
                          <div className={selectedTab == 2 ? "text-red-600" : ""}>
                            <FontAwesomeIcon icon={faWindowRestore} className="w-5 h-5 lg:w-7 lg:h-7 inline" />
                            <p className="font-medium ml-1 mt-1">Created</p> 
                          </div>
                      </li>
                      <li className="w-full p-1 border-b-2 border-transparent rounded-t-lg group cursor-pointer"
                          onClick={() => updateSelectedTab(3)}>
                          <div className={selectedTab == 3 ? "text-red-600" : ""}>
                            <FontAwesomeIcon icon={faBookBookmark} className="w-5 h-5 lg:w-7 lg:h-7 inline" />
                            <p className="font-medium ml-1 mt-1">Favourited</p> 
                          </div>
                      </li>
                      <li className="w-full p-1 border-b-2 border-transparent rounded-t-lg group cursor-pointer"
                          onClick={() => updateSelectedTab(4)}>
                        <div className={selectedTab == 4 ? "text-red-600" : ""}>
                          <FontAwesomeIcon icon={faEyeSlash} className="w-5 h-5 lg:w-7 lg:h-7 inline" />
                          <p className="font-medium ml-1 mt-1">Hidden</p> 
                        </div>
                      </li>
                      <li className="w-full p-1 border-b-2 border-transparent rounded-t-lg group cursor-pointer"
                          onClick={() => updateSelectedTab(5)}>
                          <div className={selectedTab == 5 ? "text-red-600" : ""}>
                            <FontAwesomeIcon icon={faFileArchive} className="w-5 h-5 lg:w-7 lg:h-7 inline" />
                            <p className="font-medium ml-1 mt-1">Activity</p> 
                          </div>
                      </li>
                  </ul>
                </div>
                {(selectedTab == 0) && (
                  <ERC721Tokens
                    tokensState={tokensState}
                    setTokensState={setTokensState}
                    fetchMoreTokens={fetchMoreTokens}
                    profileAddress={profile.address}
                    filters={filters}
                    setFilters={setFilters}
                    collectionFilters={collectionFilters}
                  /> 
                )}
                 {(selectedTab == 1) && (
                    <Erc1155Tokens
                    tokensState={erc1155TokensState}
                    setTokensState={setErc1155TokensState}
                    fetchMoreTokens={fetchMoreErc1155Tokens}
                    profileAddress={profile.address}
                    filters={filters}
                    setFilters={setFilters}
                    collectionFilters={collectionFilters}
                    /> 
                  )}
               </div>
           </div>
         </div>
      </>
    )
}