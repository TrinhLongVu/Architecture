'use stricts'

import express from "express";
import {getAllUsersController, createUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController,getPlayerCount, getBrandsCount} from "../controllers/user.c.js"
import { 
    addUserFavoriteEventController, 
    getAllFavoriteUsersController, 
    getNumberOfFavoriteUsersController, 
    unfavoriteEventController, 
    getUserFavoriteEventController,
    getTopFavoritedEvents
  } from '../controllers/favorite.c.js';

  import {
    createVoucherUser,
    getAllVoucherUsers,
    getVoucherUserById,
    updateVoucherUser,
    deleteVoucherUser,
    spendVoucher,
    updateVoucherStatus,
    getVoucherUserByUserIdController
  } from '../controllers/voucher.c.js';

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

//Route to select the top 4 most favorited events
router.get('/favorite/event/top4', getTopFavoritedEvents);

router.post('/voucher', createVoucherUser);
router.get('/voucher', getAllVoucherUsers);
router.get('/voucher/:idNguoiDung', getVoucherUserByUserIdController);
router.get('/voucher/:idNguoiDung/:idVoucher', getVoucherUserById);
router.put('/voucher/:idNguoiDung/:idVoucher', updateVoucherUser);
router.delete('/voucher/:idNguoiDung/:idVoucher', deleteVoucherUser);
router.post('/voucher/:idNguoiDung/:idVoucher/spend', spendVoucher);
router.put('/voucher/:idNguoiDung/:idVoucher/update-status', updateVoucherStatus);
  
export default router;

