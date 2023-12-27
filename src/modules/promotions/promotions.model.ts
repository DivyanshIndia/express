import mongoose, { Schema, Document } from "mongoose";

interface IPromotions extends Document {
  storeId: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  title: string;
  details: string;
  promoCode: string;
  offer: string;
  startTime: Date;
  endTime: Date;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const PromotionsSchema: Schema = new Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true, maxlength: 50 },
  details: { type: String, required: true },
  promoCode: { type: String, required: true, maxlength: 10 },
  offer: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<IPromotions>("Promotions", PromotionsSchema);
