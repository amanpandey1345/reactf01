const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    ClassId: {
      type: String,
      required: [true, "Please Enter Class Name"],
    },
    Cname: {
      type: String,
      required: [true, "Please Enter Class Name"],
    },
    Cteacher: {
      // type: mongoose.Schema.ObjectId,
      type:String,
      // ref: "User",
      required: [true, "Please Enter Class Teacher Name"],
    },
    Cmedium: {
      type: String,
      required: [true, "Please Enter Class medium"],
    },
    Section: {
      type: String,
      required: [true, "Please Enter Class Section"],
    },
    Csubject: {
      type: String,
      required: [true, "Please Enter Class Subject"],
    },
    Rstudents: {
      type: Number,
      default: 0,
    },
    Pstudents: {
      type: Number,
      default: 0,
    },
    Tstudents: {
      type: Number,
      default: 0,
    },
    TFreestudent:{
      type: Number,
      default: 0,
    },
    CFee: {
      type: Object,
      AnnualFee: {
        type: Number,
        required: [true, "Please Enter class monthly tution fee"],
      },
      MTfee: {
        type: Number,
        required: [true, "Please Enter class monthly tution fee"],
      },

      ExamFee: {
        type: Number,
        required: [true, "Please Enter class exam fee"],
      },

      AFfee: {
        type: Number,
        required: [true, "Please Enter class Admission form fee"],
      },
      Afee: {
        type: Number,
        required: [true, "Please Enter class Admission fee"],
      },
    },
    PFee: {
      type: Object,
      AnnualFee: {
        type: Number,
        required: [true, "Please Enter class monthly tution fee"],
      },
      MTfee: {
        type: Number,
        required: [true, "Please Enter class monthly tution fee"],
      },

      ExamFee: {
        type: Number,
        required: [true, "Please Enter class exam fee"],
      },

      AFfee: {
        type: Number,
        required: [true, "Please Enter class Admission form fee"],
      },
      Afee: {
        type: Number,
        required: [true, "Please Enter class Admission fee"],
      },
    },
    Tmonths: {
      type: Number,
      required: [true, "Please Enter Class total months"],
    },
    Texam: {
      type: Number,
      required: [true, "Please Enter class total exams"],
    },
    Syear: {
      type: Number,
      required: [true, "Please Enter starting year"],
    },
    Eyear: {
      type: Number,
      required: [true, "Please Enter ending year"],
    },
    Dpercent: {
      type: Number,
      default: 0,
    },
    LateFee:{
      type:Number,
      default:0
    },
    T1FeeS:{
      type: Array,
    },
    T2FeeS:{
      type: Array,
    },
    T3FeeS:{
      type: Array,
    },
    TFeeObj:{
      type: Array,
      default:["Annual","T1Exam","T2Exam","T3Exam","January","February","March","April","May","June","July","August","September","October","November","December"]
    },

    CreatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User", 
      required: true,
    },
  },
  { timestamps: true }
);


// Populate relational fields
// classSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'Cteacher',
//     select: 'name staffId', 
//   });
//   next();
// });

classSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'CreatedBy',
    select: 'name staffId',
  });
  next();
});

module.exports =  mongoose.model("Class", classSchema);