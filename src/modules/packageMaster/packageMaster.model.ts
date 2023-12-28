import mongoose from 'mongoose';

interface IPackageMaster extends mongoose.Document {
  name: string;
  noOfPromotions: number;
  pricePerMonth: number;
  createdAt: Date;
  updatedAt: Date;
}

const PackageMasterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  noOfPromotions: { type: Number, required: true },
  pricePerMonth: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const PackageMaster = mongoose.model<IPackageMaster>("PackageMaster", PackageMasterSchema);

// CRUD Functions

// Get all packages
export const getAllPackages = () => PackageMaster.find();

// Get a single package by ID
export const getPackageById = (id: string) => PackageMaster.findById(id);

// Create a new package
export const createPackage = (packageData: IPackageMaster) => new PackageMaster(packageData).save();

// Update a package by ID
export const updatePackageById = (id: string, packageData: Partial<IPackageMaster>) => 
  PackageMaster.findByIdAndUpdate(id, packageData, { new: true });

// Delete a package by ID
export const deletePackageById = (id: string) => PackageMaster.findByIdAndDelete(id);

export default PackageMaster;
