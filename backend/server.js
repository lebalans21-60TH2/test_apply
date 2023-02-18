const app = require("./app");
const connectDatabase = require("./db/Database.js");

// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

// config
if(process.env.NODE_ENV!=="PRODUCTION"){
require("dotenv").config({
    path:"backend/.env"
})}

// connect database
connectDatabase();

// create server
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT,() =>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
}); 