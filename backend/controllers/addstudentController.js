const AddStudent = require("../models/addStudentModel");
const StudentFeeInfo = require("../models/studentFeeInfoModel");
const Class = require("../models/classModel");
const Admiss = require("../models/admissionModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const crypto = require("crypto");
exports.createAddStudent = catchAsyncErrors(async (req, res, next) => {
  // console.log("okk");
  const { ScholerNo, Classid } = req.body;
  const classs = await Class.findById(Classid);

  const { ClassId, Cname, Syear, Eyear,Cteacher } = classs;
  const addmissionInfo = await Admiss.findOne({
    ScholarNo:ScholerNo 
  });
  if (!addmissionInfo) {
    return next(new ErrorHander(`Sorry Scholar no is invalid`, 404));
  }
  // console.log("okk");
  const scholerInfo = await AddStudent.findOne({
    ScholerNo:ScholerNo,
    SYear: Syear,
  });
  // console.log(schoterInfo);
  if (scholerInfo) {
    return next(new ErrorHander(`Sorry, Student is already Added.`, 404));
  }
  // console.log(addmissionInfo);
  // const classs = await Class.findById(Classid);

  // const { ClassId, Cname, Syear, Eyear,Cteacher } = classs;
  const sId = crypto.randomBytes(8).toString("hex").slice(0, 8).toUpperCase();
  const StudentId = `SSId-${sId}${Syear}`;
  console.log("okk");
  const { StudentGId, Sname } = addmissionInfo;
  const { Fname} = addmissionInfo.familyInfo;
  // console.log(Fname);

  const addstudent = await AddStudent.create({
    ClassId,
    EYear: Eyear,
    SYear: Syear,
    Class: Cname,
    Fname,
    Sname,
    ScholerNo,
    Cteacher,
    AdmissionId: StudentGId,
    StudentId,
    CreatedBy: { id: req.user.staffId, nameStaff: req.user.name },
  });
  const addstudent1 = await StudentFeeInfo.create({
    StudentId,
    ClassId,
    CreatedBy: req.user.staffId,
  });
  console.log("okk");
  res.status(201).json({
    success: true,
    addstudent,
    addstudent1,
    message: "Student Added Successfully",
  });
});

exports.getAllAddStudent = catchAsyncErrors(async (req, res, next) => {
  const classs = await Class.findById(req.params.id);

  const { ClassId } = classs;
  const addstudent = await AddStudent.find({ClassId});


  res.status(200).json({
    success: true,
    addstudent,
  });
});

exports.getStudent = catchAsyncErrors(async (req, res, next) => {
  const addstudent = await AddStudent.findById(req.params.id);
  if (!addstudent) {
    return next(
      new ErrorHander(`Student does not exist with Id: ${req.params.id}`, 404)
    );
  }
  const {StudentId,ClassId, ScholerNo} = addstudent;
  const addmissionInfo = await Admiss.findOne({
    ScholarNo:ScholerNo 
  });
  let {studentInfo}= addmissionInfo
  const studentFeeInfoss = await StudentFeeInfo.findOne({
    StudentId
  });
  // const {} = studentInfo;
  console.log(studentFeeInfoss);
  const classs = await Class.findOne({ClassId});
  let {CFee,PFee,Tmonths,Texam,T1FeeS, T2FeeS, T3FeeS, TFeeObj, Dpercent, LateFee } = classs
  const addstudent1 = await StudentFeeInfo.findOne({
    StudentId, 
  });   

  let totalFee; 
  let paidFee ;
  if(studentFeeInfoss.TPaidfee){
    paidFee = studentFeeInfoss.TPaidfee 
  }else{
    paidFee = 0
  } 


  // console.log(studentInfo.CivilorPoliceF);
  // console.log(classs);
  if(studentInfo.CivilorPoliceF == "Police" ){
    totalFee = PFee.MTfee*Tmonths + PFee.ExamFee * Texam + PFee.AnnualFee
    console.log("p");
    console.log(totalFee);

    // console.log(PFee.MTfee*Tmonths+PFee.Examfee);

  }else if (studentInfo.CivilorPoliceF == "Civilian"){
    totalFee = CFee.MTfee*Tmonths + CFee.ExamFee * Texam + CFee.AnnualFee
    console.log("c");

    console.log(totalFee);
  }else{
    totalFee = null
    console.log("n");
  }

  let pendingFee = totalFee - paidFee;
  let Jan = 0
  let fub = 0
  let mar = 0
  let apr = 0
  let may = 0
  let jun = 0
  let jul = 0
  let aug = 0
  let sap = 0
  let oct = 0
  let nov = 0
  let dec = 0
  let ex1 = 0
  let ex2 = 0
  let ex3 = 0
  let anfee = 0


  res.status(200).json({
    success: true,
    totalFee,
    paidFee,
    pendingFee,
    anfee,
    ex3,
    ex2,
    ex1,
    dec,
    nov,
    oct,
    sap,
    aug,
    jul,
    jun,
    may,
    apr,
    mar,
    fub,
    Jan,
    addstudent,
    addstudent1
  });
});
exports.deletStudent = catchAsyncErrors(async (req, res, next) => {
  const addstudent = await AddStudent.findById(req.params.id);
  if (!addstudent) {
    return next(
      new ErrorHander(`Student does not exist with Id: ${req.params.id}`, 404)
    );
  }
  await addstudent.remove();
  res.status(200).json({
    success: true,
    message: "Student is sccessfully deleted.. ",
  });
});

exports.updateStudent = catchAsyncErrors(async (req, res, next) => {
  let student = await AddStudent.findById(req.params.id);
  if (!student) {
    return next(new ErrorHander("Session not found", 404));
  }
  const students = await AddStudent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Session Updated Successfully",
  });
});
