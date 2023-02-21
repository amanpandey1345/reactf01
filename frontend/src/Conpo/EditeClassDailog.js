import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import { NumericFormat } from "react-number-format";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";

import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { getAllUsers, UserDelete } from "./../actions/userAction";
import { createClass, getClasses,getClas} from "./../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import { clearErrors, clearMESSAGE } from "./../actions/userAction";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LoadingButton from "@mui/lab/LoadingButton";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditeClassDailog({
  title,
  icons,
  id,
  Texam,
  Tmonths, 
  EYear,
  SYear,
  CExamF,
  PExamF,
  CMTF,
  PMTF,
  PAnnualF,
  CAnnualF,
  Discount,ClassId,
  Cteacher,
  Cmedium,
  Csubject,
  Cname,
  TFeeObj,
  T3FeeS,
  T2FeeS,
  T1FeeS,
  LateFee,


}) {
  const { classs  } = useSelector((state) => state.getClasses.getClass);
  classs && classs.forEach((classs, index)=>{
    if(classs._id === id){ 
      setClassName(`${classs.Cname}`)
      setPoliceEFee(classs.PFee.ExamFee)
      setPoliceMFee(classs.PFee.MTfee)
      setPoliceAnnualFee(classs.PFee.AnnualFee)
      setCivilEFee(classs.CFee.ExamFee)
      setCivilMFee(classs.CFee.MTfee)
      setLateFee(classs.LateFee)
      setDiscountPercentage(classs.Dpercent)
      setCivilAnnualFee(classs.CFee.AnnualFee)
      setTotalFeeS(classs.TFeeObj)
      setTerm3FeeS(classs.T3FeeS)
      setTerm2FeeS(classs.T2FeeS)
      setTerm1FeeS(classs.T1FeeS)
      setEndYear(classs.Eyear)
      setStartYear(classs.Syear)
      setTotalExam(classs.Texam)
      setTotalMonth(classs.Tmonths)
      setClassSubject(classs.Csubject)
      setClassMedium(classs.Cmedium)
      setClassTeacher(classs.Cteacher)
      
    }
})
  const [open, setOpen] = React.useState(false);
  //   const id = "63259dd1e7917fdf0a6901d3"
  const handleClickOpen = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(false);
  };
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.classes);

  const [classname, setClassName] = useState();
  const [value1, setValue1] = useState("");

  const [classteacher, setClassTeacher] = useState();
  const [classmedium, setClassMedium] = useState();
  const [classsubject, setClassSubject] = useState();
  const [totalMonth, setTotalMonth] = useState();
  const [totalExam, setTotalExam] = useState();
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
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
    console.log(new Date(startYear).getFullYear());
    const myForm = new FormData();
    myForm.set("Cname", classname);
    myForm.set("Cmedium", classmedium);
    myForm.set("Csubject", classsubject);
    myForm.set("Cteacher", classteacher);
    myForm.set("Tmonths", totalMonth);
    myForm.set("Texam", totalExam);
    myForm.set("Syear", new Date(startYear).getFullYear());
    myForm.set("Eyear", new Date(endYear).getFullYear());
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

    dispatch(createClass(myForm));
  };
  if (error) {
    setLoading(false);

    dispatch(clearErrors());
  }

  if (message) {
    setLoading(false);
    setOpen(false);
    //   setEmail("")
    //   setName("")
    //   setPassword("")
    //   setRole("")
    //   setMobile()
    dispatch(clearMESSAGE());
    store.dispatch(getClasses());

  }

  useEffect(() => {
    // store.dispatch(getClas());
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
      dispatch(clearErrors());
    }

    if (message) {
      setLoading(false);
      setOpen(false);
      //   setEmail("")
      //   setName("")
      //   setPassword("")
      //   setRole("")
      //   setMobile()

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
      dispatch(clearMESSAGE());
      store.dispatch(getClasses());
    }
  }, [dispatch, message, error]);
  return (
    <div>
      <Button
        variant="standard"
        onClick={(e) => {
          handleClickOpen(e);
        }}
      >
        {icons}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>

          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Class Information
            </Typography>
            <form onSubmit={handleCreate}>
            <Grid container spacing={3} marginBottom={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                {/* <TextField
                  required
                  id="city"
                  name="startYear"
                  label="Start year"
                  fullWidth
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  variant="standard"
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["year"]}
                    label="Start year"
                    value={startYear}
                    onChange={(newValue) => {
                      setStartYear(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        id="city"
                        name="startYear"
                        label="Start year"
                        fullWidth
                        // value={startYear}
                        // onChange={(e) => setStartYear(e.target.value)}
                        variant="standard"
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  required
                  id="city"
                  name="endYear"
                  label="End year"
                  fullWidth
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  variant="standard"
                /> */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  views={["year"]}
                  label="End year"
                  value={endYear}
                  onChange={(newValue) => {
                    setEndYear(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      id="city"
                      name="endYear"
                      label="End year"
                      fullWidth
                      // onChange={(e) => setEndYear(e.target.value)}
                      variant="standard"
                    />
                  )}
                />
              </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
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
              required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
              Create
            </LoadingButton>
            </form>
          </React.Fragment>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
