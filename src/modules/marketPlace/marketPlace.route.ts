import express from "express";
import {
  getAllMarketPlaces,
  getMarketPlaces,
  createMarketPlaceController,
  deleteMarketPlace,
  updateMarketPlace,
} from "./marketPlace.controller";

export default (router: express.Router) => {
  router.get("/market-place", getAllMarketPlaces);
  router.get("market-place/:name", getMarketPlaces);

  router.post("/add-market-place", createMarketPlaceController);

  router.delete("/market-place/:name", deleteMarketPlace);
  router.put("/market-place/:name", updateMarketPlace);
};
