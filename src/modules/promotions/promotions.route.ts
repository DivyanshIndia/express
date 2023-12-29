import express from "express";
import {
  getPromotionsController,
  getPromotionByIdController,
  createPromotionController,
  updatePromotionController,
  deletePromotionController,
} from "./promotions.controller"; // Update the path as per your project structure

export default (router: express.Router) => {
  // Route to get all promotions
  router.get("/promotions", getPromotionsController);

  // Route to get a single promotion by ID
  router.get("/promotions/:id", getPromotionByIdController);

  // Route to create a new promotion
  router.post("/promotions", createPromotionController);

  // Route to update a promotion by ID
  router.put("/promotions/:id", updatePromotionController);

  // Route to delete a promotion by ID
  router.delete("/promotions/:id", deletePromotionController);
};
