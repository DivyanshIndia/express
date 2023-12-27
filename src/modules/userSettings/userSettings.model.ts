import mongoose, { Schema, Document } from "mongoose";

interface IUserSettings extends Document {
  userId: mongoose.Types.ObjectId;
  preferredCategories: string;
  radius: 100 | 200 | 300 | 400 | 500;
  createdAt: Date;
  updatedAt: Date;
}

const UserSettingsSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  preferredCategories: { type: String },
  radius: { type: Number, enum: [100, 200, 300, 400, 500], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<IUserSettings>(
  "UserSettings",
  UserSettingsSchema
);
