import path from 'path'
const __dirname = process.cwd()

export const site = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/Welcome" , "index.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const Home = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/Home" , "home.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const login = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/log-reg" , "login.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const register = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/log-reg" , "register.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const HomeUser = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/Home-user" , "home-user.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const HomeAdmin = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/Home-admin" , "home-admin.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}
