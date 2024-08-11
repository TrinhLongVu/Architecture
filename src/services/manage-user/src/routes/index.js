'use stricts'

import express from "express";
import {getAllUsersController, createUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController} from "../controllers/user.c.js"

const router = express.Router();

//router.get("/", (req, res) => {
//    const data = {
//        "hi": "hello"
//    }
//    res.send(JSON.stringify(data))
//})

router.get("/users/", getAllUsersController);
router.post("/users/new", createUserController);
router.get("/users/info/:id",getUserByIdController);
router.put("/users/edit/:id", updateUserByIdController);
router.delete("/users/:id", deleteUserByIdController);

    
//router.post('/signup', asyncHandler(authenticateController.signUp))
//router.post('/login', asyncHandler(authenticateController.login))
//router.post("/generate-otp", asyncHandler(authenticateController.genOtp));
//router.post("/verify-otp", asyncHandler(authenticateController.verifyOtp));
//router.post("/change-password", asyncHandler(authenticateController.forgotPassword));
  
export default router;

