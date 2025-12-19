const mongoose = require("mongoose");

const msgmodel = new mongoose.Schema({
    message: {
        text:{
            type: String,
            required: true,
        },
        iv: {
            type: String,
            required: true
        }
    },
    users: [ // [user1-sender , user2-reeiver] array of two user names
        {
            type: String,
            required: true
        }
    ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
    //timestamps
});

