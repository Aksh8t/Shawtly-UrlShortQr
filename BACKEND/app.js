import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDb from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import { RedirectfromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors";
import auth_routes from "./src/routes/auth.routes.js";
import user_routes from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config("./.env");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/create", shortUrl);
app.get("/:id", RedirectfromShortUrl);
app.use("/api/user", user_routes);
app.use("/api/auth", auth_routes);

app.use(errorHandler);

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});

export default app;
