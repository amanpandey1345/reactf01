const Session = require("../models/sessionModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

const crypto = require("crypto")

exports.createSession = catchAsyncErrors(async (req, res, next) => {

    const {startYear,endYear} = req.body
  //   const cId = crypto.randomBytes(8).toString("hex").slice(0, 8).toUpperCase();
  // const ClassId = `C${cId}`;
  const userName = req.user.name;
  const userId = req.user.staffId;

    
      const session = await Session.create({startYear,endYear,Createdby:{
        id:userId,
        name:userName  
      } });
    
      res.status(201).json({
        success: true,
        message:"Session is Created Successfully",
      });
  });


  exports.getAllSession = catchAsyncErrors(async (req, res, next) => {
  
    const sessions = await Session.find();
  
    res.status(200).json({
      success: true,
      sessions,
    });
  });


  exports.deletSession = catchAsyncErrors(async (req, res, next) => {

    const session = await Session.findById(req.params.id);
    if (!session) {
      return next(
        new ErrorHander(`User does not exist with Id: ${req.params.id}`, 404)
      );
    }
    await session.remove();
    res.status(200).json({
      success: true,
      message: "Session is sccessfully deleted.. ",
    });
  });


  exports.updateSession = catchAsyncErrors(async (req, res, next) => {

    let sess = await Session.findById(req.params.id);
    if (!sess) {
      return next(new ErrorHander("Session not found", 404));
    }
      const session = await Session.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }); 
    
      res.status(200).json({
        success: true,
        message:"Session Updated Successfully",
      });
  });
