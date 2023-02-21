const Deposit = require("../models/deposit");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const User = require("../models/userModel");
// const ErrorHander = require("../utils/errorhander");

exports.createDeposit = catchAsyncErrors(async (req, res, next) => {

  const {paymentId,DAmount,PaymentMethod} = req.body
  
  const user = req.user.id;
  
    const deposit = await Deposit.create({
      paymentId,
      user,
      DAmount,
      PaymentMethod
    });
  
    res.status(201).json({
      success: true,
      deposit
    });
});

// get logged in user  Orders
exports.myDeposit = catchAsyncErrors(async (req, res, next) => {
    const deposits = await Deposit.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      deposits,
    });
  });


  exports.getAlldeposits = catchAsyncErrors(async (req, res, next) => {
    // return next(new ErrorHander("This is My TESting Error",500))
  
    const deposits = await Deposit.find();
  
    res.status(200).json({
      success: true,
      deposits,
    });
  });


  exports.UpdateUsersDeposit = catchAsyncErrors(async (req, res, next) => {


    let deposits = await Deposit.findById(req.params.id);
  
    if (!deposits) {
      return next(new ErrorHander("Deposit not found", 404));
    }
  
  
    deposits = await Deposit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    let user = await User.findById(deposits.user);


    if (!user) {
      return next(new ErrorHander("notifi user not found", 404));
    }

    
      user.notifi.push(`Your ₹${deposits.DAmount} Deposit is Accepted please check Your Account balance and transaction`);
      let oldbalance = user.balance;

      let deposit1 = deposits.DAmount;
      let newbalance = oldbalance + deposit1;


      user1 = await User.findByIdAndUpdate(deposits.user,{ "notilenth": `${user.notilenth + 1}`,"balance":`${newbalance}`} ,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      await user1.save()
      await user.save()

  
    res.status(200).json({
      success: true,
      deposits,
    });
  });
  