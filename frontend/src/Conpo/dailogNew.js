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
import { getAllUsers, UserDelete } from "./../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import {
  clearErrors,
  clearMESSAGE,
} from "./../actions/userAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DailogNew({ContectD,title,name,icons,id}) {
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
  const { error, message } = useSelector((state) => state.deleteuser);
  const [loading, setLoading] = useState(false);

  const handleDelete = async(e ) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    console.log(id);
    const myForm = new FormData();    
    myForm.set("id", id);
    dispatch(UserDelete(id));  
  };

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


  }, [dispatch, message, error]);

  if (message) {
    setLoading(false);
    store.dispatch(getAllUsers());
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
  }
  return (
    <div>
      <Button  variant="standard" onClick={(e)=>{handleClickOpen(e)}}>
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
        <div className="w-auto h-20 mt-2">
          <DialogContentText
            id="alert-dialog-slide-description"
            className="mb-2"
          >

            Are you sure want to delete {name} ?
          </DialogContentText>

          <LoadingButton
            onClick={(e)=>{handleDelete(e)}}
            loading={loading}
            variant="outlined"
            color='error'
            className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 hover:text-red-600 hover:border-transparent "
          >
            Delete
          </LoadingButton>
        </div>
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
        </DialogContent>

      </Dialog>
    </div>
  );
}
