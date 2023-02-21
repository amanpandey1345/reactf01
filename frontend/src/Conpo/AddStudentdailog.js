import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import PropTypes from "prop-types";

import { NumericFormat } from "react-number-format";

import TextField from "@mui/material/TextField";

import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { getAllUsers, UserDelete } from "./../actions/userAction";
import { createClass, getClasses ,createStudent,getStudents} from "./../actions/userAction";
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

export default function AddStudentdailog({
  title,
  icons,
}) {
  const [open, setOpen] = React.useState(false);
  
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
  const {id } = useParams()
  // ScholerNo,AdmissionId,Classid
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.NewStudent);
  const [classname, setClassName] = useState("");


  const [loading, setLoading] = useState(false);


  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const myForm = new FormData();

    myForm.set("ScholerNo", classname);
    myForm.set("Classid", id);
    dispatch(createStudent(myForm));
  };
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

    dispatch(clearMESSAGE());   
    store.dispatch(getStudents(id));

  }

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
              Student Information
            </Typography>
            <form onSubmit={handleCreate}>
            <Grid container spacing={6} marginBottom={3}  >
            <Grid item xs={12} sm={24}>
                <TextField
                  required
                  id="class"
                  name="classname"
                  label="Scholer No"
                  value={classname}
                  fullWidth
                  onChange={(e) => setClassName(e.target.value)}
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
