const Showhistory = require("../models/showhistoryModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createShowhistory = catchAsyncErrors(async (req, res, next) => {

    
      const showhistory = await Showhistory.create(req.body);
    
      res.status(201).json({
        success: true,
        showhistory
      });
  });   


  exports.getShowhistory = catchAsyncErrors(async (req, res, next) => {

    
    const showhistory = await Showhistory.find();
  
    res.status(200).json({
      success: true,
      showhistory
    });
});

