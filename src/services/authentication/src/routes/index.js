'use stricts'

import express from "express";

const router = express.Router();

import authenticateController from '../controllers/auth.c.js'
import {asyncHandler} from '../helpers/catch.asyns.js'
    
router.post('/signup', asyncHandler(authenticateController.signUp))
router.post('/login', asyncHandler(authenticateController.login))
router.post("/generate-otp", asyncHandler(authenticateController.genOtp));
router.post("/verify-otp", asyncHandler(authenticateController.verifyOtp));
router.post("/change-password", asyncHandler(authenticateController.forgotPassword));
router.post("/statistic", asyncHandler(authenticateController.getStatistic));
  
export default router;

