import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { getSess} from "./../actions/userAction";
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
import { createSession, getAllUsers } from "./../actions/userAction";
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

export default function AddSessiondailog({
  ContectD,
  title,
  ActionD,
  icons,
  id,
}) {
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
  const { error, message } = useSelector((state) => state.session);




  const [startYear, setStartYear] = useState("");

//   const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const [loading, setLoading] = useState(false);

  // console.log(new Date(startYear).getFullYear());
  // console.log(new Date(endYear).getFullYear());
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(new Date(startYear).getFullYear());
    const myForm = new FormData();

    myForm.set("startYear", new Date(startYear).getFullYear());
    myForm.set("endYear", new Date(endYear).getFullYear());
    dispatch(createSession(myForm));
  };
  // if (error) {
  //   setLoading(false);

  //   dispatch(clearErrors());
  // }

  // if (message) {
  //   setLoading(false);
  //   setOpen(false);

  //   dispatch(clearMESSAGE());

  // }

  useEffect(() => {
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
      store.dispatch(getSess());
      dispatch(clearMESSAGE());
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
              Session Information
            </Typography>
            <form onSubmit={handleCreate}>
            <Grid container spacing={3} marginBottom={3}>

              <Grid item xs={12} sm={6}>
   
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
 