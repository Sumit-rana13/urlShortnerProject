const express = require("express");
const router = require("./router/url")
const {connectMongoDb} = require("./connect")
const URL = require("./model/url")
const path = require("path")
const staticRouter = require("./router/staticRouter")
require('dotenv').config();// Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 8001;


//connection--
connectMongoDb().then(()=>console.log("MongoDb server is connected"));

//middle-ware--
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine setup
app.set("view engine","ejs");
app.set("views", path.resolve("../ShortUrlFrontend/view"));


//routes--
app.use("/url",router);
app.use("/",staticRouter);

app.use(express.static(path.join(__dirname, '../ShortUrlFrontend/public')));


app.listen(PORT, console.log(`Server started at Port: ${PORT}`));

