import mongoose from "mongoose";

const AffiliateStat = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: { type: [mongoose.Types.ObjectId], ref: "Transaction" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("AffiliateStat", AffiliateStat);
