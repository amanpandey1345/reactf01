const mongoose = require("mongoose");

const saySchema = new mongoose.Schema({

    Fname:{
        type: String,
        required:[true, "Please enter your name"],
    },

    email:{
        type: String,
        required:[true, "Please enter your email"],
    },
    message:{
        type: String,
        required:[true, "Please enter your message"],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

},{timestamps:true})

module.exports = mongoose.model("Say",saySchema);