const Winset = require("../models/winsetModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createWinset = catchAsyncErrors(async (req, res, next) => {

    
      const winset = await Winset.create(req.body);
    
      res.status(201).json({
        success: true,
        winset
      });
  });


  exports.getWinset = catchAsyncErrors(async (req, res, next) => {

    
    const winset = await Winset.findById(process.env.WIN);
  
    res.status(200).json({
      success: true,
      winset
    });
});


exports.UpdateWinset = catchAsyncErrors(async (req, res, next) => {

    
    const winset = await Winset.findByIdAndUpdate(process.env.WIN, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
    res.status(200).json({
      success: true,
      winset
    });
});
