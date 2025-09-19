import ShortUrl from "../config/models/shorturl.model";

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
