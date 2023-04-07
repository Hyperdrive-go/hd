import { siteConfig } from "./common/config";
import { ethers } from "ethers";

// This list should match backend ActivityType model
export const activityEventRegistry = {
  Mint: "MI",
  Sale: "SA",
  Transfer: "TR",
  Offer: "OF",
  List: "LI",
  Burn: "BU",
  Airdrop: "AD",
  Bridge: "BR",
};

export async function fetchProfile(handle) {
  try {
    const url = `${
      siteConfig.BACKEND_URL
    }/api/profile/${handle}/`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${siteConfig.BACKEND_TOKEN}`,
      },
    });

    const responseJson = await res.json();
    return responseJson;
  } catch (e: any) {
    return null;
  }
}

export async function fetchProfileCollections(address) {
  const url = `${siteConfig.BACKEND_URL}/api/profile/${address}/collections/`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${siteConfig.BACKEND_TOKEN}`,
    },
  });

  if (res.status < 400) {
    const responseJson = await res.json();
    return responseJson;
  } else {
    return null;
  }
}

let activityController = null;
export async function fetchProfileFilteredActivity(
  address,
  sort,
  collections,
  events,
  minPrice,
  maxPrice,
  paymentToken,
  chains
) {
  const sort_string = "&activity_sort=" + sort;
  const collections_string = collections
    .map((collection) => `collection=${collection}`)
    .join("&");
  const events_string =
    events.length > 0
      ? "&" +
        events
          .map(
            (event) =>
              `event=${encodeURIComponent(activityEventRegistry[event])}`
          )
          .join("&")
      : "";
  const price_string =
    minPrice || maxPrice
      ? "&price=" +
        (minPrice ? ethers.utils.parseUnits(minPrice, "gwei") : 0) +
        (maxPrice && ":" + ethers.utils.parseUnits(maxPrice, "gwei"))
      : "";
  const chains_string =
    "&" + chains.map((chain) => `chain=${encodeURIComponent(chain)}`).join("&");
  const currency_string = paymentToken ? "&currency=" + paymentToken : "";

  const url = `${siteConfig.BACKEND_URL}/api/profile/${address}/activity/?${collections_string}${sort_string}${events_string}${chains_string}${price_string}${currency_string}`;

  if (activityController) activityController.abort();
  activityController = new AbortController();
  const signal = activityController.signal;

  try {
    const res = await fetch(url, {
      signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${siteConfig.BACKEND_TOKEN}`,
      },
    });

    if (res.status < 400) {
      const responseJson = await res.json();
      return responseJson;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

let tokensController = null;
let erc721TokensController = null;
let erc1155TokensController = null;
export async function fetchProfileFilteredTokens(
  address,
  collections,
  availability,
  sort,
  minPrice,
  maxPrice,
  paymentToken,
  chains,
  searchQuery,
  erc721 = false,
  erc1155 = false
) {
  const collections_string = collections
    .map((collection) => `collection=${collection}`)
    .join("&");
  const availability_string = "&availability=" + availability;
  const sort_string = "&sort=" + sort;
  const price_string =
    minPrice || maxPrice
      ? "&price=" +
        (minPrice ? ethers.utils.parseUnits(minPrice, "gwei") : 0) +
        (maxPrice && ":" + ethers.utils.parseUnits(maxPrice, "gwei"))
      : "";
  const currency_string = paymentToken ? "&currency=" + paymentToken : "";
  const chains_string =
    "&" + chains.map((chain) => `chain=${encodeURIComponent(chain)}`).join("&");
  const query_string = "&query=" + searchQuery;

  const url = `${siteConfig.BACKEND_URL}/api/profile/${address}/${
    erc721 ? "erc721tokens" : erc1155 ? "erc1155tokens" : "tokens"
  }/?${collections_string}${availability_string}${sort_string}${chains_string}${price_string}${query_string}${currency_string}`;

  let signal;
  if (erc721) {
    if (erc721TokensController) erc721TokensController.abort();
    tokensController = new AbortController();
    signal = tokensController.signal;
  } else if (erc1155) {
    if (erc1155TokensController) erc1155TokensController.abort();
    erc1155TokensController = new AbortController();
    signal = erc1155TokensController.signal;
  } else {
    if (tokensController) tokensController.abort();
    tokensController = new AbortController();
    signal = tokensController.signal;
  }

  try {
    const res = await fetch(url, {
      signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${siteConfig.BACKEND_TOKEN}`,
      },
    });

    if (res.status < 400) {
      const responseJson = await res.json();
      return responseJson;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function featureToken(
  profile_address,
  collection_address,
  token_id
) {
  const url = `${siteConfig.BACKEND_URL}/api/profile/${profile_address}/feature-token/`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${siteConfig.BACKEND_TOKEN}`,
    },
    body: JSON.stringify({ collection_address, token_id }),
  });

  if (res.status < 400) {
    return true;
  } else {
    return null;
  }
}

export async function hideToken(profile_address, collection_address, token_id) {
  const url = `${siteConfig.BACKEND_URL}/api/profile/${profile_address}/hide-token/`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${siteConfig.BACKEND_TOKEN}`,
    },
    body: JSON.stringify({ collection_address, token_id }),
  });

  if (res.status < 400) {
    return true;
  } else {
    return null;
  }
}