import { generatenanoId } from "../utils/helper.js";
import { SaveShortUrl } from "../DAO/short_url.js";

export const shortUrlservicewithoutUser = (url) => {
    const shortUrl = generatenanoId(7);
  await SaveShortUrl(shortUrl, url);
  return shortUrl;
}

export const shortUrlservicewithUser = (url, userId) => {
    const shortUrl = generatenanoId(7);
  await SaveShortUrl(shortUrl, url, userId);
  return shortUrl;
}