import express from "express";
import {
  getAllStores,
  getStore,
  createStoreController,
  updateStoreController,
  deleteStoreController,
  getNearbyStores,
} from "./stores.controller";

export default (router: express.Router) => {
  // Route to get all stores
  router.get("/stores", getAllStores);

  // Route to get a single store by ID
  router.get("/stores/:id", getStore);

  router.get("/nearby-stores", getNearbyStores);

  // Route to create a new store
  router.post("/stores", createStoreController);

  // Route to update a store by ID
  router.put("/stores/:id", updateStoreController);

  // Route to delete a store by ID
  router.delete("/stores/:id", deleteStoreController);
};
