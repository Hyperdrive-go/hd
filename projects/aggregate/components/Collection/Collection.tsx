import { Description } from "./Description/Description"
import { Listings } from "./Listings/Listings"
import { Filter } from "./Filter/Filter"
import { useEffect, useState } from "react";
import { CardGrid } from "../AssetCard/styles";
import { AssetCardGhost } from "../AssetCard/AssetCardGhost";
import { AssetCard } from "../AssetCard/AssetCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreByURL } from "@libs/api/src/general";
import {
  fetchCollectionAttributes,
  fetchCollectionFilteredActivity,
  fetchCollectionFilteredTokens,
} from "@libs/api/src/collection";

export const Collection = ({ collection, tab = 0 }) => {

  const [filters, setFilters] = useState({
    tokenSort: "",
    activitySort: "",
    availability: "",
    eventTypes: "",
    minPrice: "",
    maxPrice: "",
    paymentToken: "",
    attributes: [],
    chains: [],
    searchQuery: "",
    intersectAttributes: "",
  });

  const [tokensState, setTokensState] = useState({
    tokens: null,
    moreTokens: false,
    tokenResults: null,
    tokensUpdating: true,
  });

  const updateTokens = async () => {
    setTokensState({
      ...tokensState,
      tokensUpdating: true,
    });

    const updatedTokens = await fetchCollectionFilteredTokens(
      collection.address,
      filters.attributes,
      filters.intersectAttributes,
      filters.availability,
      filters.tokenSort,
      filters.minPrice,
      filters.maxPrice,
      filters.paymentToken,
      filters.chains,
      filters.searchQuery
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

  async function fetchMoreTokens() {
    const moreTokens = await fetchMoreByURL(tokensState.tokens.next);

    setTokensState({
      ...tokensState,
      tokens: moreTokens,
      moreTokens: moreTokens.next ? true : false,
      tokenResults: tokensState.tokenResults.concat(moreTokens.results),
    });
  }

  useEffect(() => {
    updateTokens();
  }, [filters]);

    return (
      <>
        <Description collection={collection}/>
        <div className="bg-black py-6 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-2xl lg:max-w-7xl">
              <div className="col-start-1 col-end-2 hidden md:block">
                <Filter/>
              </div>
              <div className="md:col-start-2 md:col-end-5">
                <>
                  {!!tokensState.tokensUpdating ? (
                    <CardGrid className={"large"}>
                      {[...Array(18)].map((e, i) => (
                        <AssetCardGhost key={i} />
                      ))}
                    </CardGrid>
                  ) : (
                    <>
                      {!!tokensState.tokenResults &&
                      tokensState.tokenResults.length > 0 ? (
                        <CardGrid className={"large"}>
                          <InfiniteScroll
                            dataLength={tokensState.tokenResults.length}
                            next={fetchMoreTokens}
                            hasMore={tokensState.moreTokens}
                            loader={[...Array(6)].map((e, i) => (
                              <AssetCardGhost key={i} />
                            ))}
                            style={{ display: "contents", overflow: "visible" }}
                          >
                            {tokensState.tokenResults.map((token, index) => (
                              <AssetCard
                                token={token}
                                showCollection={false}
                                key={index}
                              />
                            ))}
                          </InfiniteScroll>
                        </CardGrid>
                      ) : (
                        <>
                          <h1>No items to display</h1>
                          <p>Try updating your selected filters</p>
                        </>
                      )}
                    </>
                  )}
                </>
              </div>
          </div>
        </div>
      </>
    )
}