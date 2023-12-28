import mongoose from 'mongoose';

interface IStoreCategories extends mongoose.Document {
  storeId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const StoreCategoriesSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Stores", required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories", required: true },
  createdAt: { type: Date, default: Date.now },
});

const StoreCategories = mongoose.model<IStoreCategories>("StoreCategories", StoreCategoriesSchema);

// CRUD Functions

export const getStoreCategories = () => StoreCategories.find();

export const getStoreCategoryById = (id: string) => StoreCategories.findById(id);

export const createStoreCategory = (storeCategoryData: IStoreCategories) =>
  new StoreCategories(storeCategoryData).save();

export const updateStoreCategoryById = (id: string, storeCategoryData: Partial<IStoreCategories>) =>
  StoreCategories.findByIdAndUpdate(id, storeCategoryData, { new: true });

export const deleteStoreCategoryById = (id: string) => StoreCategories.findByIdAndDelete(id);

export default StoreCategories;
