import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


import {useState , useEffect} from "react"

import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { getAllUsers, UserDelete } from "./../actions/userAction";
import { register,getAllUsers } from "./../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import {
  clearErrors,
  clearMESSAGE,
} from "./../actions/userAction";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PreStaffDailog({names,emails,mobiles,roles,title,ActionD,icons,id,staffIds}) {
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
  const { error,message } = useSelector((state)=> state.userRisg);

  const [showPassword, setShowPassword] = useState(false);
  
  const [role, setRole] = useState('');
  const [staffId, setStaffId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const [check, setCheck] = useState(false);
  // console.log({name,email,password ,role ,mobile});
  const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

//   const handleCreate =async(e)=>{
//     e.preventDefault()
//     setLoading(true)

//       const myForm = new FormData();
//       myForm.set("email", email);
//       myForm.set("name", name);
//       myForm.set("password", password);
//       myForm.set("role", role);
//       myForm.set("mobile", mobile);
//       dispatch(register(myForm));

//   }

  useEffect(() => {
    setEmail(`${emails}`)
      setName(`${names}`)
      setStaffId(`${staffIds}`)

      setRole(`${roles}`)
      setMobile(`${mobiles}`)   

    
  }, [dispatch,  message,error]);
  return (
    <div>
      <Button variant="standard" onClick={(e)=>{handleClickOpen(e)}}>
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
          Staff Information
        </Typography>
        <Grid container spacing={3} marginBottom={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="StaffId"
            //   name="name"
              label="Staff Id"
              value={staffId}
              type={"text"}
              fullWidth


              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Name"
            //   name="name"
              label="Name"
              value={name}
              type={"text"}
              fullWidth


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

              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              required
              id="Name"
            //   name="name"
              label="Role"
              value={role}
              type={"text"}
              fullWidth

              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          
          
        </Grid>
        <LoadingButton
        //   onClick={handleCreate}
          loading={loading}
          variant="standard"
          disabled="true"
          className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 bg-red-700 border border-blue-900 rounded hover:bg-blue-900 hover:text-white hover:border-transparent "

        >
          view
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
