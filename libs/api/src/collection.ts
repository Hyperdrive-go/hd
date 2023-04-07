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

export async function fetchCollection(address, networkId = null) {
  const url = `${siteConfig.BACKEND_URL}/api/collection/${address}/${
    networkId ? `?network=${networkId}` : ""
  }`;

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
export async function fetchCollectionFilteredActivity(
  address,
  sort,
  events,
  attributes,
  intersectAttributes,
  minPrice,
  maxPrice,
  paymentToken,
  chains
) {
  const sort_string = "&activity_sort=" + sort;
  const events_string = events
    .map((event) => `event=${encodeURIComponent(activityEventRegistry[event])}`)
    .join("&");
  const chains_string =
    "&" + chains.map((chain) => `chain=${encodeURIComponent(chain)}`).join("&");
  const attributes_string =
    "&" +
    attributes
      .map(
        (attribute) =>
          `attribute=${encodeURIComponent(
            attribute.trait_type
          )}:${encodeURIComponent(attribute.value)}`
      )
      .join("&");
  const intersect_attributes_string = intersectAttributes
    ? "&intersect_attributes=true"
    : "";
  const price_string =
    minPrice || maxPrice
      ? "&price=" +
        (minPrice ? ethers.utils.parseUnits(minPrice, "gwei") : 0) +
        (maxPrice && ":" + ethers.utils.parseUnits(maxPrice, "gwei"))
      : "";
  const currency_string = paymentToken ? "&currency=" + paymentToken : "";

  const url = `${siteConfig.BACKEND_URL}/api/collection/${address}/activity/?${events_string}${chains_string}${sort_string}${attributes_string}${intersect_attributes_string}${price_string}${currency_string}`;

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
export async function fetchCollectionFilteredTokens(
  address,
  attributes,
  intersectAttributes,
  availability,
  sort,
  minPrice,
  maxPrice,
  paymentToken,
  chains,
  searchQuery
) {
  const attributes_string = attributes
    .map(
      (attribute) =>
        `attribute=${encodeURIComponent(
          attribute.trait_type
        )}:${encodeURIComponent(attribute.value)}`
    )
    .join("&");
  const chains_string =
    "&" + chains.map((chain) => `chain=${encodeURIComponent(chain)}`).join("&");
  const intersect_attributes_string = intersectAttributes
    ? "&intersect_attributes=true"
    : "";
  const availability_string = "&availability=" + availability;
  const sort_string = "&sort=" + sort;
  const price_string =
    minPrice || maxPrice
      ? "&price=" +
        (minPrice ? ethers.utils.parseUnits(minPrice, "gwei") : 0) +
        (maxPrice && ":" + ethers.utils.parseUnits(maxPrice, "gwei"))
      : "";
  const currency_string = paymentToken ? "&currency=" + paymentToken : "";
  const query_string = "&query=" + searchQuery;

  const url = `${siteConfig.BACKEND_URL}/api/collection/${address}/tokens/?${attributes_string}${chains_string}${intersect_attributes_string}${availability_string}${sort_string}${price_string}${query_string}${currency_string}`;

  if (tokensController) tokensController.abort();
  tokensController = new AbortController();
  const signal = tokensController.signal;

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

export async function fetchCollectionAttributes(address) {
  const url = `${siteConfig.BACKEND_URL}/api/collection/${address}/attributes/`;

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