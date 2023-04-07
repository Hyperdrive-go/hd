import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { AssetCardGhost } from "../AssetCard/AssetCardGhost";
import { CardGrid } from "../AssetCard/styles";
import { featureToken, hideToken } from "@libs/api/src/profile";
import { AssetCard } from "../AssetCard/AssetCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const ERC721Tokens = ({
  tokensState,
  setTokensState,
  filters,
  setFilters,
  fetchMoreTokens,
  collectionFilters,
  profileAddress,
}) => {

  const hide = async (e, token) => {
    e.preventDefault();
    e.stopPropagation();

    const res = await hideToken(
      profileAddress,
      token.contract_address,
      token.token_id
    );
    if (res) {
      setTokensState({
        ...tokensState,
        tokenResults: tokensState.tokenResults.filter((e) => e != token),
      });
    } else {

    }
  };

  const feature = async (e, token) => {
    e.preventDefault();
    e.stopPropagation();

    const res = await featureToken(
      profileAddress,
      token.contract_address,
      token.token_id
    );
    if (res) {
      return;
      setTokensState({
        ...tokensState,
        tokenResults: tokensState.tokenResults.filter((e) => e != token),
      });
    } else {

    }
  };


  return (
    <>
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-1 justify-center px-2 py-4">
        <div className="w-full md:max-w-7xl sm:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search name, id
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 w-5 h-5" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-lg border border-gray-400 bg-transparent
              py-4 md:py-3 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white "
              placeholder="Search name, id ..."
              type="search"
            />
          </div>
        </div>
      </div>
      {!!tokensState.tokensUpdating ? (
          <CardGrid className="large">
            {[...Array(18)].map((e, i) => (
              <AssetCardGhost key={i} />
            ))}
          </CardGrid>
        ) : (
          <>
            {!!tokensState.tokenResults && tokensState.tokenResults.length > 0 ? (
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
                      profile={profileAddress}
                      hideToken={hide}
                      key={index}
                    />
                  ))}
                </InfiniteScroll>
              </CardGrid>
            ) : (
              <div>
                <h1>No items to display</h1>
                <p>Try updating your selected filters</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
