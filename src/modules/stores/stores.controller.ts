import express from 'express';
import {
  getStores,
  getStoreById,
  createStore,
  updateStoreById,
  deleteStoreById
} from './stores.model'

// Controller Functions

export const getAllStores = async (req: express.Request, res: express.Response) => {
  try {
    const stores = await getStores();
    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const getStore = async (req: express.Request, res: express.Response) => {
  try {
    const store = await getStoreById(req.params.id);
    if (!store) {
      return res.status(404).send('Store not found');
    }
    res.json(store);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const createStoreController = async (req: express.Request, res: express.Response) => {
  try {
    const newStore = await createStore(req.body);
    res.status(201).json(newStore);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const updateStoreController = async (req: express.Request, res: express.Response) => {
  try {
    const updatedStore = await updateStoreById(req.params.id, req.body);
    if (!updatedStore) {
      return res.status(404).send('Store not found');
    }
    res.json(updatedStore);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const deleteStoreController = async (req: express.Request, res: express.Response) => {
  try {
    await deleteStoreById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
