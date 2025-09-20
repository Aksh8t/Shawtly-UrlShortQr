import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import { RedirectfromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors";

const app = express();

dotenv.config("./.env");

app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", shortUrl);

app.get("/:id", RedirectfromShortUrl);

app.use(errorHandler);

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});

export default app;
