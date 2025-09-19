import ShortUrl from "../config/models/shorturl.model.js";

export const SaveShortUrl = async (shorturl, longurl, userId) => {
    const newurl = new ShortUrl({
        full: longurl,
        short: shorturl,
       
    });
    if (userId) {
        newurl.user = userId;
    }
    await newurl.save();
    return newurl;
};

export const findUrlfromshorturl = async (shorturl) => {
    const url = await ShortUrl.findOneAndUpdate({ short: shorturl }, { $inc: { clicks: 1 } });
    return url;
};