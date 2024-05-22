import user from "../models/userModel.js";
import express from "express";


const app = express();

export const UserLogIn = (req, res) => {
  const { email, password } = req.body;
  console.log(`\nE-mail:${email} Just tried to login...\n`);

  user.findOne({
    where: {
      email: email,
      password: password,
    },
  }).then((data) => {
    if (data) {
      console.log(`Login successful...\n`);
      res.json(data.toJSON());
    } else {
      res.json("email or password is incorrect");
    }
  }); 
}



export const RegisterUser = (req, res) => {
  const { name, email, password, role } = req.body;
  /////// this is a way to inseart data into database////
let userRole = role || "0";
  if (!name.length || !email.length || !password.length) {
    res.json("fill all the fields"); //res.json() is used to send json data from server to client
  } else {
    user.create({
      name: name,
      email: email,
      password: password,
      role: userRole,

    })
      .then((data) => {
        res.json(data.toJSON());
      })
      .catch((err) => {
        console.log(`The returned value: ${err}`);
        // if (err?.detail?.includes("already exists")) {
        res.json("email already exists");
      });
  }
};
