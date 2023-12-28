// routes/userRoutes.js

import express from 'express';
import {
  getAllUsers,
  getUser,
  createUserController,
  deleteUser,
  updateUser
} from './users.controller';

export default (router: express.Router) => {
  // GET all users
  router.get('/users', getAllUsers);

  // GET a specific user by ID
  router.get('/users/:id', getUser);

  // POST create a new user
  router.post('/users', createUserController);

  // DELETE a user by ID
  router.delete('/users/:id', deleteUser);

  // PUT update a user by ID
  router.put('/users/:id', updateUser);
};
