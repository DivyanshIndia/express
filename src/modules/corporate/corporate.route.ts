import express from "express";

import {
  getAllCorporates,
  getCorporate,
  createCorporateController,
  deleteCorporate,
  updateCorporate,
} from "./corporate.controller";

export default (router: express.Router) => {
  router.get("/corporate", getAllCorporates),
    router.get("/corporate/:id", getCorporate),
    router.post("/corporate", createCorporateController),
    router.delete("/corporate/:id", deleteCorporate),
    router.put("/corporate/:id", updateCorporate);
};
