import express from "express";
import {
  getMarketPlace,
  getMarketPlaceByName,
  createMarketPlace,
  deleteMarketPlaceByName,
  updateMarketPlaceByName,
} from "./marketPlace.model";

export const getAllMarketPlaces = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const marketPlaces = await getMarketPlace();
    res.status(200).json(marketPlaces);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getMarketPlaces = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.params;
    const marketPlace = await getMarketPlaceByName(name);

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
    const { name } = req.params;
    await deleteMarketPlaceByName(name);

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
  const { name } = req.params;
  const marketPlace = req.body;
  const updatedMarketPlace = await updateMarketPlaceByName(name, marketPlace);
};
