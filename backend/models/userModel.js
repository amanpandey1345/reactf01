const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please enter a valid Email"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "Please enter your Password"],

        select: false,
      },
      staffId: {
        type: String,
      },
      mobile: {
        type: Number,
        required: [true, "Please enter your mobile number"],
        unique: true,
      },
      role: {
        type: String,
        default: "user",
      },
      status: {
        type: Boolean,
        default: "true",
      },
      createdBy:{
        type: String,
        required: [true, "Please enter createdby name"],

      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,
      loginToken: String,
      loginTokenExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  // JWT TOKEN
  userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  // Compare Password
  
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  // Generating Password Reset Token
  userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(8).toString("hex").slice(0, 6);
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };
  userSchema.methods.getLoginToken = function () {
    // Generating Token
    const Token = crypto.randomBytes(8).toString("hex").slice(0, 6);


    // Hashing and adding resetPasswordToken to userSchema
    this.loginToken = crypto
      .createHash("sha256")
      .update(Token)
      .digest("hex");
  
    this.loginTokenExpire = Date.now() + 15 * 60 * 1000;
  
    return Token;
  };

  module.exports = mongoose.model("User",userSchema);
