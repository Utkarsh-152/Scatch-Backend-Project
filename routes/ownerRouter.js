const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
const {logInAdmin} = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("hey it's owner");
});

if(process.env.NODE_ENV === "development"){
    router.post("/create", async (req, res) => {
        let owner = await ownerModel.find();
        if(owner.length > 0){
            return res
            .status(503)
            .send("you dont have permission to create owner");
        }
        let {fullname, email, password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.status(200).send(createdOwner);
    });
}

router.get("/login", (req, res) => {
    res.render("owner-login");
})

router.post("/login", logInAdmin);

router.get("/admin", (req, res) => {
    let success = req.flash("success");
    res.render("createproducts", {success});
})

module.exports = router;
