import express from 'express';
import {
  getAllStoreManagers,
  getStoreManager,
  createStoreManagerController,
  updateStoreManagerController,
  deleteStoreManagerController
} from './storeManager.controller'

export default (router: express.Router) => {
  // Route to get all store managers
  router.get('/storeManagers', getAllStoreManagers);

  // Route to get a single store manager by ID
  router.get('/storeManagers/:id', getStoreManager);

  // Route to create a new store manager
  router.post('/storeManagers', createStoreManagerController);

  // Route to update a store manager by ID
  router.put('/storeManagers/:id', updateStoreManagerController);

  // Route to delete a store manager by ID
  router.delete('/storeManagers/:id', deleteStoreManagerController);
};
