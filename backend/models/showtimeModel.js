const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({

    Start:{
        type: Date,
        default: Date.now,
    },

    End:{
        type: Date,
        default: Date.now,
    },

},{timestamps:true})

module.exports = mongoose.model("Showtime",showtimeSchema);