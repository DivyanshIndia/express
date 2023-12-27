import mongoose, { Schema, Document } from "mongoose";

interface ICategories extends Document {
  name: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

const CategoriesSchema: Schema = new Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const Categories = mongoose.model<ICategories>("Categories", CategoriesSchema);

export default Categories;

export const getCategories = () => Categories.find();
export const getCategoryByName = (name: string) => Categories.findOne({ name });
export const getCategoryById = (id: string) => Categories.findOne({ _id: id });

export const deleteCategoryById = (id: string) =>
  Categories.findOneAndDelete({ _id: id });
export const deleteCategoryByName = (name: string) =>
  Categories.findOneAndDelete({ name: name });

export const createNewCategory = (values: ICategories) =>
  new Categories(values)
    .save()
    .then((category: ICategories) => category.toObject());

export const updateCategoryById = (id: string, values: ICategories) =>
  Categories.findByIdAndUpdate(id, values, { new: true });
