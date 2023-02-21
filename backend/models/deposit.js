const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({

    paymentId:{
        type:Number,
        required: [true,"Please Enter bet bankName"],
        // unique : true
    },
    PaymentMethod:{
        type:String,
        required: [true,"Please Enter bet PaymentMethod"],
        trim: true,
    },
    DAmount:{
        type:Number,
        default:0,
    },
    DStatus:{
        type: String,
        default:"Pending"
    }, 
   
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

},{timestamps:true})

module.exports = mongoose.model("Deposit",depositSchema);