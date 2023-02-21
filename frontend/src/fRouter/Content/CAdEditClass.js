import React from "react";

import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { NumericFormat } from "react-number-format";

import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { ToastContainer, toast as alert } from "react-toastify";
import {  getClasses, getClas, updateClasses } from "../../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { UPDATE_CLASS_RESET } from "../../constants/userConstants";

import { clearErrors, clearMESSAGE } from "../../actions/userAction";
import { Button } from "@mui/material";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="₹"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.is,
  onChange: PropTypes.func.is,
};

const CAdEditClass = ({history}) => {
  const { id, sY } = useParams();
  const { getClass } = useSelector((state) => state.getClasses);
  const { error, isUpdated,  message } = useSelector(
    (state) => state.UpdateClass
  );
  const dispatch = useDispatch();
  const [classname, setClassName] = useState();
  const [classteacher, setClassTeacher] = useState();
  const [classmedium, setClassMedium] = useState();
  const [classsubject, setClassSubject] = useState();
  const [totalMonth, setTotalMonth] = useState();
  const [totalExam, setTotalExam] = useState();
  const [term1FeeS, setTerm1FeeS] = useState();
  const [term2FeeS, setTerm2FeeS] = useState();
  const [term3FeeS, setTerm3FeeS] = useState();
  const [totalFeeS, setTotalFeeS] = useState();
  const [civilannualFee, setCivilAnnualFee] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();
  const [lateFee, setLateFee] = useState();
  const [civilMFee, setCivilMFee] = useState();
  const [civilEFee, setCivilEFee] = useState();
  const [policeannualFee, setPoliceAnnualFee] = useState();
  const [policeMFee, setPoliceMFee] = useState();
  const [policeEFee, setPoliceEFee] = useState();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const myForm = new FormData();
    myForm.set("Cname", classname);
    myForm.set("Cmedium", classmedium);
    myForm.set("Csubject", classsubject);
    myForm.set("Cteacher", classteacher);
    myForm.set("Tmonths", totalMonth);
    myForm.set("Texam", totalExam);
    myForm.set("Dpercent", discountPercentage);
    myForm.set("LateFee", lateFee);
    myForm.set("T1FeeS", term1FeeS);
    myForm.set("T2FeeS", term2FeeS);
    myForm.set("T3FeeS", term3FeeS);
    myForm.set("TFeeObj", totalFeeS);
    myForm.set("CAnnualFees", civilannualFee);
    myForm.set("CMTfee", civilMFee);
    myForm.set("CExamFee", civilEFee);
    myForm.set("PAnnualFees", policeannualFee);
    myForm.set("PMTfee", policeMFee);
    myForm.set("PExamFee", policeEFee);
    dispatch(updateClasses(myForm,id));
  };

  if (message) {

    alert.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        draggable: true,
        pauseOnHover: true,
        theme: "dark",
    });
    store.dispatch(clearMESSAGE());
    store.dispatch(getClasses(sY));
}
if (error) {
  setLoading(false);
  alert.error(error, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    draggable: true,
    pauseOnHover: true,
    theme: "dark",
  });
  dispatch(clearMESSAGE());
  dispatch(clearErrors());
  dispatch(UPDATE_CLASS_RESET());
}

  useEffect(() => {
    store.dispatch(getClasses(sY));
    getClass && getClass.classs &&
    getClass.classs.forEach((classs, index) => {
        if (classs._id === id) {
          setClassName(`${classs.Cname}`);
          setPoliceEFee(classs.PFee.ExamFee);
          setPoliceMFee(classs.PFee.MTfee);
          setPoliceAnnualFee(classs.PFee.AnnualFee);
          setCivilEFee(classs.CFee.ExamFee);
          setCivilMFee(classs.CFee.MTfee);
          setLateFee(classs.LateFee);
          setDiscountPercentage(classs.Dpercent);
          setCivilAnnualFee(classs.CFee.AnnualFee);
          setTotalFeeS(classs.TFeeObj);
          setTerm3FeeS(classs.T3FeeS);
          setTerm2FeeS(classs.T2FeeS);
          setTerm1FeeS(classs.T1FeeS);

          setTotalExam(classs.Texam);
          setTotalMonth(classs.Tmonths);
          setClassSubject(classs.Csubject);
          setClassMedium(classs.Cmedium);
          setClassTeacher(classs.Cteacher);

        }

      }); 
      if (error) {
        store.dispatch(clearMESSAGE());
        setLoading(false);
  
        dispatch(clearErrors());
        dispatch(UPDATE_CLASS_RESET()); 
      }
      if (message) {
        store.dispatch(clearMESSAGE());
          setLoading(false);
          history.push(`/admintools/Class/${sY}`) 

  
      }
  }, [dispatch, message,error,history]);

  return (
    <>
    <div className="">
    <div className="container p-16 rounded-lg backdrop-blur-md bg-white/30">
      <React.Fragment>
        <div className="flex justify-between w-full">
          
        <Typography variant="h6" gutterBottom>
          Class Information
        </Typography>
        <div className="flex"><Link to={`/admintools/class/${sY}`}><Button variant="contained"  >Back</Button></Link></div> 
        </div>
        <form onSubmit={handleCreate}>
          <Grid container spacing={3} marginBottom={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="class"
                name="classname"
                label="Class"
                value={classname}
                fullWidth
                onChange={(e) => setClassName(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="lastName"
                name="classteacher"
                label="Teacher name"
                fullWidth
                value={classteacher}
                onChange={(e) => setClassTeacher(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                id="address1"
                name="classmedium"
                label="Medium"
                value={classmedium}
                fullWidth
                onChange={(e) => setClassMedium(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="address2"
                name="classsubject"
                label="Subject"
                value={classsubject}
                fullWidth
                onChange={(e) => setClassSubject(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="totalMonth"
                label="Total Months"
                fullWidth
                onChange={(e) => setTotalMonth(e.target.value)}
                value={totalMonth}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="city"
                label="Section"
                fullWidth
                //   onChange={(e)=>setClassName(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="totalExam"
                label="Total Exam"
                fullWidth
                value={totalExam}
                onChange={(e) => setTotalExam(e.target.value)}
                variant="standard"
              />
            </Grid>
      
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="discountPercentage"
                label="Discount Percent"
                fullWidth
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
              
              id="city"
              name="lateFee"
              label="Late Fee"
              fullWidth
              value={lateFee}
              onChange={(e)=>setLateFee(e.target.value)}
              variant="standard"
            /> */}
              <TextField
                label="Late Fee"
                fullWidth
                value={lateFee}
                onChange={(e) => setLateFee(e.target.value)}
                name="lateFee"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="term1FeeS"
                label="First Term Fee Structure"
                fullWidth
                value={term1FeeS}
                onChange={(e) => setTerm1FeeS(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="term2FeeS"
                label="Second Term Fee Structure"
                fullWidth
                value={term2FeeS}
                onChange={(e) => setTerm2FeeS(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="term3FeeS"
                label="Third Term Fee Structure"
                fullWidth
                value={term3FeeS}
                onChange={(e) => setTerm3FeeS(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="city"
                name="totalFeeS"
                label="Yearly Fee Structure"
                fullWidth
                value={totalFeeS}
                onChange={(e) => setTotalFeeS(e.target.value)}
                variant="standard"
              />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom>
            Fees for civilians
          </Typography>
          <Grid container spacing={3} marginBottom={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="class"
                name="civilannualFee"
                label="Annual Fee"
                fullWidth
                value={civilannualFee}
                onChange={(e) => setCivilAnnualFee(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="lastName"
                name="civilMFee"
                label="Monthly Tution Fee"
                fullWidth
                value={civilMFee}
                onChange={(e) => setCivilMFee(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                id="address1"
                name="civilEFee"
                label="Exam Fee"
                value={civilEFee}
                fullWidth
                onChange={(e) => setCivilEFee(e.target.value)}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            Fees for Police child
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="class"
                name="policeannualFee"
                label="Annual Fee"
                value={policeannualFee}
                fullWidth
                onChange={(e) => setPoliceAnnualFee(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                id="lastName"
                name="policeMFee"
                value={policeMFee}
                label="Monthly Tution Fee"
                fullWidth
                onChange={(e) => setPoliceMFee(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                id="address1"
                name="policeEFee"
                label="Exam Fee"
                value={policeEFee}
                fullWidth
                onChange={(e) => setPoliceEFee(e.target.value)}
                variant="standard"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            loading={loading}
            variant="outlined"
            className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 bg-red-700 border border-blue-900 rounded hover:bg-sky-500 hover:border-transparent "
          >
            Update
          </LoadingButton>
        </form>
      </React.Fragment>
      </div>
      </div>
    </>
  );
};

export default CAdEditClass;
