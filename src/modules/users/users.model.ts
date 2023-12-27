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

export default mongoose.model<IUser>("User", UserSchema);
