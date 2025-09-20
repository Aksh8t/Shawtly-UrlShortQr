import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema(
  {
    full: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
  },
  { timestamps: true }
);
const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;
