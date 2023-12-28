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
    router.get("/corporate/:name", getCorporate),
    router.post("/addCorporate", createCorporateController),
    router.delete("/corporate/:name", deleteCorporate),
    router.put("/corporate/:name", updateCorporate);
};
