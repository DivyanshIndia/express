import express from "express";
import {
  getAllUsers,
  getUser,
  createUserController,
  deleteUser,
  updateUser,
} from "../controllers/user.model";

export default (router: express.Router) => {
  // GET all users
  router.get("/users", getAllUsers);

  // GET a specific user by ID
  router.get("/users/:id", getUser);

  // POST create a new user
  router.post("/addUser", createUserController);

  // DELETE a user by ID
  router.delete("/users/:id", deleteUser);

  // PUT update a user by ID
  router.put("/users/:id", updateUser);
};
