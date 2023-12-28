import express from 'express';
import {
  getUserSettings,
  getUserSettingsById,
  createUserSettings,
  updateUserSettingsById,
  deleteUserSettingsById
} from './userSettings.model'

// Controller functions

export const getUserSettingsController = async (req: express.Request, res: express.Response) => {
  try {
    const settings = await getUserSettings();
    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const getUserSettingsByIdController = async (req: express.Request, res: express.Response) => {
  try {
    const setting = await getUserSettingsById(req.params.id);
    if (!setting) {
      return res.status(404).send('UserSettings not found');
    }
    res.json(setting);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const createUserSettingsController = async (req: express.Request, res: express.Response) => {
  try {
    const newSetting = await createUserSettings(req.body);
    res.status(201).json(newSetting);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const updateUserSettingsController = async (req: express.Request, res: express.Response) => {
  try {
    const updatedSetting = await updateUserSettingsById(req.params.id, req.body);
    if (!updatedSetting) {
      return res.status(404).send('UserSettings not found');
    }
    res.json(updatedSetting);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const deleteUserSettingsController = async (req: express.Request, res: express.Response) => {
  try {
    await deleteUserSettingsById(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
