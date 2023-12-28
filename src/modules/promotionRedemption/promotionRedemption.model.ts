import mongoose from 'mongoose';

interface IPromotionRedemption extends mongoose.Document {
  promotionId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  redemptionTime: Date;
  used: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PromotionRedemptionSchema = new mongoose.Schema({
  promotionId: { type: mongoose.Schema.Types.ObjectId, ref: "Promotions", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  redemptionTime: { type: Date, required: true },
  used: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const PromotionRedemption = mongoose.model<IPromotionRedemption>("PromotionRedemption", PromotionRedemptionSchema);

// CRUD Functions

export const getAllRedemptions = () => PromotionRedemption.find();

export const getRedemptionById = (id: string) => PromotionRedemption.findById(id);

export const createRedemption = (redemptionData: IPromotionRedemption) => 
  new PromotionRedemption(redemptionData).save();

export const updateRedemptionById = (id: string, redemptionData: Partial<IPromotionRedemption>) => 
  PromotionRedemption.findByIdAndUpdate(id, redemptionData, { new: true });

export const deleteRedemptionById = (id: string) => PromotionRedemption.findByIdAndDelete(id);

export default PromotionRedemption;
