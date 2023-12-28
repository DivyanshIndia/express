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

const corporate = mongoose.model<ICorporate>("Corporate", CorporateSchema);

export const getCorporates = () => corporate.find();
export const getCorporateById = (id: string) => corporate.findById(id);
export const getCorporateByName = (name: string) => corporate.findOne({ name });
export const getCorporateByEmail = (email: string) =>
  corporate.findOne({ email });
export const getCorporateByType = (type: string) => corporate.findOne({ type });

export const createCorporate = (values: ICorporate) =>
  new corporate(values).save().then((corp: ICorporate) => corp.toObject());

export const deleteCorporateById = (id: string) =>
  corporate.findByIdAndDelete({ _id: id });

export const deleteCorporateByName = (name: string) =>
  corporate.findOneAndDelete({ name: name });

export const deleteCorporateByEmail = (email: string) =>
  corporate.findOneAndDelete({ email: email });

export const updateCorporateByEmail = (email: string, values: ICorporate) =>
  corporate.findByIdAndUpdate(email, values, { new: true });

export const updateCorporateByName = (name: string, values: ICorporate) =>
  corporate.findByIdAndUpdate(name, values, { new: true });

export default corporate;
