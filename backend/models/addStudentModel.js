const mongoose = require("mongoose");

const addStudentSchema = new mongoose.Schema(
  {
    StudentId: {
      type: String,
      required: true, 
    },
    Fname:{
      type: String,
      // required: [true, "Please Enter Student Id"],
    },
    Sname: { 
      type: String,
      // required: [true, "Please Enter Student Id"],
    },
    AdmissionId: {
      type: String,
      // required: [true, "Please Enter Student Id"],
    },
    ScholerNo: {
      type: String,
      // required: [true, "Please Enter Scholer No"],
    },
    Class:{
        type:String,
        required:true
    },
    term1:{
      type:String,
      default:"Panding"
    },
    term2:{
      type:String,
      default:"Panding"
    },
    term3:{
      type:String ,
      default:"Panding"
    },
  
    SYear:{
        type:String,
        required:true
    },
    EYear:{
        type:String,
        required:true
    },
    ClassId:{
        type:String,
        required:true
    },
    
   

    CreatedBy: {
      type: Object,
      id:{
        type:String,
      },
      nameStaff:{
        type:String,
      }


    },
  },
  { timestamps: true }
);



module.exports =  mongoose.model("AddStudent", addStudentSchema);