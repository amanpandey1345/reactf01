const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    startYear: {
      type: Number,
      required: [true, "Please Enter start year"],

    },
    endYear: {
      type: Number,
      required: [true, "Please Enter end year"],

    },

    Createdby:{
      type:Object,
      id:{
        type:String,

      },
      name:{
        type:String,
      }
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Session",sessionSchema);