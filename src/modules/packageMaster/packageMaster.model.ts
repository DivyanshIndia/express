import mongoose, { Schema, Document } from "mongoose";

interface IPackageMaster extends Document {
  name: string;
  noOfPromotions: number;
  pricePerMonth: number;
  createdAt: Date;
  updatedAt: Date;
}

const PackageMasterSchema: Schema = new Schema({
  name: { type: String, required: true },
  noOfPromotions: { type: Number, required: true },
  pricePerMonth: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<IPackageMaster>(
  "PackageMaster",
  PackageMasterSchema
);
