import { findUrlfromshorturl } from "../DAO/short_url.js";
import {
  shortUrlservicewithoutUser,
  shortUrlservicewithUser,
} from "../services/shorturl.service.js";

export const createShorturl = async (req, res) => {
  const data = req.body;
  let shortUrl;
  if (req.user) {
    shortUrl = await shortUrlservicewithUser(data.url, req.user._id, data.slug);
  } else {
    shortUrl = await shortUrlservicewithoutUser(data.url);
  }
  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
};

export const RedirectfromShortUrl = async (req, res) => {
  const { id } = req.params;
  const shortUrl = await findUrlfromshorturl(id);
  res.redirect(shortUrl.full);
};
