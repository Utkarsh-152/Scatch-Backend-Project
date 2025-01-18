const express = require("express");
const router = express.Router();
const productModel = require("../models/product-model");
const upload = require("../config/multer-config");

router.post("/create",upload.single("image"), async (req, res) => {
    try {let {name, price, discount, bgColor, panelColor, textColor} = req.body;
    let product = await productModel.create({
        name, 
        price, 
        discount, 
        bgColor, 
        panelColor, 
        textColor, 
        image: req.file.buffer});
    res.redirect("/owner/admin");
    }
    catch(err){
        req.flash("error", err.message);
        res.redirect("/owner/admin");
    }
});



module.exports = router;