const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    ScholarNo: {
      type: String,
      unique: true,
    },
    StudentGId: { 
      type: String,
      required: [true, "Please Enter Adstudent Name"],
    },
    Sname: {
      type: String,
      required: [true, "Please Enter Adstudent Name"],
    },
    Sname: {
      type: String,
      required: [true, "Please Enter Adstudent Name"],
    },
    studentInfo: {
      type: Object,

      StudentGId: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      gender: {
        type: String,
        required: true,
      },
      Sname: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      Religion: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      Cast: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      Pmobile: {
        type: Number,
      },
      DOB: {
        type: Date,
        required: [true, "Please Enter Adstudent Name"],
      },
      DOBasOn1July: {
        type: Date,
        required: [true, "Please Enter Adstudent Name"],
      },
      PwhatsappNo: {
        type: Number,
      },
      ScholarNo: {
        type: String,
        unique:true,
      },
      SSSMID: {
        type: Number,
      },
      UId: {
        type: String,
        required: [true, "Please Enter Adstudent medium"],
      },
      ParentName: {
        type: String,
      },
      TCno: {
        type: String,
      },

      BloodGroup: {
        type: String,
      },

      Nationality: {
        type: String,
      },

      CastCertificationNo: {
        type: String,
      },
      RationCardNo: {
        type: String,
      },
      lastSchoolName: {
        type: String,
        required: [true, "Please Enter Adstudent medium"],
      },
      BusService: {
        type: String,
        required: [true, "Please Enter Adstudent medium"],
      },
      LastClass: {
        type: String,
        required: [true, "Please Enter Adstudent Subject"],
      },
      AdClass: {
        type: String,
        required: [true, "Please Enter Adstudent Subject"],
      },
      Adyear: {
        type: Number,
        required: [true, "Please Enter admission year"],
      },
      CivilorPoliceF: {
        type: String,
      },
    },
    familyInfo: {
      type: Object,

      Fname: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      Mname: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      Fofficeadr: {
        type: String,
      },
      Mofficeadr: {
        type: String,
      },
      Fprofession: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },
      Mprofession: {
        type: String,
        required: [true, "Please Enter Adstudent Name"],
      },

      Mmobile: {
        type: Number,
      },
      Fmobile: {
        type: Number,
      },
      NameofSiblingsInSchool: {
        type: String,
      },

      FamilyId: {
        type: Number,
      },

      MIncomeCertificationNo: {
        type: String,
      },
      FIncomeCertificationNo: {
        type: String,
      },
      FatherAnnualIncome: {
        type: Number,
      },
      MotherAnnualIncome: {
        type: Number,
      },
    },
    Address: {
      type: Object,
      Raddress: {
        type: Object,

        HouseNo: {
          type: String,
        },
        Addressl: {
          type: String,
        },
        City: {
          type: String,
        },
        State: {
          type: String,
        },
        PinCode: {
          type: Number,
        },
      },
      Paddress: {
        type: Object,

        HouseNo: {
          type: String,
        },
        Addressl: {
          type: String,
        },
        City: {
          type: String,
        },
        State: {
          type: String,
        },
        PinCode: {
          type: Number,
        },
      },
    },
    BankInfo: {
      type: Object,
      AccNO: {
        type: Number,
      },
      IFSC: {
        type: String,
      },
      BraName: {
        type: String,
      },
      AccHolder: {
        type: String,
      },
    },
    Sstatus: {
      type: String,
      default: "Active",
    },
    AdmissionBy: {
      type: Object,

      id: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admiss", admissionSchema);
