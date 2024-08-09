import db from '../models/index.mjs';

// Create a new user
const createUser = async (userData) => {
    try {
      const newUser = await db.TTNGUOIDUNG.create(userData);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Get a user by ID
const getUserById = async (id) => {
    try {
      const user = await db.TTNGUOIDUNG.findByPk(id);
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  
  // Get all users
  const getAllUsers = async () => {
    try {
      const users = await db.TTNGUOIDUNG.findAll();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Update a user by ID
const updateUserById = async (id, updatedData) => {
    try {
      const [updated] = await db.TTNGUOIDUNG.update(updatedData, {
        where: { ID_TTNGUOIDUNG: id }
      });
      return updated;
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

// Delete a user by ID
const deleteUserById = async (id) => {
    try {
      const deleted = await db.TTNGUOIDUNG.destroy({
        where: { ID_TTNGUOIDUNG: id }
      });
      return deleted;
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
export { createUser, getUserById, getAllUsers, updateUserById, deleteUserById };
  
  
