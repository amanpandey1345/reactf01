const mongoose = require("mongoose");

const betSchema = new mongoose.Schema({

    betName:{
        type:String,
        required: [true,"Please Enter bet name"],
        trim: true,
    },
    betAmount:{
        type:Number,
        default:0,
    },
    betStatus:{
        type: String,
        default:"Processing"
    },
    result:{
        type: String,
        default: "null"
    },
    image:{
        type:Object,
        mUrl:{
            type:URL
        },
        cUrl:{
            type:URL
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

},{timestamps:true})

module.exports = mongoose.model("Bet",betSchema);