import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { AssetCardGhost } from "./AssetCard/AssetCardGhost";
import { CardGrid } from "./AssetCard/styles";
import { featureToken, hideToken } from "@libs/api/src/profile";

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
    {!!tokensState.tokensUpdating ? (
        <CardGrid className="large">
          {[...Array(18)].map((e, i) => (
            <AssetCardGhost key={i} />
          ))}
        </CardGrid>
      ) : (
        <>
          {!!tokensState.tokenResults && tokensState.tokenResults.length > 0 ? (
            console.log(1)
            // <CardGrid className={"large"}>
            //   <InfiniteScroll
            //     dataLength={tokensState.tokenResults.length}
            //     next={fetchMoreTokens}
            //     hasMore={tokensState.moreTokens}
            //     loader={[...Array(6)].map((e, i) => (
            //       <AssetCardGhost key={i} />
            //     ))}
            //     style={{ display: "contents", overflow: "visible" }}
            //   >
            //     {tokensState.tokenResults.map((token, index) => (
            //       // <AssetCard
            //       //   token={token}
            //       //   profile={profileAddress}
            //       //   hideToken={hide}
            //       //   key={index}
            //       // />
            //       // <div>{index}</div>
            //     ))}
            //   </InfiniteScroll>
            // </CardGrid>
          ) : (
            <div>
              <h1>No items to display</h1>
              <p>Try updating your selected filters</p>
            </div>
          )}
        </>
      )}
    </>
  );
};
