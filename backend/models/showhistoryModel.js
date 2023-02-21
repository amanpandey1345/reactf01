const mongoose = require("mongoose");

const showhistorySchema = new mongoose.Schema({

    Name:{
        type:String,
        required: [true,"Please Enter bet Name"],
        trim: true,
    },

    Times:{
        type:Number,
        default:0,
    },

},{timestamps:true})

module.exports = mongoose.model("Showhistory",showhistorySchema);