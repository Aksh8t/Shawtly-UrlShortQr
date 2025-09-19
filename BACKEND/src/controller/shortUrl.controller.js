import { findUrlfromshorturl } from "../DAO/short_url.js";
import { shortUrlservicewithoutUser } from "../services/shorturl.service.js";

export const createShorturl = async (req, res) => {
  try {
    const url = req.body.url.trim();
    const newUrl = await shortUrlservicewithoutUser(url.trim());

    res.send(process.env.APP_URL.trim() + newUrl);
  } catch (err) {
    next(err);
  }
};

export const RedirectfromShortUrl = async (req, res) => {
  const { id } = req.params;
  const shortUrl = await findUrlfromshorturl(id);
  res.redirect(shortUrl.full);
};
