import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDb from "./src/config/mongo.config.js";
import ShortUrl from "./src/config/models/shorturl.model.js";

dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/api/create", (req, res) => {
  const url = req.body.url;
  const shortUrl = nanoid(7);
  const newUrl = new ShortUrl({
    full: url,
    short: shortUrl,
  });
  newUrl.save();
  res.send(nanoid(7));
});

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});

export default app;
