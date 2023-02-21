import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { useState, useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { getAllUsers, UserDelete } from "./../actions/userAction";
import { getAllUsers } from "./../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import { clearErrors, clearMESSAGE } from "./../actions/userAction";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


import { UPDATE_PROFILE_RESET } from "./../constants/userConstants";

import { updateProfile } from "./../actions/userAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditeStaffDailog({
  names,
  emails,
  mobiles,
  roles,
  title,
  ActionD,
  icons,
  id,
  statuss
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

  //   const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading, message } = useSelector(
    (state) => state.profile
  );

  const [showPassword, setShowPassword] = useState(false);

  const [role, setRole] = useState(`${roles}`);
  const [name, setName] = useState(`${names}`);
  const [email, setEmail] = useState(`${emails}`);
  const [mobile, setMobile] = useState(`${mobiles}`);
  const [status, setStatus] = useState(`${statuss}`);

  const [loading1, setLoading1] = useState(false);
  // const [check, setCheck] = useState(false);
  // console.log({name,email,password ,role ,mobile});
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading1(true);

    const myForm = new FormData();
    myForm.set("email", email);
    myForm.set("name", name);
    myForm.set("role", role);
    myForm.set("mobile", mobile);
    myForm.set("status", status);
    dispatch(updateProfile(myForm, id));
  };
  
  if (message) {
    setLoading1(false);
    setOpen(false);
    setEmail("");
    setName("");
    setStatus("")
    setRole("");
    setMobile();
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
    store.dispatch(getAllUsers());
}
if (error) {
  setLoading1(false);
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
  store.dispatch(clearMESSAGE());
  dispatch(clearErrors());
  store.dispatch(getAllUsers());
  dispatch(UPDATE_PROFILE_RESET());
}

  useEffect(() => {
    if (error) {
      store.dispatch(clearMESSAGE());
      setLoading1(false);

      dispatch(clearErrors());
      dispatch(UPDATE_PROFILE_RESET()); 
    }
    if (message) {
      store.dispatch(clearMESSAGE());
        setLoading1(false);
        setOpen(false);
        setEmail("");
        setName("");
        setStatus("")
        setRole("");
        setMobile();
       

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
              {`Update ${names} Profile`}
            </Typography>
            <Grid container spacing={3} marginBottom={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Name"
                  //   name="name"
                  label="Name"
                  value={name}
                  type={"text"}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Eamil"
                  //   name="email"
                  label="Eamil"
                  fullWidth
                  value={email}
                  type={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="MobileNo"
                  //   name="mobile"
                  label="Mobile No."
                  fullWidth
                  value={mobile}
                  type={"tel"}
                  onChange={(e) => setMobile(e.target.value)}
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Staff Role
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={role}
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"teacher"}>Teacher</MenuItem>
                    <MenuItem value={"head"}>Head</MenuItem>
                    <MenuItem value={"pro"}>Pro</MenuItem>
                    <MenuItem value={"account"}>Account</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Staff Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={status}
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <LoadingButton
              onClick={handleCreate}
              loading={loading1}
              variant="standard"
              className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 bg-red-700 border border-blue-900 rounded hover:bg-blue-900 hover:text-white hover:border-transparent "
            >
              Update
            </LoadingButton>
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
