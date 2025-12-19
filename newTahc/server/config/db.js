const mongoose = require("mongoose");

function connDB(Mongourl){
    mongoose.connect(Mongourl)
        .then(()=>{
            console.log("Database Connected successfully.");
        })
        .catch((err)=>{
            console.log(`Database Connection failed: `,err);
        });
}

module.exports = connDB;