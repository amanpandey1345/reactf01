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
import { useParams } from "react-router-dom";

import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { getAllUsers, UserDelete } from "./../actions/userAction";
import {
  getClasses,
  createStudent,
  getStudents,
} from "./../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import { clearErrors, clearMESSAGE } from "./../actions/userAction";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LoadingButton from "@mui/lab/LoadingButton";

import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

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

export default function PayFeeDailog({ title, icons }) {
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
  const { id } = useParams();
  // ScholerNo,AdmissionId,Classid
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.NewStudent);
  const [amount, setAmount] = useState();
  const [receipt, setReceipt] = useState();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const myForm = new FormData();

    myForm.set("ScholerNo", amount);
    myForm.set("Classid", receipt);
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
      color="warning"
        variant="contained"
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
              <Grid container spacing={6} marginBottom={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    type={"number"}
                    id="city"
                    name="receiptNo"
                    label="Receipt No"
                    value={receipt}
                    fullWidth
                    onChange={(e) => setReceipt(e.target.value)}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={24}>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">
                      Amount
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">₹</InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                loading={loading}
                variant="outlined"
                className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 border border-blue-900 rounded bg-green-00 hover:bg-sky-500 hover:border-transparent "
              >
                Pay
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
