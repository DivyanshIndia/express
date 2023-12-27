import express from "express";
import crud from "./add";
import categories from "modules/categories/categories.route";
const router = express.Router();

export default (): express.Router => {
  categories(router)
  crud(router);
  return router;
};
