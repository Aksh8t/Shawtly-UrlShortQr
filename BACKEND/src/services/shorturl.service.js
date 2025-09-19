import { generatenanoId } from "../utils/helper.js";
import { SaveShortUrl } from "../DAO/short_url.js";

export const shortUrlservicewithoutUser = async (url) => {
  const shortUrl = generatenanoId(7);
  await SaveShortUrl(shortUrl, url);
  return shortUrl;
};

export const shortUrlservicewithUser = async (url, userId) => {
  const shortUrl = generatenanoId(7);
  await SaveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
