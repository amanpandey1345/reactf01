const Showtime = require("../models/showtimeModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createShowtime = catchAsyncErrors(async (req, res, next) => {

    
      const showtime = await Showtime.create(req.body);
    
      res.status(201).json({
        success: true,
        showtime
      });
  });


  exports.getShowtime = catchAsyncErrors(async (req, res, next) => {

    
    const showtime = await Showtime.findById(process.env.SHOW);
  
    res.status(200).json({
      success: true,
      showtime
    });
});


exports.UpdateShowtime = catchAsyncErrors(async (req, res, next) => {

    
    const showtime = await Showtime.findByIdAndUpdate(process.env.SHOW, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
    res.status(200).json({
      success: true,
      showtime
    });
});
