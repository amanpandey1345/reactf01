import * as React from "react";

import DialogContentText from "@mui/material/DialogContentText";

import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllUsers, UserDelete } from "./../../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store";
import {
  clearErrors,
  clearMESSAGE,
} from "./../../actions/userAction";
import { useState, useEffect } from "react";

const CstaffDelete = ({ id }) => {

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
    dispatch(UserDelete(myForm));  
  };
  // console.log(id[1]); 
  useEffect(() => {

    // console.log(id);
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
      // store.dispatch(getAllUsers());
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
  }, [dispatch, message, error]);
  return (
    <>
      <React.Fragment>
        <div className="w-auto h-20 mt-2">
          <DialogContentText
            id="alert-dialog-slide-description"
            className="mb-2"
          >
            {id}
            Are you sure want to delete  ?
          </DialogContentText>

          <LoadingButton
            onClick={(e)=>{handleDelete(e)}}
            loading={loading}
            variant="outlined"
            className=""
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
    </>
  );
};

export default CstaffDelete;
