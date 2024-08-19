import { createUser, getUserById, getAllUsers, updateUserById, deleteUserById } from "../services/user.s.js"
import { sendMessage } from "../utils/MessageQueue/producer.js";

export const createUserController = async (req, res) => {
    try {
      const userData = req.body;
      console.log(userData);
      const newUser = await createUser(userData);
      if(userData.VAITRO === "Brand"){
        sendMessage("brand_queue",JSON.stringify(newUser));
      }
      
      res.status(201).json(newUser); // Created
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Internal Server Error
    }
  };
  
  // Controller to get a user by ID
  export const getUserByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getUserById(id);
      if (user) {
        res.status(200).json(user); // OK
      } else {
        res.status(404).json({ message: 'User not found' }); // Not Found
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Internal Server Error
    }
  };
  
  // Controller to get all users
  export const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users); // OK
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Internal Server Error
    }
  };
  
  // Controller to update a user by ID
  export const updateUserByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updated = await updateUserById(id, updatedData);
      if (updated) {
        res.status(200).json({ message: 'User updated' }); // OK
      } else {
        res.status(404).json({ message: 'User not found' }); // Not Found
      }
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Internal Server Error
    }
  };
  
  // Controller to delete a user by ID
  export const deleteUserByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await deleteUserById(id);
      if (deleted) {
        res.status(200).json({ message: 'User deleted' }); // OK
      } else {
        res.status(404).json({ message: 'User not found' }); // Not Found
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Internal Server Error
    }
  };