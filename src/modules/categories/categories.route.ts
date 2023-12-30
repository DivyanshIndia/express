import express from "express";
import {
  getAllCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} from "./categories.controller";

export default (router: express.Router) => {
  router.get("/categories", getAllCategories);
  router.get("/categories/:id", getCategory);

  router.post("/categories", createCategory);

  router.delete("/categories/:id", deleteCategory);

  router.put("/categories/:id", updateCategory);
};
