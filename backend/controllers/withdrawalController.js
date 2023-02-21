const Withdrawal = require("../models/withdrawalModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const User = require("../models/userModel");
const ErrorHander = require("../utils/errorhander");

exports.createWithdrawal = catchAsyncErrors(async (req, res, next) => {

  const {Mobile,WAmount,PaymentMethod} = req.body
  
  const user = req.user.id;
  
    const withdrawal = await Withdrawal.create({
      Mobile,
      user,
      WAmount,
      PaymentMethod
    });
  
    res.status(201).json({
      success: true,
      withdrawal
    });
});

// get logged in user  Orders
exports.myWithdrawal = catchAsyncErrors(async (req, res, next) => {
    const withdrawals = await Withdrawal.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      withdrawals,
    });
  });


  exports.getAllWithdrawals = catchAsyncErrors(async (req, res, next) => {
    // return next(new ErrorHander("This is My TESting Error",500))
  
    const withdrawals = await Withdrawal.find();
  
    res.status(200).json({
      success: true,
      withdrawals,
    });
  });



  exports.UpdateUsersWithdrawal = catchAsyncErrors(async (req, res, next) => {


    let withdrawals = await Withdrawal.findById(req.params.id);
  
    if (!withdrawals) {
      return next(new ErrorHander("Withdrawal not found", 404));
    }
  
  
    withdrawals = await Withdrawal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    let user = await User.findById(withdrawals.user);


    if (!user) {
      return next(new ErrorHander("notifi user not found", 404));
    }

    
      user.notifi.push(`Your ₹${withdrawals.WAmount} Withdrawal is Accepted please check Your Account balance and transaction`);
      // let oldbalance = user.balance;

      // let withdrawal1 = withdrawals.WAmount;
      // let newbalance = oldbalance - withdrawal1;


      user1 = await User.findByIdAndUpdate(withdrawals.user,{ "notilenth": `${user.notilenth + 1}`} ,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      await user1.save()
      await user.save()

  
    res.status(200).json({
      success: true,
      withdrawals,
    });
  });
  