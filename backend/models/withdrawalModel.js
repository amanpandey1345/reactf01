const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema({

    Mobile:{
        type:Number,
        required: [true,"Please Enter bet number"],

    },
    PaymentMethod:{
        type:String,
        required: [true,"Please Enter bet PaymentMethod"],
        trim: true,
    },
    WAmount:{
        type:Number,
        default:0,
    },
    WStatus:{
        type: String,
        default:"Pending"
    },
    tId:{
        type: String,

    },
   
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

},{timestamps:true})

module.exports = mongoose.model("Withdrawal",withdrawalSchema);