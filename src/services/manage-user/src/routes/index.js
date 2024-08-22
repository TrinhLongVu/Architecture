'use stricts'

import express from "express";
import {getAllUsersController, createUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController,getPlayerCount, getBrandsCount} from "../controllers/user.c.js"

const router = express.Router();

router.get("/users/", getAllUsersController);
router.post("/users/new", createUserController);
router.get("/users/info/:id",getUserByIdController);
router.put("/users/edit/:id", updateUserByIdController);
router.delete("/users/:id", deleteUserByIdController);
router.get('/users/players-count', getPlayerCount);
router.get('/users/brands-count', getBrandsCount);

//router.post('/signup', asyncHandler(authenticateController.signUp))
//router.post('/login', asyncHandler(authenticateController.login))
//router.post("/generate-otp", asyncHandler(authenticateController.genOtp));
//router.post("/verify-otp", asyncHandler(authenticateController.verifyOtp));
//router.post("/change-password", asyncHandler(authenticateController.forgotPassword));
  
export default router;

