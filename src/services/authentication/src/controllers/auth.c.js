'use strict'

import { Created, OK } from '../core/success.response.js'
import AuthenticateService from '../services/auth.service.js'

class AuthenticateController {
    signUp = async (req, res, next) => {
        new Created({
            message: 'Register success',
            data: await AuthenticateService.signUp(req.body)
        }).send(res)
    }
    login = async (req, res, next) => {
        new Created({
            message: 'Login success',
            data: await AuthenticateService.logIn(req.body)
        }).send(res)
    }
    genOtp = async (req, res, next) => {
        new OK({
            message: 'Generate opt success',
            data: await AuthenticateService.genOtp(req.body)
        }).send(res)
    }
    verifyOtp = async (req, res, next) => {
        new OK({
            message: 'Generate opt success',
            data: await AuthenticateService.verifyOtp(req.body)
        }).send(res)
    }
    forgotPassword = async (req, res, next) => {
        new OK({
            message: 'Change password success',
            data: await AuthenticateService.changePassword(req.body)
        }).send(res)
    } 
}

export default new AuthenticateController();