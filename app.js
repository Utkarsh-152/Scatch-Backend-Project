const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const expressSession = require("express-session");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const ownerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const router = require('./routes/index');


const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owner", ownerRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use('/', router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
