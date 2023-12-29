import express from "express";
import {
  getStoreCategoriesController,
  getStoreCategoryByIdController,
  createStoreCategoryController,
  updateStoreCategoryController,
  deleteStoreCategoryController,
} from "./storeCategories.controller";
export default (router: express.Router) => {
  // Route to get all store categories
  router.get("/storeCategories", getStoreCategoriesController);

  // Route to get a single store category by ID
  router.get("/storeCategories/:id", getStoreCategoryByIdController);

  // Route to create a new store category
  router.post("/storeCategories", createStoreCategoryController);

  // Route to update a store category by ID
  router.put("/storeCategories/:id", updateStoreCategoryController);

  // Route to delete a store category by ID
  router.delete("/storeCategories/:id", deleteStoreCategoryController);
};
