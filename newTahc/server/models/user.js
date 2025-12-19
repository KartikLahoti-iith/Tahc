const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength:8
    },
    public: {
        type: String,
        required: true
    }
    //about
    //pfp
    //lastseen
    //phone
});


const User = mongoose.model("User",userModel);
module.exports = User;