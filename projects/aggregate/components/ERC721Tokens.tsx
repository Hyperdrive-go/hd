import Image from "next/image";
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
  console.log(tokensState)
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
      {collectionFilters.collectionResults.length > 0 &&
            filters.collections.map((collectionId, index) => {
              const collection = collectionFilters.collectionResults.find(
                (e) => e.address == collectionId
              );
              console.log(collection)
              if (collection)
                return (
                  <></>
                );
            })}
    </>
  );
};
