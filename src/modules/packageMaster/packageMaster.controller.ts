import express from "express";
import {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackageById,
  deletePackageById,
} from "./packageMaster.model"; // Update the path as per your project structure

// Controller functions

// Get all packages
export const getAllPackagesController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const packages = await getAllPackages();
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Get package by ID
export const getPackageByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const getpackage = await getPackageById(req.params.id);
    if (!getpackage) {
      return res.status(404).send("Package not found");
    }
    res.json(getpackage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Create a new package
export const createPackageController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const packageData = req.body;
    const newPackage = await createPackage(packageData);
    res.status(201).json(newPackage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Update package by ID
export const updatePackageController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedPackage = await updatePackageById(req.params.id, req.body);
    if (!updatedPackage) {
      return res.status(404).send("Package not found");
    }
    res.json(updatedPackage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Delete package by ID
export const deletePackageController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await deletePackageById(req.params.id);
    res.status(204).send("Deleted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
