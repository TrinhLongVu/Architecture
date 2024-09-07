'use stricts'

import express from "express";
import {getAllUsersController, createUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController,getPlayerCount, getBrandsCount} from "../controllers/user.c.js"
import { 
    addUserFavoriteEventController, 
    getAllFavoriteUsersController, 
    getNumberOfFavoriteUsersController, 
    unfavoriteEventController, 
    getUserFavoriteEventController 
  } from '../controllers/favorite.c.js';

const router = express.Router();

router.get("/users/", getAllUsersController);
router.post("/users/new", createUserController);
router.get("/users/info/:id",getUserByIdController);
router.put("/users/edit/:id", updateUserByIdController);
router.delete("/users/:id", deleteUserByIdController);
router.get('/users/players-count', getPlayerCount);
router.get('/users/brands-count', getBrandsCount);

// Route to add a user's favorite event
router.post('/favorite', addUserFavoriteEventController);

// Route to get all users who favorited an event
router.get('/favorite/users/:ID_SUKIEN', getAllFavoriteUsersController);

// Route to get the number of users who favorited an event
router.get('/favorite/count/:ID_SUKIEN', getNumberOfFavoriteUsersController);

// Route to get a user's favorite event
router.get('/favorite/:ID_NGUOIDUNG', getUserFavoriteEventController);

// Route to unfavorite an event
router.put('/favorite/unfavorite', unfavoriteEventController);
  
export default router;

