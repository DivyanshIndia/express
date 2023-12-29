import express from "express";
import {
  getMarketPlaces,
  getMarketPlaceById,
  createMarketPlace,
  deleteMarketPlaceById,
  updateMarketPlaceByID,
} from "./marketPlace.model";

export const getAllMarketPlaces = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const marketPlaces = await getMarketPlaces();
    res.status(200).json(marketPlaces);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getMarketPlace = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const marketPlace = await getMarketPlaceById(id);

    if (!marketPlace) {
      return res.status(404).json({ message: "Market Place not found" });
    }

    res.status(200).json(marketPlace);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const createMarketPlaceController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const marketPlace = req.body;
    const newMarketPlace = await createMarketPlace(marketPlace);

    res.status(201).json(newMarketPlace);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const deleteMarketPlace = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    await deleteMarketPlaceById(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const updateMarketPlace = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const marketPlaceData = req.body;

    const updatedMarketPlace = await updateMarketPlaceByID(id, marketPlaceData);

    if (!updatedMarketPlace) {
      return res.status(404).json({ message: "Market Place not found" });
    }

    res.status(200).json(updatedMarketPlace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
