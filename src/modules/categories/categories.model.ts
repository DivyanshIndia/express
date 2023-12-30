import mongoose, { Schema, Document } from "mongoose";

interface ICategories extends Document {
  name: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

const CategoriesSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

const Categories = mongoose.model<ICategories>("Categories", CategoriesSchema);

export default Categories;

export const getCategories = () => Categories.find();
export const getCategoryById = (id: string) => Categories.findOne({ _id: id });

export const deleteCategoryById = (id: string) =>
  Categories.findByIdAndDelete({ _id: id });

export const createNewCategory = (values: ICategories) =>
  new Categories(values)
    .save()
    .then((categories: ICategories) => categories.toObject());

export const updateCategoryById = (id: string, values: ICategories) =>
  Categories.findByIdAndUpdate(id, values, { new: true });
