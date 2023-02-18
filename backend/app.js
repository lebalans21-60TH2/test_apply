const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");

const path = require("path");


app.use(express.json());
app.use(cookieParser());


// config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/.env"
    })}

// Route imports

const user = require("./routes/UserRoute");

app.use("/api/v2",user);

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
})


// it's for errorHandeling
app.use(ErrorHandler);

module.exports = app