import mongoose, { Schema, Document } from "mongoose";

// Define an enum for the 'role' field
enum UserRole {
  User = "User",
  StoreManager = "Store manager",
  Admin = "Admin",
  SuperAdmin = "Super Admin",
}

// Define an enum for the 'status' field
enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

// Define the User interface extending mongoose.Document
interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  photo?: string;
  status: UserStatus;
  deleted: number;
  createdAt: Date;
  updatedAt: Date;
}

// Create a Mongoose schema for the User entity
const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 150 },
    phone: { type: String, required: true, maxlength: 15 },
    role: { type: String, enum: Object.values(UserRole), required: true },
    photo: { type: String },
    status: { type: String, enum: Object.values(UserStatus), required: true },
    deleted: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

// Create and export the User model
const User = mongoose.model<IUser>("User", userSchema);

export const getUsers = () => User.find();
export const getUserByEmail = (email: string) => User.findOne({ email });
export const getUserByPhone = (phone: string) => User.findOne({ phone });
export const getUserById = (id: string) => User.findById(id);

export const createUser = (values: IUser) =>
  new User(values).save().then((user: IUser) => user.toObject());

export const deleteUserById = (id: string) =>
  User.findOneAndDelete({ _id: id });

export const deleteUserByEmail = (email: string) =>
  User.findOneAndDelete({ email: email });

export const updateUserByEmail = (email: string, values: IUser) =>
  User.findByIdAndUpdate(email, values, { new: true });

export default User;
