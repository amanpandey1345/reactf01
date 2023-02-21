const mongoose = require("mongoose");

const feeInfoSchema = new mongoose.Schema(
    {
      StudentId: {
        type: String,

      },
      TPaidfee: {
        type: Number,
        default:0
 
      },
      Feestatus: {
        type: Object,
  
        December:{
          type:Object,
          receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
          
        },
        November:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        October:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        September:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        August:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        July:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        June:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        May:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        April:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        March:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        February:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
        January:{
          type:Object,
           receptNo:{
            type:Array,
            default:[0]
          },
          fee:{
            type:Array,
            default:[0]
          },
          Late:{
            type:Array,
            default:[0]
          },
          Date:{
            type:Array,
            default:[0]
          },
  
        },
  
  
      },
      T1Examfee: {
        type: Number,
        default:0
      },
      T2Examfee: {
        type: Number,
        default:0
      },
      T3Examfee: {
        type: Number,
        default:0
      },
      Texam: {
        type: Number,
        default:0
      },
      AFfee: {
        type: Number,
        default:0
      },
      Afee: {
        type: Number,
        default:0
      },
      CreatedBy: {
        type: String,
        required: true,
      },
      ClassId:{
        type: String,
        required: true,
      }
    },
    { timestamps: true }
  );
  


module.exports =  mongoose.model("StudentFeeInfo", feeInfoSchema);