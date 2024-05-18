import express from "express";
import path from "path";
import user from "../models/userModel.js";


import{
    UserLogIn,
    RegisterUser,
}from '../controllers/user-controller.js'

const UserRoutes = express.Router();
const __dirname = process.cwd()


UserRoutes.post('/login-user',UserLogIn)
UserRoutes.post('/register-user', RegisterUser)

export default UserRoutes;