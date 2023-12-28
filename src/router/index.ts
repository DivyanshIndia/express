import express from "express";
import categories from "../modules/categories/categories.route";
import corporate from "../modules/corporate/corporate.route";
import marketPlace from "../modules/marketPlace/marketPlace.route";
import packageMaster from "../modules/packageMaster/package.route";
import promotionRedemption from "../modules/promotionRedemption/promotionRedemption.route";
import promotions from "../modules/promotions/promotions.route";
import storeCategories from "../modules/storeCategories/storeCategories.route";
import storeManager from "../modules/storeManager/storeManager.route";
import stores from "../modules/stores/stores.route";
import transactions from "../modules/transactions/transactions.route";
import users from "../modules/users/users.route";
import userSettings from "../modules/userSettings/userSettings.route";

const router = express.Router();

export default (): express.Router => {
  categories(router);
  corporate(router);
  marketPlace(router);
  packageMaster(router);
  promotionRedemption(router);
  promotions(router);
  storeCategories(router);
  storeManager(router);
  stores(router);
  transactions(router);
  users(router);
  userSettings(router);


  return router;
};
