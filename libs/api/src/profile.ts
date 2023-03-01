import { siteConfig } from "./common/config";

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