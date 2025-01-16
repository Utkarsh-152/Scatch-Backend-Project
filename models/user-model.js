const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array, 
    default: []
},
  orders: {
    type: Array, 
    default: []
},
  contact: Number,
  isAdmin: Boolean,
  picture: String

});

module.exports = mongoose.model("user", userSchema);
