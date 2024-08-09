import express from "express"
import {getUserById, getAllUsers} from "../services/user.s.js"

const router = express.Router();

const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsers();
      if (users) {
        //console.log(users);
        res.status(200).json(users); // OK
      } else {
        res.status(404).json({ message: 'No users found' }); // Not Found
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Internal Server Error
    }
  };

export {getAllUsersController};