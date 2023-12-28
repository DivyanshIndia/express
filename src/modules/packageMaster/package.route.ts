import express from "express";
import {
  getAllPackagesController,
  getPackageByIdController,
  createPackageController,
  updatePackageController,
  deletePackageController,
} from "./packageMaster.controller"; // Update the path as per your project structure

export default (router: express.Router) => {
  // Route to get all packages
  router.get("/packages", getAllPackagesController);

  // Route to get a single package by ID
  router.get("/packages/:id", getPackageByIdController);

  // Route to create a new package
  router.post("/packages", createPackageController);

  // Route to update a package by ID
  router.put("/packages/:id", updatePackageController);

  // Route to delete a package by ID
  router.delete("/packages/:id", deletePackageController);
};
