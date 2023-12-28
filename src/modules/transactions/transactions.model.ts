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

const Transactions = mongoose.model<ITransactions>(
  "Transactions",
  TransactionsSchema
);

// Get all transactions
export const getTransactions = async () => {
  return await Transactions.find({});
};

// Get a transaction by ID
export const getTransactionById = async (id: string) => {
  return await Transactions.findById(id);
};

// Create a new transaction
export const createTransaction = async (transactionData: ITransactions) => {
  const transaction = new Transactions(transactionData);
  return await transaction.save();
};

// Delete a transaction by ID
export const deleteTransactionById = async (id: string) => {
  return await Transactions.findByIdAndDelete(id);
};

// Update a transaction by ID
export const updateTransactionById = async (id: string, transactionData: ITransactions) => {
  return await Transactions.findByIdAndUpdate(id, transactionData, {
    new: true,
  });
};

export default Transactions;
