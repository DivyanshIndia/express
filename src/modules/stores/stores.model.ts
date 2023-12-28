import mongoose from "mongoose";

interface IStores extends mongoose.Document {
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

const StoresSchema = new mongoose.Schema({
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

const Stores = mongoose.model<IStores>("Stores", StoresSchema);

// CRUD Functions (as provided in the previous response)
export const getStores = () => Stores.find();

export const getStoreById = (id: string) => Stores.findById(id);

export const createStore = (storeData: IStores) => new Stores(storeData).save();

export const updateStoreById = (id: string, storeData: Partial<IStores>) =>
  Stores.findByIdAndUpdate(id, storeData, { new: true });

export const deleteStoreById = (id: string) => Stores.findByIdAndDelete(id);

export default Stores;
