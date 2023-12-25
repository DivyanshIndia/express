import express from "express";
import crud from "./add";
const router = express.Router();

export default (): express.Router => {
    crud(router)
  return router;
};
