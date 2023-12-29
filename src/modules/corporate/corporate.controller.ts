import express from "express";
import {
  getCorporates,
  getCorporateById,
  createCorporate,
  deleteCorporateById,
  updateCorporateById,
} from "./corporate.model";

export const getAllCorporates = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const corporates = await getCorporates();
    res.status(200).json(corporates);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getCorporate = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const corporate = await getCorporateById(id);

    if (!corporate) {
      return res.status(404).json({ message: "Corporate not found" });
    }
    res.status(200).json(corporate);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const createCorporateController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const corporateData = req.body;
    const newCorporate = await createCorporate(corporateData);

    res.status(201).json(newCorporate);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const deleteCorporate = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    await deleteCorporateById(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const updateCorporate = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const corporateData = req.body;

    const updatedCorporate = await updateCorporateById(id, corporateData);

    if (!updatedCorporate) {
      return res.status(404).json({ message: "Corporate not found" });
    }

    res.status(200).json(updatedCorporate);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
