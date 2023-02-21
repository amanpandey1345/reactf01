const Class = require("../models/classModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

const crypto = require("crypto")

exports.createClass = catchAsyncErrors(async (req, res, next) => {

    const {Cname,Cteacher,Cmedium,Section,Csubject,CAnnualFee,CMTfee,CExamFee,CAFFee,CAfee,PAnnualFee,PMTfee,PExamFee,PAFFee,PAfee,Tmonths,Texam,Syear,Eyear,Dpercent,LateFee,T1FeeS,T2FeeS,T3FeeS,TFeeObj} = req.body
    // const cId = crypto.randomBytes(8).toString("hex").slice(0, 8).toUpperCase();
  // const ClassId = `C${cId}`;
    const user = req.user.id;
    const ClassId = `C${Cname}${Cmedium}${Csubject}${Section}${Syear}`
    console.log(ClassId);
    // if (!CName || !Cteacher || !Cmedium || !Csubject || !CAnnualFee || !CMTfee || !CExamFee || !CAFFee || !CAfee || !PAnnualFee || !PMTfee || !PExamFee || !PAFFee || !PAfee || !Tmonths || !Texam || !Syear || !Eyear || !Dpercent || !LateFee || !T1FeeS || !T2FeeS || !T3FeeS || !TFeeObj) {
    //   return next(new ErrorHander("Please enter all Required fields", 400));
    // }
    
      const classes = await Class.create({  
        Cname,Cteacher,Cmedium,Csubject,Tmonths,Section,Texam,Syear,Eyear,Dpercent,LateFee,T1FeeS,T2FeeS,ClassId,T3FeeS,TFeeObj,CreatedBy:user,
        CFee:{
            AnnualFee:CAnnualFee,
            MTfee:CMTfee,
            ExamFee:CExamFee,
            AFFee:CAFFee,
            Afee:CAfee 
        },
        PFee:{
            AnnualFee:PAnnualFee,
            MTfee:PMTfee,
            ExamFee:PExamFee,
            AFFee:PAFFee,
            Afee:PAfee
        },
        
      });
    
      res.status(201).json({
        success: true,
        message:"Class Created Successfully",
      });
  });

  exports.updateClass = catchAsyncErrors(async (req, res, next) => {

    const {Cname,Cteacher,Cmedium,Csubject,CAnnualFee,CMTfee,CExamFee,CAFFee,CAfee,PAnnualFee,PMTfee,PExamFee,PAFFee,PAfee,Tmonths,Texam,Syear,Eyear,Dpercent,LateFee,T1FeeS,T2FeeS,T3FeeS,TFeeObj} = req.body

    let CL = await Class.findById(req.params.id);
    if (!CL) {
      return next(new ErrorHander("CLASS not found", 404));
    }
      const classes = await Class.findByIdAndUpdate(req.params.id,{  
        Cname,Cteacher,Cmedium,Csubject,Tmonths,Texam,Syear,Eyear,Dpercent,LateFee,T1FeeS,T2FeeS,T3FeeS,TFeeObj,
        CFee:{
            AnnualFee:CAnnualFee, 
            MTfee:CMTfee,
            ExamFee:CExamFee,
            AFFee:CAFFee,
            Afee:CAfee 
        },
        PFee:{
            AnnualFee:PAnnualFee,
            MTfee:PMTfee,
            ExamFee:PExamFee,
            AFFee:PAFFee,
            Afee:PAfee
        },
        
      },{
        new: true,
        runValidators: true, 
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
        message:"Class Updated Successfully",
      });
  });

  exports.getAllClasses = catchAsyncErrors(async (req, res, next) => {
    // return next(new ErrorHander("This is My TESting Error",500))
    // const {Syear,id}= req.body
    // console.log(Syear);
    // console.log(id);
    const {Syear} = req.params

  
    const classs = await Class.find({Syear});
  
    res.status(200).json({
      success: true,
      classs,
    });
  });
  exports.getClass = catchAsyncErrors(async (req, res, next) => {
    // return next(new ErrorHander("This is My TESting Error",500))
  
    const classs = await Class.findById(req.params.id);
  
    res.status(200).json({
      success: true,
      classs,
    });
  });

  exports.deletClass = catchAsyncErrors(async (req, res, next) => {

    const classs = await Class.findById(req.params.id);
    if (!classs) {
      return next(
        new ErrorHander(`Class does not exist with Id: ${req.params.id}`, 404)
      );
    }
    await classs.remove(); 
    res.status(200).json({
      success: true, 
      message: "Class is sccessfully deleted.. ",
    });
  });
  
