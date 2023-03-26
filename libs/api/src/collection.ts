import { siteConfig } from "./common/config";

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