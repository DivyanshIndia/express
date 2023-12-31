// controllers/userController.js

import express from "express";
import * as userDb from "./users.model";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await userDb.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await userDb.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const createUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userData = req.body;
    const newUser = await userDb.createUser(userData);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    await userDb.deleteUserById(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    const updatedUser = await userDb.updateUserById(id, userData);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
