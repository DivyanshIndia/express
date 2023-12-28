// models/User.js
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  role: "User" | "Store manager" | "Admin" | "Super Admin";
  photo: string;
  status: "active" | "inactive";
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, maxlength: 150 },
  phone: { type: String, maxlength: 15 },
  role: {
    type: String,
    enum: ["User", "Store manager", "Admin", "Super Admin"],
    required: true,
  },
  photo: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  deleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const User = mongoose.model<IUser>("User", UserSchema);

// CRUD Operations

// Get all users
export const getUsers = async () => {
  return await User.find({ deleted: false });
};

// Get a user by ID
export const getUserById = async (id: string) => {
  return await User.findOne({ _id: id, deleted: false });
};

// Create a new user
export const createUser = async (userData: IUser) => {
  const user = new User(userData);
  return await user.save();
};

// Soft delete a user by ID
export const deleteUserById = async (id: string) => {
  return await User.findByIdAndUpdate(id, { deleted: true }, { new: true });
};

// Update a user by ID
export const updateUserById = async (id: string, userData: IUser) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

export default User;
