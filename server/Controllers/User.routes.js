//something
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserController = express.Router();

const UserModel = require("../Models/User.model");

UserController.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const ipAddress = req.ip;
  await bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res.status(511).send("Please Try Again");
    }
    const user = await new UserModel({ email, password: hash, ipAddress });
    await user.save();
    return res
      .status(201)
      .send({ message: "Registration Successfull", user: user });
  });
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(404).send("Invalid Credentials");
  }
  const hashed_password = user.password;
  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      console.log("err:", err);
      return res.status(511).send("Please Try Again");
    }
    if (result) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.TOKEN_KEY
      );
      return res.status(200).send({ message: "Login Success", token: token });
    } else {
      return res.status(404).send("Invalid Credentials");
    }
  });
});

module.exports = UserController;
