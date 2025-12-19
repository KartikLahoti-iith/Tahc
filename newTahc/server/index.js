
const express = require("express");
const mongoose = require("mongoose");
const connDB = require("./config/db");
const app = express();
const process = require("process");



//Middleware
app.use(express.json());

// Database

// HTTP ROutes Placeholder

const PORT = process.env.PORT || 5000;
const urlmongo = process.env.MONGO_URL;
connDB(urlmongo);


const server = app.listen(PORT,()=>{
    console.log(`Server started on part ${PORT}`);
});