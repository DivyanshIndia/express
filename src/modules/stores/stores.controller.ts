import express from "express";
import Stores, {
  getStores,
  getStoreById,
  createStore,
  updateStoreById,
  deleteStoreById,
} from "./stores.model";

// Controller Functions

// Function to find nearby stores
export const getNearbyStores = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { lat, long, radius } = req.query;

    if (!lat || !long || !radius) {
      return res
        .status(400)
        .send("Latitude, longitude, and radius are required");
    }

    const parsedLat = parseFloat(lat as string);
    const parsedLong = parseFloat(long as string);
    const parsedRadius = parseFloat(radius as string);

    if (isNaN(parsedLat) || isNaN(parsedLong) || isNaN(parsedRadius)) {
      return res.status(400).send("Invalid latitude, longitude, or radius");
    }

    const nearbyStores = await Stores.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [parsedLong, parsedLat],
          },
          $maxDistance: parsedRadius,
        },
      },
    });

    res.json(nearbyStores);
  } catch (error) {
    console.error("Error fetching nearby stores:", error);
    res.status(500).send("Server error");
  }
};

export const getAllStores = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const stores = await getStores();
    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const getStore = async (req: express.Request, res: express.Response) => {
  try {
    const store = await getStoreById(req.params.id);
    if (!store) {
      return res.status(404).send("Store not found");
    }
    res.json(store);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const createStoreController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newStore = await createStore(req.body);
    res.status(201).json(newStore);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const updateStoreController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedStore = await updateStoreById(req.params.id, req.body);
    if (!updatedStore) {
      return res.status(404).send("Store not found");
    }
    res.json(updatedStore);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const deleteStoreController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await deleteStoreById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
