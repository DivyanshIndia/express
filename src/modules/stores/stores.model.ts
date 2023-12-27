import mongoose, { Schema, Document } from "mongoose";

interface IStores extends Document {
  name: string;
  address: string;
  phone: string;
  website: string;
  fax: string;
  email: string;
  lat: number;
  long: number;
  logo: string;
  status: "active" | "inactive";
  isCorporate: boolean;
  corporateId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const StoresSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  fax: { type: String },
  email: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  logo: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  isCorporate: { type: Boolean, default: false },
  corporateId: { type: mongoose.Schema.Types.ObjectId, ref: "Corporate" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<IStores>("Stores", StoresSchema);
