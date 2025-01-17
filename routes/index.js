const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  let error =  req.flash("error");
  res.render("index", { error, loggedIn: false });
});

router.get("/shop", isLoggedIn, async (req, res) => {
  let product = await productModel.find();
  let success = req.flash("success");
  res.render("shop", {product, success});
});

router.get("/addToCart/:productId", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({email: req.user.email});
  user.cart.push(req.params.productId);
  user.save();
  req.flash("success", "product added to cart");  
  res.redirect("/shop");
}); 

router.get("/cart", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({email: req.user.email}).populate("cart");
  res.render("cart", {user});
});



module.exports = router;
