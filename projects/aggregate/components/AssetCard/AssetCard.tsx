import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  AssetInfo,
  AssetInfoLabel,
  AssetInfoText,
  AssetName,
  AssetTime,
  AssetTimeText,
  Card,
  CardContent,
  CardSection,
  CartContainer,
  CartContainerGrid,
  CollectionIcon,
  CollectionName,
  HeroContainer,
  HeroSection,
  Icon,
  LikeContainer,
  Network,
  Rank,
  TextContainer,
  TokenImageContainer,
  USDPrice,
} from "./styles";

export const AssetCard = ({
  token,
  profile = null,
  hideToken = null,
  showToken = null,
  featureToken = null,
  unfeatureToken = null,
  showCollection = true,
}) => {
  const [showFeatureToken, setShowFeatureToken] = useState(false);
  const [isInCart, setIsInCart] = useState(false)

  const [tokenLiked, setTokenLiked] = useState(false);

  const updateLikeStatus = async (e) => {
    e.stopPropagation();
    e.preventDefault();

  };

  const username =
    token.owner && (token.owner.username || token.owner.reverse_ens);

  const [showAddToCart, setShowAddToCart] = useState(false);
  const [showHideToken, setShowHideToken] = useState(false);
  console.log(token.image)

  return (
    <Card>
      <div>
        <a>
          <TokenImageContainer
            className={
              !token.image && !token.collection.image_url
                ? "no-image"
                : token.collection.display_theme == 0
                ? "padded"
                : null
            }
            backgroundColor={
              token.background_color ? `#${token.background_color}` : null
            }
          >
          {token.image ? (
              <Image
              src={token.image}
              alt=""
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
              width={100}
              height={100}
            />) : token.collection.image_url ? (
                <img src={token.collection.image_url} alt="" />
            ) : (
              <>No Image</>
            )}
          </TokenImageContainer>
          <CardContent>
            <HeroContainer>
              <HeroSection>
                {showCollection && (
                  <CollectionName>
                    <a
                      href={`/collection/${
                        token.collection.slug
                          ? token.collection.slug
                          : token.contract_address
                      }`}
                    >
                      <a>
                        <TextContainer>{token.collection.name}</TextContainer>
                        {token.collection.verified && (
                          <CollectionIcon>
                          </CollectionIcon>
                        )}
                      </a>
                    </a>
                  </CollectionName>
                )}
                <AssetName>
                  <TextContainer>{token.name}</TextContainer>
                </AssetName>
              </HeroSection>

              <LikeContainer
                onClick={updateLikeStatus}
                onMouseOver={(e) => e.stopPropagation()}
                className={tokenLiked ? "active" : null}
                data-tip={tokenLiked ? "Unfavorite" : "Favorite"}
              >
              </LikeContainer>
            </HeroContainer>
            {/* Show expiration (if within a week) > last sale price > best offer (if listed for sale) > owner*/}
            <CardSection
              className={
                showAddToCart || showHideToken || showFeatureToken || isInCart
                  ? "detail cart"
                  : "detail"
              }
            >
              {profile &&
              (showHideToken || showFeatureToken) ? (
                showHideToken ? (
                  <AssetInfo className="detail">
                    <AssetInfoText className="detail cart">
                      {hideToken ? "Hide" : "Show"}
                    </AssetInfoText>
                  </AssetInfo>
                ) : (
                  <AssetInfo className="detail">
                    <AssetInfoText className="detail cart">
                      {featureToken ? "Feature" : "Unfeature"}
                    </AssetInfoText>
                  </AssetInfo>
                )
              ) : token.sell_order &&
                token.sell_order.payment_token.symbol == "ETH" &&
                token.sell_order.contract_version == 6 &&
                token.collection.contract_type == "ERC-721" &&
                (showAddToCart || isInCart) ? (
                <AssetInfo className="detail">
                  <AssetInfoText className="detail cart">
                    {isInCart ? "Remove from cart" : "Add to cart"}
                  </AssetInfoText>
                </AssetInfo>
              ) : !!token.last_sale_price ? (
                <AssetInfo className="detail">
                  <AssetInfoLabel className="detail">Last</AssetInfoLabel>
                  <AssetInfoText className="detail">
                    
                  </AssetInfoText>
                </AssetInfo>
              ) : token.sell_order && !!token.highest_offer ? (
                <AssetInfo className="detail">
                  <AssetInfoLabel className="detail">Best Offer</AssetInfoLabel>
                  <AssetInfoText className="detail">
                    
                  </AssetInfoText>
                </AssetInfo>
              ) : token.owner ? (
                <AssetInfo className="detail">
                  <AssetInfoLabel className="detail">Owned by</AssetInfoLabel>
                  <AssetInfoText className="detail">
                    {profile === token.owner.address ? (
                      "you"
                    ) : (
                      <>
                        {username ? username : token.owner.address.slice(0, 6)}
                      </>
                    )}
                  </AssetInfoText>
                </AssetInfo>
              ) : (
                token.collection.contract_type == "ERC-1155" &&
                !!token.unique_owners && (
                  <AssetInfo className="detail">
                    <AssetInfoLabel className="detail">Owned by</AssetInfoLabel>
                    <AssetInfoText className="detail">
                      {token.unique_owners > 999
                        ? Math.floor((token.unique_owners / 1000) * 10) / 10 +
                          "K"
                        : token.unique_owners}{" "}
                      user{token.unique_owners != 1 && "s"}
                    </AssetInfoText>
                  </AssetInfo>
                )
              )}
            </CardSection>
          </CardContent>
        </a>
      </div>
    </Card>
  );
};
