const User = require("../models/userModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
// const cloudinary = require('cloudinary');
// const cloudinary = require("../cloud/cloud");

// Create User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { email, mobile, password, name, role } = req.body;
  const sId = crypto.randomBytes(8).toString("hex").slice(0, 8).toUpperCase();
  const staffId = `S${sId}`;

  if (!email || !mobile || !password || !name) {
    return next(new ErrorHander("Please Enter All Required Field", 400));
  }
  const e = await User.findOne({ email });
  const m = await User.findOne({ mobile });

  const createdBy = req.user.id;
  // console.log(e);
  if (e) {
    return next(new ErrorHander("Email and Mobile already exists!!", 500));
    // return console.log(e);
  }
  if (m) {
    return next(new ErrorHander("Email and Mobile already exists!!", 500));
    // return console.log(e);
  }

  const user = await User.create({
    email,
    mobile,
    password,
    createdBy,
    name,
    role,
    staffId,
  });
  // const user = new User({ fname, email, mobile, password });

  res.status(201).json({
    success: true,
    message: "User is sccessfully Register ",
  });
});

// login User req

exports.loginUserReq = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  // checkingif user has given password and email both
  if (!email) {
    return next(new ErrorHander("Please Enter Email", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHander("Sorry!!, Invalid email ", 401));
  }
  const loginToken = user.getLoginToken();

  await user.save({ validateBeforeSave: false });

  const message = `
  <!DOCTYPE html>
<html>
<body style="  display: flex;

    align-items: center;flex-direction: column;width:100vw;height:100vh;" >
    <div style="  display: flex;

    align-items: center;flex-direction: column;width:500px;height:400px;">
<div style=" background-color:yellow;width:500px;height:400px; display: flex;

    align-items: center;flex-direction: column;">
<h1 style="color:blue;">This is a heading</h1>
<img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="image" style="color:blue;text-align:center;    width: 20%;
    height: 20%;"/>
<p style="color:red;">This is a paragraph.<h2 style="background-color: #fff;    padding:10px;">${loginToken}<h2/></p>
<p style="color:red;">This is a paragraph.</p>
</div>
</div>
</body>
</html> `;

  try {
    await sendEmail({
      email: user.email,
      subject: `Check user Authenticated or not`,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email send to ${user.email} successfully`,
    });
  } catch (error) {
    user.loginToken = undefined;
    user.loginTokenExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return res.status(500).json({ success: false, message: error.message });
  }
});
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { token, password } = req.body;
  // checkingif user has given password and email both
  // log({token,password})
  if (!token || !password) {
    return next(new ErrorHander("Please Enter Token & Password", 400));
  }

  const loginToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    loginToken,
    loginTokenExpire: { $gt: Date.now() },
  }).select("+password");
  if (!user) {
    return next(
      new ErrorHander("Sorry, Login Token and Password is invalid !!", 401)
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHander("Sorry, Login Token and Password is invalid  !!", 401)
    );
  }
  user.loginToken = undefined;
  user.loginTokenExpire = undefined;

  await user.save();

  sendToken(user, "login Successfully...", 200, res);
});

// logout User

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    sameSite: process.env.NODE_ENV == "production" ? "none" : "Lax",
    secure: process.env.NODE_ENV === "production" ? true : false,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
exports.deletUser = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.params.id);
  // if (id.length !== 24) {
  //   return next(new ErrorHander("User id is invalid!!", 404));
  // }

  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 404)
    );
  }
  await user.remove();
  res.status(200).json({
    success: true,
    message: "User is sccessfully deleted.. ",
  });
});

// Get all User User

exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  // return next(new ErrorHander("This is My TESting Error",500))

  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Update User User

exports.updateUser = catchAsyncErrors(async (req, res,next) => {
  const { id } = req.params;
  const { email, mobile } = req.body;
  // console.log(id);
  if (id.length !== 24) {
    return next(new ErrorHander("user id is invalid!!", 404));
  }
  const e = await User.findOne({ email });
  const m = await User.findOne({ mobile });

  // console.log(e);
  if(e ){

    if (e.length >= 1) {
      return next(new ErrorHander("Email and Mobile already exists!!", 500));
      // return console.log(e);
    }
  }
  if(m){

    if (m.length >= 1) {
      return next(new ErrorHander("Email and Mobile already exists!!", 500));
      // return console.log(e);
    }
  }
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHander("user not found", 404));  
  }
  // console.log(req.body);

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    user,
    message: "user is sccessfully Update...",
  });
});

// exports.forgotPassword

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  // checkingif user has given password and email both
  if (!email) {
    return next(new ErrorHander("Please Enter Email", 400));
  }
  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }
  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const message = `<!DOCTYPE html>
    <html>
    <body style="  display: flex;align-items: center;flex-direction: column;width:500px;height:400px;" >
    <div style=" background-color:yellow;width:500px;height:400px; display: flex;
    
    <h1 style="color:blue;">Forget Password Token</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="image" style="color:blue;width: 20%; height: 20%;"/>
    <p style="color:red;">This is forget password token.<h2 style="background-color: #fff; padding: 5px;">${resetToken}<h2/></p>
    <p style="color:red;">If you have not requested this email then, please ignore it.</p>
    <div/>
    </body>
    </html> `;

  try {
    await sendEmail({
      email: user.email,
      subject: `Forget Password `,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email send to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const { token, password, cpassword } = req.body;
  if (!token || !password) {
    return next(new ErrorHander("Please Enter token & Password", 400));
  }
  if (password !== cpassword) {
    return next(
      new ErrorHander("Password and confirmPassword doesn't matched", 400)
    );
  }
  // checkingif user has given password and email both
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHander("Sorry, Forget password Token is invalid !!", 400)
    );
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Your Account Password Successfully!! Updated.. ",
  });
});

// exports.getProduct = (req,res)=>{
//     res.status(200).json({message:"hello vishnu bro"})
// }

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("Confirm password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// update balance

exports.updateBalance = catchAsyncErrors(async (req, res, next) => {
  let users = await User.findById(req.user.id);

  if (!users) {
    return next(new ErrorHander("user not found", 404));
  }

  users = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  await users.save();

  res.status(200).json({
    success: true,
    users,
  });
});

// update User Profile
exports.AdminUpdateProfile = catchAsyncErrors(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHander("notifi user not found", 404));
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// update User password
exports.pop_natifications = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHander("User is Not Found", 400));
  }
  let notificationslen = user.notilenth;
  let bank = 0;
  user.notilenth = bank;

  await user.save();

  res.status(200).json({
    success: true,
    notificationslen,
  });
});
