const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateTokens");
const {registerUser , loginUser, logoutUser} = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("its user route");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);


module.exports = router;