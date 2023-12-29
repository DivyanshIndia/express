import express from "express";
import {
  getCategories,
  getCategoryById,
  createNewCategory,
  deleteCategoryById,
  updateCategoryById,
} from "./categories.model";

export const getAllCategories = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const categories = await getCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const category = await getCategoryById(id);

    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const createCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const categoryData = req.body;
    const newCategory = await createNewCategory(categoryData);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const deleteCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    await deleteCategoryById(id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const updateCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const categoryData = req.body;

    const updatedCategory = await updateCategoryById(id, categoryData);

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
