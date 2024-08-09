'use stricts'

import express from "express";
import {getAllUsersController} from "../controllers/user.c.js"

const router = express.Router();


import {asyncHandler} from '../helpers/catch.asyns.js'
import { json } from "sequelize";

//router.get("/", (req, res) => {
//    const data = {
//        "hi": "hello"
//    }
//    res.send(JSON.stringify(data))
//})

router.get("/users/", getAllUsersController)
    
//router.post('/signup', asyncHandler(authenticateController.signUp))
//router.post('/login', asyncHandler(authenticateController.login))
//router.post("/generate-otp", asyncHandler(authenticateController.genOtp));
//router.post("/verify-otp", asyncHandler(authenticateController.verifyOtp));
//router.post("/change-password", asyncHandler(authenticateController.forgotPassword));
  
export default router;

