import mongoose, { Schema, Document } from "mongoose";

interface IPromotionRedemption extends Document {
  promotionId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  redemptionTime: Date;
  used: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PromotionRedemptionSchema: Schema = new Schema({
  promotionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Promotions",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  redemptionTime: { type: Date, required: true },
  used: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<IPromotionRedemption>(
  "PromotionRedemption",
  PromotionRedemptionSchema
);
