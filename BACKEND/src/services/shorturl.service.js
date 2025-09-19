import { generatenanoId } from "../utils/helper.js";
import ShortUrl from "../config/models/shorturl.model.js";

export const shortUrlservice = (url) => {
    const shortUrl = generatenanoId(7);
    const newUrl = new ShortUrl({
    full: url,
    short: shortUrl,
  });
  newUrl.save();
  return shortUrl;
}