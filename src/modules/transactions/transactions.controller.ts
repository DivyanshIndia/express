
import express from 'express';
import * as transactionDb from './transactions.model';

export const getAllTransactions = async (req: express.Request, res: express.Response) => {
  try {
    const transactions = await transactionDb.getTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getTransaction = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const transaction = await transactionDb.getTransactionById(id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const createTransactionController = async (req: express.Request, res: express.Response) => {
  try {
    const transactionData = req.body;
    const newTransaction = await transactionDb.createTransaction(transactionData);

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const deleteTransaction = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    await transactionDb.deleteTransactionById(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const updateTransaction = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const transactionData = req.body;

    const updatedTransaction = await transactionDb.updateTransactionById(id, transactionData);

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
