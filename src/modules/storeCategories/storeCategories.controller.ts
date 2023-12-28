import express from 'express';
import {
  getStoreCategories,
  getStoreCategoryById,
  createStoreCategory,
  updateStoreCategoryById,
  deleteStoreCategoryById
} from './storeCategories.model'
// Controller functions

export const getStoreCategoriesController = async (req: express.Request, res: express.Response) => {
  try {
    const categories = await getStoreCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const getStoreCategoryByIdController = async (req: express.Request, res: express.Response) => {
  try {
    const category = await getStoreCategoryById(req.params.id);
    if (!category) {
      return res.status(404).send('StoreCategory not found');
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const createStoreCategoryController = async (req: express.Request, res: express.Response) => {
  try {
    const newCategory = await createStoreCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const updateStoreCategoryController = async (req: express.Request, res: express.Response) => {
  try {
    const updatedCategory = await updateStoreCategoryById(req.params.id, req.body);
    if (!updatedCategory) {
      return res.status(404).send('StoreCategory not found');
    }
    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const deleteStoreCategoryController = async (req: express.Request, res: express.Response) => {
  try {
    await deleteStoreCategoryById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
