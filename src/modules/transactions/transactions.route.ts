// routes/transactionRoutes.js

import express from 'express';
import {
  getAllTransactions,
  getTransaction,
  createTransactionController,
  deleteTransaction,
  updateTransaction
} from "./transactions.controller"

export default (router: express.Router) => {
  // GET all transactions
  router.get('/transactions', getAllTransactions);

  // GET a specific transaction by ID
  router.get('/transactions/:id', getTransaction);

  // POST create a new transaction
  router.post('/transactions', createTransactionController);

  // DELETE a transaction by ID
  router.delete('/transactions/:id', deleteTransaction);

  // PUT update a transaction by ID
  router.put('/transactions/:id', updateTransaction);
};
