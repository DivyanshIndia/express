import express from 'express';
import {
  getAllRedemptionsController,
  getRedemptionByIdController,
  createRedemptionController,
  updateRedemptionController,
  deleteRedemptionController
} from './promotionRedemption.controller'

export default (router: express.Router) => {
  // Route to get all redemptions
  router.get('/redemptions', getAllRedemptionsController);

  // Route to get a single redemption by ID
  router.get('/redemptions/:id', getRedemptionByIdController);

  // Route to create a new redemption
  router.post('/redemptions', createRedemptionController);

  // Route to update a redemption by ID
  router.put('/redemptions/:id', updateRedemptionController);

  // Route to delete a redemption by ID
  router.delete('/redemptions/:id', deleteRedemptionController);
};
