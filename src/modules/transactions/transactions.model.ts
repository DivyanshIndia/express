import mongoose, { Schema, Document } from "mongoose";

interface ITransactions extends Document {
  txId: string;
  storeId: mongoose.Types.ObjectId;
  packageId: mongoose.Types.ObjectId;
  expireAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionsSchema: Schema = new Schema({
  txId: { type: String, required: true },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PackageMaster",
    required: true,
  },
  expireAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model<ITransactions>(
  "Transactions",
  TransactionsSchema
);
