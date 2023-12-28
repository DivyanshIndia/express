import express from "express";
import {
  getStoreManagers,
  getStoreManagerById,
  createStoreManager,
  updateStoreManagerById,
  deleteStoreManagerById,
} from "./storeManager.model"

// Controller Functions

export const getAllStoreManagers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const managers = await getStoreManagers();
    res.json(managers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const getStoreManager = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const manager = await getStoreManagerById(req.params.id);
    if (!manager) {
      return res.status(404).send("StoreManager not found");
    }
    res.json(manager);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const createStoreManagerController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newManager = await createStoreManager(req.body);
    res.status(201).json(newManager);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const updateStoreManagerController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedManager = await updateStoreManagerById(
      req.params.id,
      req.body
    );
    if (!updatedManager) {
      return res.status(404).send("StoreManager not found");
    }
    res.json(updatedManager);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const deleteStoreManagerController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await deleteStoreManagerById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
