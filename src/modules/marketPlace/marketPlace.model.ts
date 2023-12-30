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

export default marketPlace;

export const getMarketPlaces = () => marketPlace.find();

export const getMarketPlaceById = (id: string) =>
  marketPlace.findOne({ _id: id });

export const createMarketPlace = (values: IMarketPlace) =>
  new marketPlace(values)
    .save()
    .then((marketP: IMarketPlace) => marketP.toObject());

export const deleteMarketPlaceById = (id: string) =>
  marketPlace.findByIdAndDelete({ _id: id });

export const updateMarketPlaceByID = (id: string, values: IMarketPlace) =>
  marketPlace.findByIdAndUpdate(id, values, { new: true });
