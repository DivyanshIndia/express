import mongoose, { Schema, Document } from "mongoose";

interface IStoreCategories extends Document {
  storeId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const StoreCategoriesSchema: Schema = new Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IStoreCategories>(
  "StoreCategories",
  StoreCategoriesSchema
);
