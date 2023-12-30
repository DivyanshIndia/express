import express from "express";
import {
  getPromotions,
  getPromotionById,
  createPromotion,
  updatePromotionById,
  deletePromotionById,
} from "./promotions.model";

// Controller functions

export const getPromotionsController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const promotions = await getPromotions();
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const getPromotionByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const promotion = await getPromotionById(req.params.id);
    if (!promotion) {
      return res.status(404).send("Promotion not found");
    }
    res.json(promotion);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const createPromotionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newPromotion = await createPromotion(req.body);
    res.status(201).json(newPromotion);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const updatePromotionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedPromotion = await updatePromotionById(req.params.id, req.body);
    if (!updatedPromotion) {
      return res.status(404).send("Promotion not found");
    }
    res.json(updatedPromotion);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const deletePromotionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await deletePromotionById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
