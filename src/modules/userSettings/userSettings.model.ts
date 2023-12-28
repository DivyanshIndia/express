import mongoose from 'mongoose';

interface IUserSettings extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  preferredCategories: string;
  radius: 100 | 200 | 300 | 400 | 500;
  createdAt: Date;
  updatedAt: Date;
}

const UserSettingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  preferredCategories: { type: String },
  radius: { type: Number, enum: [100, 200, 300, 400, 500], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const UserSettings = mongoose.model<IUserSettings>("UserSettings", UserSettingsSchema);

// CRUD Functions

export const getUserSettings = () => UserSettings.find();

export const getUserSettingsById = (id: string) => UserSettings.findById(id);

export const createUserSettings = (userSettingsData: IUserSettings) =>
  new UserSettings(userSettingsData).save();

export const updateUserSettingsById = (id: string, userSettingsData: Partial<IUserSettings>) =>
  UserSettings.findByIdAndUpdate(id, userSettingsData, { new: true });

export const deleteUserSettingsById = (id: string) => UserSettings.findByIdAndDelete(id);

export default UserSettings;
