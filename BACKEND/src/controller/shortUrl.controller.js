import { shortUrlservice } from "../services/shorturl.service.js";

export const createShorturl = async (req, res) => {
  const url = req.body.url;
  const newUrl = await shortUrlservice(url);
    res.send(process.env.APP_URL + newUrl);
};
