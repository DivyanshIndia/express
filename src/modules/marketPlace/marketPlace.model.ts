import mongoose, { Schema, Document } from "mongoose";

interface IMarketPlace extends Document {
  name: string;
  address: string;
  lat: number;
  long: number;
  photo: string;
  logo: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

const MarketPlaceSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  photo: { type: String },
  logo: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});
const marketPlace = mongoose.model<IMarketPlace>(
  "MarketPlace",
  MarketPlaceSchema
);

export const getMarketPlace = () => marketPlace.find();
export const getMarketPlaceByName = (name: string) =>
  marketPlace.findOne({ name });

export const createMarketPlace = (values: IMarketPlace) =>
  new marketPlace(values)
    .save()
    .then((marketP: IMarketPlace) => marketP.toObject());

export const deleteMarketPlaceByName = (name: string) =>
  marketPlace.findOneAndDelete({ name });

export const updateMarketPlaceByName = (name: string, values: IMarketPlace) =>
  marketPlace.findByIdAndUpdate(name, values, { new: true });
export default marketPlace;
