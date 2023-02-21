import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import axios from "axios";

import {
  createAdmiss,
  clearErrors,
  clearMESSAGE,
} from "./../actions/userAction";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Student Info", "Family Info", "Banck Info", "Address Info"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return "student";
    case 1:
      return "family";
    case 2:
      return "bank";
    case 3:
      return "address";
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout1() {
  const dispatch = useDispatch();
  const { message, error, admission } = useSelector((state) => state.admission);
  const [activeStep, setActiveStep] = React.useState(0);
  const [gander, setGander] = React.useState("");
  const [cast, setCast] = React.useState("");
  const [blood, setBlood] = React.useState("");
  const [civilOrPolice, setCivilOrPoloce] = React.useState("");
  const [nationality, setNationality] = React.useState("");
  const [religion, setReligion] = React.useState("");
  const [bus, setBus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [ppincode, setPpincode] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [state, setState] = React.useState("");
  const [pstate, setPstate] = React.useState("");
  const [city, setCity] = React.useState("");
  const [pcity, setPcity] = React.useState("");

  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(dayjs());

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const [admiss, setAdmiss] = React.useState({
    sName: "",
    sGander: gander,
    sCast: cast,
    castCertiNO: "",
    sReligion: religion,
    sNationality: nationality,
    sDOB: value,
    sDOB1july: value1,
    scholarNo: "",
    SSSMID: "",
    sAdhaarNo: "",
    sTCno: "",
    CivilorPolice: civilOrPolice,
    ParentName: "",
    ParentMobilleNo: "",
    ParentWhatSappNO: "",
    sBloodGroup: blood,
    rationCardNo: "",
    sLastSchool: "",
    sLastClass: "",
    sAdmissClass: "",
    sAdmissYear: value2,
    fName: "",
    mName: "",
    fProf: "",
    mProf: "",
    fOfficeAdre: "",
    mOfficeAdre: "",
    fMobileNo: "",
    mMobileNo: "",
    fIncomeCartif: "",
    mIncomeCartif: "",
    fAnnualIncome: "",
    mAnnualIncome: "",
    nameofSiblingsInSchool: "",
    familyId: "",
    bankName: "",
    accountHolderName: "",
    accountNo: "",
    IFSCcode: "",
    HouseNo: "",
    AddressLine: "",

    pHouseNo: "",
    pAddressLine: "",
  });

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
    // State,
    // pState,
    // City,
    // pCity,

    // PinCode,
    // pPinCode,
    AddressLine,
    pAddressLine,
    HouseNo,
    pHouseNo,
  } = admiss;
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmet = (e) => {
    e.preventDefault();
    setLoading(true);
    const myForm = new FormData();

    myForm.set("sName", sName);
    myForm.set("castCertiNO", castCertiNO);
    myForm.set("scholarNo", scholarNo);
    myForm.set("SSSMID", SSSMID);
    myForm.set("sAdhaarNo", sAdhaarNo);
    myForm.set("sTCno", sTCno);
    myForm.set("ParentName", ParentName);
    myForm.set("ParentMobilleNo", ParentMobilleNo);
    myForm.set("ParentWhatSappNO", ParentWhatSappNO);
    myForm.set("rationCardNo", rationCardNo);
    myForm.set("sLastSchool", sLastSchool);
    myForm.set("sLastClass", sLastClass);
    myForm.set("sAdmissClass", sAdmissClass);
    myForm.set("nameofSiblingsInSchool", nameofSiblingsInSchool);
    myForm.set("mAnnualIncome", mAnnualIncome);
    myForm.set("fAnnualIncome", fAnnualIncome);
    myForm.set("mIncomeCartif", mIncomeCartif);
    myForm.set("fIncomeCartif", fIncomeCartif);
    myForm.set("mMobileNo", mMobileNo);
    myForm.set("fMobileNo", fMobileNo);
    myForm.set("mOfficeAdre", mOfficeAdre);
    myForm.set("fOfficeAdre", fOfficeAdre);
    myForm.set("mProf", mProf);
    myForm.set("fProf", fProf);
    myForm.set("mName", mName);
    myForm.set("fName", fName);
    myForm.set("familyId", familyId);
    myForm.set("bankName", bankName);
    myForm.set("accountHolderName", accountHolderName);
    myForm.set("accountNo", accountNo);
    myForm.set("IFSCcode", IFSCcode);
    myForm.set("State", state);
    myForm.set("pState", pstate);
    myForm.set("City", city);
    myForm.set("pCity", pcity);

    myForm.set("PinCode", pincode);
    myForm.set("pPinCode", ppincode);

    myForm.set("AddressLine", AddressLine);
    myForm.set("pAddressLine", pAddressLine);
    myForm.set("HouseNo", HouseNo);
    myForm.set("pHouseNo", pHouseNo);
    myForm.set("bus", bus);
    myForm.set("religion", religion);
    myForm.set("nationality", nationality);
    myForm.set("civilOrPolice", civilOrPolice);
    myForm.set("blood", blood);
    myForm.set("cast", cast);
    myForm.set("gander", gander);
    myForm.set("DOB", value);
    myForm.set("DOBOn1July", value1);
    myForm.set("AdmissYear", new Date(value2).getFullYear());

    dispatch(createAdmiss(myForm));
  };
  const submitDataChange = (e) => {
    setAdmiss({ ...admiss, [e.target.name]: e.target.value });
  };

  const handleOnChange = async () => {
    if (pincode.length === 6) {
      const { data } = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      setState(data[0].PostOffice[0].State);
      setCity(data[0].PostOffice[0].District);
    }
  };
  const handleOnChange1 = async () => {
    if (ppincode.length === 6) {
      const { data } = await axios.get(
        `https://api.postalpincode.in/pincode/${ppincode}`
      );

      setPstate(data[0].PostOffice[0].State);
      setPcity(data[0].PostOffice[0].District);
    }
  };
  console.log({
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
    AddressLine,
    pAddressLine,
    HouseNo,
    pHouseNo,
  });

  if (error) {
    setLoading(false);

    dispatch(clearErrors());
  }

  if (message) {
    setLoading(false);
    handleNext();

    dispatch(clearMESSAGE());
  }

  React.useEffect(() => {
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
      handleNext();

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
      // store.dispatch(getAllUsers());
    }
  }, [dispatch, message, error, handleNext]);

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      

      <Container component="main" maxWidth="md" sx={{ mb: 4 }}  className="backdrop-blur-md bg-white/30 rounded-md" >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, bgcolor:"transparent"}}
          
          // className="backdrop-blur-md bg-white/10"
        >
          <Typography component="h1" variant="h4" align="center" color={"inherit"}>
            Admission Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Student Admission Form Submited.
                </Typography>
                <Typography variant="subtitle1">
                  Student id is {admission.StudentGId}#2001539. We have emailed
                  your order confirmation, and will send you an update when your
                  order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form onSubmit={handleSubmet}>
                  {getStepContent(activeStep) === "student" && (
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Student Information
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="firstName"
                            name="sName"
                            value={sName}
                            type="text"
                            label="Student Name"
                            onChange={submitDataChange}
                            sx={{ minWidth: 320 }}
                            autoComplete="given-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Gander
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={gander}
                              onChange={(e) => setGander(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"male"}>Male</MenuItem>
                              <MenuItem value={"female"}>Female</MenuItem>
                              <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Cast
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={cast}
                              onChange={(e) => setCast(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Gen"}>Gen</MenuItem>
                              <MenuItem value={"OBC"}>OBC</MenuItem>
                              <MenuItem value={"ST"}>ST</MenuItem>
                              <MenuItem value={"SC"}>SC</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="castCertiNO"
                            value={castCertiNO}
                            type="number"
                            label="Cast Certificate No."
                            onChange={submitDataChange}
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Religion
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={religion}
                              onChange={(e) => setReligion(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"hindu"}>Hindu</MenuItem>
                              <MenuItem value={"muslim"}>Muslim</MenuItem>
                              <MenuItem value={"jain"}>Jain</MenuItem>
                              <MenuItem value={"buddist"}>Buddhist</MenuItem>
                              <MenuItem value={"sikh"}>Sikh</MenuItem>
                              <MenuItem value={"christian"}>Christian</MenuItem>
                              <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Nationality
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={nationality}
                              onChange={(e) => setNationality(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Indian"}>Indian</MenuItem>
                              <MenuItem value={"Nepali"}>Nepali</MenuItem>
                              <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Date of Birth"
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  sx={{ minWidth: 320 }}
                                  variant="standard"
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name={"DOB on 1 July"}
                            type="number"
                            label="DOB on 1 July"
                            value={value1}
                            sx={{ minWidth: 320 }}
                            onChange={(e) => setValue1(e.target.value)}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="scholarNo"
                            value={scholarNo}
                            label="Scholar No"
                            onChange={submitDataChange}
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="SSSMID"
                            value={SSSMID}
                            onChange={submitDataChange}
                            type="number"
                            label="SSSMID"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="sAdhaarNo"
                            label="Adhaar No"
                            onChange={submitDataChange}
                            value={sAdhaarNo}
                            type="number"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="sTCno"
                            value={sTCno}
                            onChange={submitDataChange}
                            type="number"
                            label="TC No"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Civil/Police
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={civilOrPolice}
                              onChange={(e) => setCivilOrPoloce(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Civilian"}>Civilian</MenuItem>
                              <MenuItem value={"Police"}>Police</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="ParentName"
                            label="Parent Name"
                            value={ParentName}
                            onChange={submitDataChange}
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="ParentMobilleNo"
                            value={ParentMobilleNo}
                            onChange={submitDataChange}
                            type="number"
                            label="Parent Mobile No"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="ParentWhatSappNO"
                            value={ParentWhatSappNO}
                            onChange={submitDataChange}
                            type="number"
                            label="Parent Whatsapp No"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Student Blood Group
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={blood}
                              onChange={(e) => setBlood(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"A+"}>A+</MenuItem>
                              <MenuItem value={"A-"}>A-</MenuItem>
                              <MenuItem value={"B+"}>B+</MenuItem>
                              <MenuItem value={"B-"}>B-</MenuItem>
                              <MenuItem value={"AB+"}>AB+</MenuItem>
                              <MenuItem value={"AB-"}>AB-</MenuItem>
                              <MenuItem value={"O+"}>O+</MenuItem>
                              <MenuItem value={"O-"}>O-</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="rationCardNo"
                            value={rationCardNo}
                            onChange={submitDataChange}
                            type="number"
                            label="Ration Card No"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="sLastSchool"
                            value={sLastSchool}
                            onChange={submitDataChange}
                            label="Last School Name"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="sLastClass"
                            value={sLastClass}
                            type="number"
                            onChange={submitDataChange}
                            label="Last Class"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="sAdmissClass"
                            value={sAdmissClass}
                            type="number"
                            onChange={submitDataChange}
                            label="Admission Class"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              views={["year"]}
                              label="Admission Year"
                              value={value2}
                              onChange={(newValue) => {
                                setValue2(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  helperText={null}
                                  variant="standard"
                                  sx={{ minWidth: 320 }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                        {/* <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="secondary"
                                name="bus"
                                value={"Yes"}
                                onChange={submitDataChange}
                              />
                            }
                            label="Bus Service is Required or not."
                          />
                        </Grid> */}
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            variant="standard"
                            sx={{ minWidth: 320 }}
                          >
                            <InputLabel id="demo-simple-select-filled-label">
                              Bus Service is Required or not
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={bus}
                              onChange={(e) => setBus(e.target.value)}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"yes"}>Yes</MenuItem>
                              <MenuItem value={"no"}>No</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  )}
                  {getStepContent(activeStep) === "family" && (
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Family Information
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="firstName"
                            name="fName"
                            value={fName}
                            onChange={submitDataChange}
                            label="Father's Name"
                            sx={{ minWidth: 320 }}
                            autoComplete="given-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="lastName"
                            name="fProf"
                            value={fProf}
                            onChange={submitDataChange}
                            label="Father's Profession"
                            sx={{ minWidth: 320 }}
                            autoComplete="family-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            id="address1"
                            name="fOfficeAdre"
                            value={fOfficeAdre}
                            onChange={submitDataChange}
                            label="Father's Office Address"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping address-line1"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="mName"
                            value={mName}
                            onChange={submitDataChange}
                            label="Mother's Name"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="address2"
                            name="mProf"
                            value={mProf}
                            onChange={submitDataChange}
                            label="Mother's Profession"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping address-line2"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="city"
                            name="mOfficeAdre"
                            value={mOfficeAdre}
                            onChange={submitDataChange}
                            label="Mother's Office Address"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping address-level2"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="state"
                            name="fMobileNo"
                            value={fMobileNo}
                            onChange={submitDataChange}
                            type="number"
                            label="Father's Mobile No."
                            sx={{ minWidth: 320 }}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="zip"
                            name="mMobileNo"
                            value={mMobileNo}
                            type="number"
                            onChange={submitDataChange}
                            label="Mother's Mobile No."
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping postal-code"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="fIncomeCartif"
                            value={fIncomeCartif}
                            type="number"
                            onChange={submitDataChange}
                            label="Father Income Certificate No."
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="mIncomeCartif"
                            value={mIncomeCartif}
                            onChange={submitDataChange}
                            type="number"
                            label="Mother Income Certificate No."
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="fAnnualIncome"
                            value={fAnnualIncome}
                            type="number"
                            onChange={submitDataChange}
                            label="Father Annual Income"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="mAnnualIncome"
                            value={mAnnualIncome}
                            type="number"
                            onChange={submitDataChange}
                            label="Mother Annual Income"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="nameofSiblingsInSchool"
                            value={nameofSiblingsInSchool}
                            onChange={submitDataChange}
                            label="Name of Siblings In School"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="familyId"
                            value={familyId}
                            onChange={submitDataChange}
                            label="Family Id"
                            sx={{ minWidth: 320 }}
                            autoComplete="shipping country"
                            variant="standard"
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  )}
                  {getStepContent(activeStep) === "bank" && (
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Bank Details
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cardName"
                            name="bankName"
                            value={bankName}
                            onChange={submitDataChange}
                            label="Bank Name"
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cardNumber"
                            name="accountNo"
                            value={accountNo}
                            type="number"
                            onChange={submitDataChange}
                            label="Bank Account No."
                            fullWidth
                            autoComplete="cc-number"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cvv"
                            label="IFSC code."
                            name="IFSCcode"
                            value={IFSCcode}
                            onChange={submitDataChange}
                            // helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="expDate"
                            name="accountHolderName"
                            value={accountHolderName}
                            onChange={submitDataChange}
                            label="Account Holder Name"
                            fullWidth
                            autoComplete="cc-exp"
                            variant="standard"
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  )}
                  {getStepContent(activeStep) === "address" && (
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Residentail Address
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cardName"
                            name="HouseNo"
                            value={HouseNo}
                            onChange={submitDataChange}
                            label="House No"
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={9}>
                          <TextField
                            required
                            id="cardNumber"
                            label="Address Line "
                            name="AddressLine"
                            value={AddressLine}
                            onChange={submitDataChange}
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cvv"
                            type={"number"}
                            name="pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            onClick={handleOnChange}
                            label="PinCode"
                            helperText="when you Enter a Pincode "
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cvv"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            label="City"
                            helperText="when you Enter a Pincode "
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cvv"
                            label="State"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                      </Grid>
                      <Typography variant="h6" gutterBottom className="mt-4">
                        Permanent Address
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cardName"
                            name="pHouseNo"
                            value={pHouseNo}
                            onChange={submitDataChange}
                            label="House No"
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={9}>
                          <TextField
                            required
                            id="cardNumber"
                            label="Address Line "
                            name="pAddressLine"
                            value={pAddressLine}
                            onChange={submitDataChange}
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cvv"
                            type={"number"}
                            name="ppincode"
                            value={ppincode}
                            onChange={(e) => setPpincode(e.target.value)}
                            onClick={handleOnChange1}
                            label="PinCode"
                            helperText="when you Enter a Pincode "
                            fullWidth
                            variant="standard"
                          />
                        </Grid>

                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cvv"
                            name="pcity"
                            value={pcity}
                            onChange={(e) => setPcity(e.target.value)}
                            label="City"
                            helperText="when you Enter a Pincode "
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            required
                            id="cvv"
                            label="State"
                            name="pstate"
                            value={pstate}
                            onChange={(e) => setPstate(e.target.value)}
                            fullWidth
                            variant="standard"
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  )}
                </form>

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {activeStep !== steps.length - 1 && (
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )}
                  {activeStep === steps.length - 1 && (
                    // <Button
                    //   variant="outlined"
                    //   onClick={handleNext}
                    //   type={"submit"}
                    //   sx={{ mt: 3, ml: 1 }}
                    // >
                    //   Form Submit
                    // </Button>
                    <LoadingButton
                      type="submit"
                      loading={loading}
                      variant="outlined"
                      onClick={handleSubmet}
                      sx={{ mt: 3, ml: 1 }}
                      className="w-40 px-4 py-2 font-semibold text-blue-900 bg-red-700 border border-blue-900 rounded hover:bg-sky-500 hover:border-transparent "
                    >
                      Form Submit
                    </LoadingButton>
                  )}
                </Box>
              </React.Fragment>
            )}
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
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}
