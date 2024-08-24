'use strict'

import {
    BadRequest,
    AuthRequest
} from '../core/error.response.js'

import userModel from '../models/user.m.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { generateOTP, getInfoData } from "../utils/index.js";
import sendDataFactory from '../controllers/repo/sendData.repo.js';
import redisDB from '../dbs/redis.dbs.js' 

class AuthenticateService {
    static signUp = async ({
        email,
        password
    }) => {
        const user = await userModel.getUser({ email })
        if (user) {
            throw new BadRequest("User already registered")
        }

        const passHash = await bcrypt.hash(password, 10)

        // get full name from email
        const fullname = email.split("@")[0]

        const newuser = await userModel.addUser({ email, fullname, password: passHash })

        if (!newuser) {
            throw new BadRequest("Error create user")
        }
        const client = await redisDB();

        await client.set(email, JSON.stringify({
            email,
            password: passHash
        }));

        const infoUser = await userModel.getUser({email})
        return {
            infoUser
        }
    }

    static logIn = async ({ email, password }) => {
        const user = await userModel.getUser({ email })
        console.log(user);
        if (user == undefined) {
            throw new BadRequest("User is not exits")
        }
        if (user.TRANGTHAI != "Active") {
            throw new AuthRequest("User is not active")
        }
        if (!bcrypt.compareSync(password, user.MATKHAU)) {
            throw new AuthRequest("Error Password")
        }
        // assign token.
        const token = jwt.sign(user, process.env.KEY_TOKEN, { expiresIn: '1h' }); 
        
        return {
            token: token,
            expiresIn: new Date(new Date().getTime() + 60 * 60 * 1000),
            user
        }
    }

    static genOtp = async ({ email }) => {
        // if email is not exits in cache then get from database (mysql)
        const user = await client.get(email)
        if (user == null) {
            user = await userModel.getUser({ email })
        }

        if (user == undefined) {
            throw new BadRequest("User is not exits")
        }

        // generate otp and send email
        const OTP = generateOTP();
        const createAt = new Date()

        await sendDataFactory.sendData('Mail').send({
            subject: `Your OTP`,
            text: `OTP code for verification is ${OTP} and valid until ${createAt + 60}`,
            to: email
        })

        const client = await redisDB.connect();

        const isUpdated = await userModel.updateOtp({
            otp: OTP,
            createAt,
            email
        })
        await client.set(email, {
            user,
            otp: OTP,
            createAt
        })

        if (!isUpdated) {
            throw new BadRequest("Save otp is failed")
        }
        return {
            otp: OTP,
            createAt,
        }
    }

    static verifyOtp = async ({email, otp}) => {
        let user = await userModel.getUser({ email })
        if (user == undefined) {
            throw new BadRequest("User is not exits")
        }

        if (otp != user.otp) {
            throw new AuthRequest("Verify otp failed");
        }

        if((user.create_otp.getSeconds() - new Date().getSeconds()) > 300) {
            throw new AuthRequest("Expired otp");
        }

        const isUpdated = await userModel.activeUser({ email })
        if (!isUpdated) {
            throw new BadRequest("Save otp is failed")
        }

        return getInfoData({
            fields: ['id', 'fullname', 'email'],
            object: user
        })
    }

    static changePassword = async ({email, newPassword}) => {
        let user = await userModel.getUser({ email })
        if (user == undefined) {
            throw new BadRequest("User is not exits")
        }
        const passHash = await bcrypt.hash(newPassword, 10)
        const isUpdated = await userModel.updatePassword({ email, password: passHash });

        if (!isUpdated) {
            throw new BadRequest("change password is failed")
        }

        return {}
    }

    static signUpAdmin = async ({email}) => {
        
    }

    static statistic = async ({ startDay, endDay }) => {
        return await userModel.statistic({startDay, endDay});
    } 
}

export default AuthenticateService