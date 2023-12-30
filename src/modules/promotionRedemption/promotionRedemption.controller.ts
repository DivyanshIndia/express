import express from "express";
import {
  getAllRedemptions,
  getRedemptionById,
  createRedemption,
  updateRedemptionById,
  deleteRedemptionById,
} from "./promotionRedemption.model"; 

// Controller functions

export const getAllRedemptionsController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const redemptions = await getAllRedemptions();
    res.json(redemptions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const getRedemptionByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const redemption = await getRedemptionById(req.params.id);
    if (!redemption) {
      return res.status(404).send("Redemption not found");
    }
    res.json(redemption);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const createRedemptionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newRedemption = await createRedemption(req.body);
    res.status(201).json(newRedemption);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const updateRedemptionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedRedemption = await updateRedemptionById(
      req.params.id,
      req.body
    );
    if (!updatedRedemption) {
      return res.status(404).send("Redemption not found");
    }
    res.json(updatedRedemption);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const deleteRedemptionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await deleteRedemptionById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
