import e from "express";
import { createShorturl } from "../controller/shortUrl.controller.js";

const router = e.Router();

router.post("/", createShorturl);

export default router;
