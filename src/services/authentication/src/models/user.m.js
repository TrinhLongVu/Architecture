'use strict'

import db from '../dbs/mysql.dbs.js'
import {
    handleDatabaseError
} from '../helpers/catch.error.js'

class UserModel {
    // get user by email. email is unique
    static async getUser({ email }) {
        const user = await db.query(`
            SELECT * 
            FROM TTNGUOIDUNGs
            WHERE EMAIL = ?`, [email]
        );
        return user[0];
    }

    // get user by id
    static async getUserById({ id }) {
        const user = await db.query(`
            SELECT * 
            FROM TTNGUOIDUNGs
            WHERE ID_TTNGUOIDUNG = ?`, [id]
        );
        return user[0];
    }
        
    // save user into database
    static async addUser({ email, fullname, password}) {
        const user = await db.query(`
            INSERT INTO TTNGUOIDUNGs (TENDANGNHAP, EMAIL, MATKHAU, AVATAR, VAITRO, TRANGTHAI, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [fullname, email, password, 'http://res.cloudinary.com/dupsdtrvy/image/upload/v1716131826/1716131820650.png', 'User', 'Active', new Date(), new Date()]
        ).catch(handleDatabaseError);
        if (user.affectedRows === 1)
            return true
        return false;
    }

    // update otp for user
    static async updateOtp({ otp, email, createAt }) {
        const user = await db.query(`
            UPDATE TTNGUOIDUNGs
            SET OTP = ?, CREATE_OTP = ?
            WHERE EMAIL = ?;`, [otp, createAt, email]
        ).catch(handleDatabaseError);
        if (user.affectedRows === 1)
            return true
        return false;
    }

    // if user verify otp success then user is activated
    static async activeUser({email}) {
        const user = await db.query(`
            UPDATE TTNGUOIDUNGs
            SET TRANGTHAI = ?
            WHERE EMAIL = ?;`, ["Active", email]
        ).catch(handleDatabaseError);
        if (user.affectedRows === 1)
            return true
        return false;
    }

    // update into user
    static async updateUser({ user }) {
        const update = await db.query(`
            UPDATE TTNGUOIDUNGs
            SET TENDANGNHAP = ?, AVATAR = ?
            WHERE EMAIL = ?;`, [user.fullname, user.avatar, user.email]
        ).catch(handleDatabaseError);
        if (update.affectedRows === 1)
            return true
        return false;
    }
    
    // update password user when user forgot password
    static async updatePassword({ email, password }) {
        const update = await db.query(`
            UPDATE TTNGUOIDUNGs
            SET MATKHAU = ?
            WHERE EMAIL = ?;`, [password, email]
        ).catch(handleDatabaseError);
        if (update.affectedRows === 1)
            return true
        return false;
    }
}

export default UserModel