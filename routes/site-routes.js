import express from "express";
import path from "path"

 import {
    site,
    Home,
    login,
    register,
    HomeUser,
    HomeAdmin
 } from "../controllers/site-controller.js"
 
 const SiteRouter = express.Router();
 const __dirname = process.cwd()


 const intialpath = path.join(__dirname, './public/Welcome');


SiteRouter.use(express.static(intialpath));
SiteRouter.get('/',site);

  
const intialpathHome = path.join(__dirname, './public/Home');


SiteRouter.use(express.static(intialpathHome));
SiteRouter.get('/Home',Home);

const intialpathlogin = path.join(__dirname, './public/log-reg');


SiteRouter.use(express.static(intialpathlogin));
SiteRouter.get('/login',login);

const intialpathreg = path.join(__dirname, './public/log-res');


SiteRouter.use(express.static(intialpathreg));
SiteRouter.get('/register',register);


const intialpathHomeUser = path.join(__dirname, './public/Home-user');


SiteRouter.use(express.static(intialpathHomeUser));
SiteRouter.get('/Home-user',HomeUser);


const intialpathHomeAdmin = path.join(__dirname, './public/Home-admin');


SiteRouter.use(express.static(intialpathHomeAdmin));
SiteRouter.get('/Home-admin',HomeAdmin);

 export default SiteRouter;