const Bet = require("../models/betModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const Winset = require("../models/winsetModel");
const Showtime = require("../models/showtimeModel");

exports.createBet = catchAsyncErrors(async (req, res, next) => {

  const {betName,betAmount,cImage,mImage} = req.body
  
  const user = req.user.id;
  
    const bet = await Bet.create({ 
      betName,
      user,
      betAmount,
      image:{
        mUrl:mImage,
        cUrl:cImage
      }
    });
  
    res.status(201).json({
      success: true,
      bet,
    });
});

// get logged in user  Orders
exports.myBet = catchAsyncErrors(async (req, res, next) => {
    const bets = await Bet.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      bets,
    });
  });

  exports.getAllBets = catchAsyncErrors(async (req, res, next) => {
    // return next(new ErrorHander("This is My TESting Error",500))
  
    const bets = await Bet.find();
  
    res.status(200).json({
      success: true,
      bets,
    });
  });



  exports.getAllBetDone = catchAsyncErrors(async (req, res, next) => {


    const showtime = await Showtime.findById(process.env.SHOW);
    const winsets = await Winset.findById(process.env.WIN);
    const bets = await Bet.find({betName:`${winsets.Name}`, createdAt:{$gte:`${showtime.Start}`}})
    await bets.map(async(bet)=>{
      await User.findByIdAndUpdate(bet.user,{$inc:{balance:`${bet.betAmount*winsets.Times}`}},{new: true,runValidators: true,useFindAndModify: false})
    })


    const betwin = await Bet.updateMany({betName:`${winsets.Name}`}, { $set: {betStatus:"Success", result:"win"}})
    const betlose = await Bet.updateMany({betName:{$ne:`${winsets.Name}`}}, { $set: {betStatus:"Success", result:"lose"}})
  
    res.status(200).json({
      success: true,
      betwin,
      // winsets
    });
  });


