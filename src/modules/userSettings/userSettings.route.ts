import express from "express";
import {
  getUserSettingsController,
  getUserSettingsByIdController,
  createUserSettingsController,
  updateUserSettingsController,
  deleteUserSettingsController,
} from "./userSettings.controller";

export default (router: express.Router) => {
  // Route to get all user settings
  router.get("/userSettings", getUserSettingsController);

  // Route to get a single user setting by ID
  router.get("/userSettings/:id", getUserSettingsByIdController);

  // Route to create new user settings
  router.post("/userSettings", createUserSettingsController);

  // Route to update user settings by ID
  router.put("/userSettings/:id", updateUserSettingsController);

  // Route to delete user settings by ID
  router.delete("/userSettings/:id", deleteUserSettingsController);
};
