import mongoose from "mongoose";

const Pruduct = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Pruduct", Pruduct);
