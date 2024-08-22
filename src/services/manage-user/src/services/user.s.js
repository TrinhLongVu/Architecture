import db from '../models/index.mjs';
import bcrypt from 'bcrypt';

// Create a new user
const createUser = async (userData) => {
    try {
      const hashedPassword = await bcrypt.hash(userData.MATKHAU,10);
      console.log(hashedPassword);
      userData = {
        ...userData,
        MATKHAU: hashedPassword
      }
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
      const usersWithoutPassword = users.map(user => {
        const { MATKHAU, ...userWithoutPassword } = user.toJSON();
        return userWithoutPassword;
      });
      return usersWithoutPassword;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Update a user by ID
const updateUserById = async (id, updatedData) => {
    try {
      const hashedPassword = await bcrypt.hash(updatedData.MATKHAU,10);
      console.log(hashedPassword);
      updatedData = {
        ...updatedData,
        MATKHAU: hashedPassword
      }
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

  //get players count
  async function countPlayers() {
    try {
      const count = await db.TTNGUOIDUNG.count({
        where: { VAITRO: 'Player' },
      });
      return count;
    } catch (error) {
      throw new Error('Error counting players: ' + error.message);
    }
  }

    //get brands count
    async function countBrands() {
      try {
        const count = await db.TTNGUOIDUNG.count({
          where: { VAITRO: 'Brand' },
        });
        return count;
      } catch (error) {
        throw new Error('Error counting brands: ' + error.message);
      }
    }
  
export { createUser, getUserById, getAllUsers, updateUserById, deleteUserById, countPlayers, countBrands };
  
  
