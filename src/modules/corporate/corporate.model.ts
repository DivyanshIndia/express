import mongoose, { Schema, Document } from "mongoose";

interface ICorporate extends Document {
  name: string;
  address: string;
  website: string;
  fax: string;
  email: string;
  logo: string;
  type: "multiple" | "individual";
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

const CorporateSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
  fax: { type: String },
  email: { type: String, required: true },
  logo: { type: String },
  type: { type: String, enum: ["multiple", "individual"], required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<ICorporate>("Corporate", CorporateSchema);
