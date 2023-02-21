const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const Say = require("../models/sayModel");

exports.createSay = catchAsyncErrors(async (req, res, next) => {

    const {Fname,email,message} = req.body
    
    const user = req.user.id;
    
      const say = await Say.create({
        Fname,
        user,
        email,
        message
      });
    
      res.status(201).json({
        success: true,
        say
      });
  });


  exports.getAllSay = catchAsyncErrors(async (req, res, next) => {

  
    const says = await Say.find();
  
    res.status(200).json({
      success: true,
      says,
    });
  });
  