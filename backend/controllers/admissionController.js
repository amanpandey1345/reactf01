const Admiss = require("../models/admissionModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

const crypto = require("crypto");

exports.createAdmission = catchAsyncErrors(async (req, res, next) => {
  const {

    sName,
    castCertiNO,
    scholarNo,
    SSSMID,
    sAdhaarNo,
    sTCno,
    ParentName,
    ParentMobilleNo,
    ParentWhatSappNO,
    rationCardNo,
    sLastSchool,
    sLastClass,
    sAdmissClass,
    nameofSiblingsInSchool,
    mAnnualIncome,
    fAnnualIncome,
    mIncomeCartif,
    fIncomeCartif,
    mMobileNo,
    fMobileNo,
    mOfficeAdre,
    fOfficeAdre,
    mProf,
    fProf,
    mName,
    fName,
    familyId,
    bankName,
    accountHolderName,
    accountNo,
    IFSCcode,
    State,
    pState,
    City,
    pCity,
    PinCode,
    pPinCode, 
    AddressLine,
    pAddressLine,
    HouseNo,
    pHouseNo,
    bus,
    religion,
    nationality,
    civilOrPolice,
    blood,
    cast,
    gander,
    DOB,
    DOBOn1July,
    AdmissYear

  } = req.body;
  const cId = crypto.randomBytes(8).toString("hex").slice(0, 8).toUpperCase();
  const StudentGId = `Add${cId}`;
  const userName = req.user.name;
  const userId = req.user.staffId;
  // if (!CName || !Cteacher || !Cmedium || !Csubject || !CAnnualFee || !CMTfee || !CExamFee || !CAFFee || !CAfee || !PAnnualFee || !PMTfee || !PExamFee || !PAFFee || !PAfee || !Tmonths || !Texam || !Syear || !Eyear || !Dpercent || !LateFee || !T1FeeS || !T2FeeS || !T3FeeS || !TFeeObj) {
  //   return next(new ErrorHander("Please enter all Required fields", 400)); 
  // }

  const admiss = await Admiss.create({
    ScholarNo:scholarNo,
    StudentGId,
    Sname:sName,
    studentInfo: {
      CivilorPoliceF:civilOrPolice,
      Adyear:AdmissYear,
      AdClass:sAdmissClass,
      LastClass:sLastClass,
      BusService:bus,
      lastSchoolName:sLastSchool,
      RationCardNo:rationCardNo,
      CastCertificationNo:castCertiNO,
      Nationality:nationality,
      BloodGroup:blood,
      TCno:sTCno,
      ParentName,
      UId:sAdhaarNo,
      SSSMID,
      ScholarNo:scholarNo,
      PwhatsappNo:ParentWhatSappNO,
      DOBasOn1July:DOBOn1July,
      DOB,
      Pmobile:ParentMobilleNo,
      Cast:cast,
      Religion:religion,
      Sname:sName,
      gender:gander,
      StudentGId,
    },
    familyInfo: {
      MotherAnnualIncome:mAnnualIncome,
      FatherAnnualIncome:fAnnualIncome,
      FIncomeCertificationNo:fIncomeCartif,
      MIncomeCertificationNo:mIncomeCartif,
      FamilyId:familyId,
      NameofSiblingsInSchool:nameofSiblingsInSchool,
      Fmobile:fMobileNo,
      Mmobile:mMobileNo,
      Mprofession:mProf,
      Fprofession:fProf,
      Mofficeadr:mOfficeAdre,
      Fofficeadr:fOfficeAdre,
      Mname:mName,
      Fname:fName,
    },
    Address: {
      Raddress: {
        HouseNo: HouseNo,
        Addressl: AddressLine,
        City: City,
        State: State,

        PinCode: PinCode,
      },
      Paddress: {
        HouseNo: pHouseNo,
        Addressl: pAddressLine,
        City: pCity,
        State: pState,

        PinCode: pPinCode,
      },
    },
    BankInfo: {
      AccHolder:accountHolderName,
      BraName:bankName,
      IFSC:IFSCcode,
      AccNO:accountNo,
    },
    AdmissionBy:{
      name:userName,
      id:userId
    }
  });

  res.status(201).json({
    success: true,
    message: "Addmission form submeted Successfully",
    admiss,
  });
});

exports.getAllAdmission = catchAsyncErrors(async (req, res, next) => {
  // return next(new ErrorHander("This is My TESting Error",500))

  const admission = await Admiss.find();
  const admissionCount = await Admiss.countDocuments({}) 
  // await Admiss.remove()

  res.status(200).json({
    success: true,
    admissionCount,
    admission,
  });
});


exports.deletAdmission = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.params.id);
  // if (id.length !== 24) {
  //   return next(new ErrorHander("User id is invalid!!", 404));
  // }
  const admission = await Admiss.findById(req.params.id);
  if (!admission) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 404)
    );
  }
  await admission.remove();
  res.status(200).json({
    success: true,
    message: "Admission is sccessfully deleted.. ",
  });
});

// exports.updateAdmission = catchAsyncErrors(async (req, res,next) => {
//   const { id } = req.params;
//   // const { email, mobile } = req.body;
//   // console.log(id);
//   if (id.length !== 24) {
//     return next(new ErrorHander("user id is invalid!!", 404));
//   }
//   const e = await User.findOne({ email });
//   const m = await User.findOne({ mobile });

//   // console.log(e);
//   if (e) {
//     return next(new ErrorHander("Email and Mobile already exists!!", 500));
//     // return console.log(e);
//   }
//   if (m) {
//     return next(new ErrorHander("Email and Mobile already exists!!", 500));
//     // return console.log(e);
//   }
//   let user = await User.findById(req.params.id);
//   if (!user) {
//     return next(new ErrorHander("user not found", 404));
//   }
//   // console.log(req.body);

//   user = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });
//   res.status(200).json({
//     success: true,
//     user,
//     message: "user is sccessfully Update...",
//   });
// });