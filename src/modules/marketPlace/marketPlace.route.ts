import express from "express";
import {
  getAllMarketPlaces,
  getMarketPlace,
  createMarketPlaceController,
  deleteMarketPlace,
  updateMarketPlace,
} from "./marketPlace.controller";

export default (router: express.Router) => {
  router.get("/market-place", getAllMarketPlaces);
  router.get("/market-place/:id", getMarketPlace);

  router.post("/market-place", createMarketPlaceController);

  router.delete("/market-place/:id", deleteMarketPlace);
  router.put("/market-place/:id", updateMarketPlace);
};
