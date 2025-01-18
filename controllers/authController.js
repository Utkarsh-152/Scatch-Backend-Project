const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateTokens");
const ownerModel = require("../models/owner-model");

module.exports.registerUser = async function (req, res) {
    try{
      let { email, password, fullname } = req.body;
      let user = await userModel.findOne({email});
      if(user){
            req.flash("error", "user already exists");
            return res.redirect("/");
      }  
      bcrypt.genSalt(10, function(err, salt){
          bcrypt.hash(password, salt, async function(err, hash){
              if(err) return res.send(err.message);
              else{
                  let user = await userModel.create({ 
                      password: hash, 
                      email, 
                      fullname
                  });
                  let token = generateToken(user);
                  res.cookie("token", token);
                  req.flash("success", "user created successfully");
                  res.redirect("/");
              }
          });
      });
  
    }
    catch(err){
      console.log(err.message);
    }
  }

module.exports.loginUser = async function (req, res) {
    let {email, password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user) { 
        req.flash("error", "Something went wrong, Try again"); 
        return res.redirect("/");
    }

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/shop");
        }
        else{
            req.flash("error", "email or password is incorrect");
            return res.redirect("/");
        }
    }); 

}

module.exports.logInAdmin = async function (req, res) {
    let {email, password} = req.body;
    
    if( email === "owner@mail.com" && password === "0000"){
        res.redirect("/owner/admin");
    }
    else{
        req.flash("error", "email or password is incorrect");
        return res.redirect("/owner/login");
    }

}

module.exports.logoutUser = async function (req, res) {
    res.cookie("token", "");
    res.redirect("/");
}

