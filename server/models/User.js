import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 2, max: 100 },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true, min: 5 },
    city: String,
    state: String,
    country: String,
    occupation: String,
    transactions: Array,
    phoneNumber: String,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("User", User);
