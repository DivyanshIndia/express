import mongoose from 'mongoose';

interface IStoreManager extends mongoose.Document {
  storeId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const StoreManagerSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Stores", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

const StoreManager = mongoose.model<IStoreManager>("StoreManager", StoreManagerSchema);

// CRUD Functions

export const getStoreManagers = () => StoreManager.find();

export const getStoreManagerById = (id: string) => StoreManager.findById(id);

export const createStoreManager = (storeManagerData: IStoreManager) =>
  new StoreManager(storeManagerData).save();

export const updateStoreManagerById = (id: string, storeManagerData: Partial<IStoreManager>) =>
  StoreManager.findByIdAndUpdate(id, storeManagerData, { new: true });

export const deleteStoreManagerById = (id: string) => StoreManager.findByIdAndDelete(id);

export default StoreManager;
