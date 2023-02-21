import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./AdPo.css";
// import { FormControl } from "@mui/material";
import {clearErrors, AdminUpdateShowTime } from "../../actions/userAction";
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect } from "react";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_SHOWTIME_RESET } from "../../constants/userConstants"

const AdminShowTime = () => {
  const [start, setStart] = useState(new Date());  
  const [end, setEnd] = useState(new Date());  
  const dispatch = useDispatch()

  const { error, isUpdated, loading} = useSelector((state)=> state.UpdateShowTime);

  const registerSubmit = (e) => {
    e.preventDefault();
    const time1 = new Date(start)
    const end1 = new Date(end)
    if(end1.getTime() !== time1.getTime()){
      const myForm = new FormData();
      myForm.set("Start", start);
      myForm.set("End", end);
      dispatch(AdminUpdateShowTime(myForm));

    } else{
      alert.warn("Starting and Ending Time is same",{
        position:"top-center",
        autoClose:3000,
        hideProgressBar:false,
        newestOnTop:false,
        closeOnClick:true,
        rtl:false,
        draggable:true,
        pauseOnHover:true,
        theme:"dark"
      });
    }

  };

  if (isUpdated) {

    alert.success("Show Time is Updated Successfully",{
      position:"top-center",
      autoClose:3000,
      hideProgressBar:false,
      newestOnTop:false,
      closeOnClick:true,
      rtl:false,
      draggable:true,
      pauseOnHover:true,
      theme:"dark"
    });

  }



  useEffect(() => {

    if(error){
      alert.error(error,{
        position:"top-center",
        autoClose:3000,
        hideProgressBar:false,
        newestOnTop:false,
        closeOnClick:true,
        rtl:false,
        draggable:true,
        pauseOnHover:true,
        theme:"dark"
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {

      dispatch({ type: UPDATE_SHOWTIME_RESET });
    }

  }, [dispatch, error, alert ])

  return (
    <>
      <div className="AdUp">
        <h2>Update Show Time</h2>
        <form encType="multipart/from-data" onSubmit={registerSubmit} >
          <div className="textfield">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props}  fullWidth required />}
                label="Start DateTimePicker"
                value={start}
                onChange={(newValue) => {
                  setStart(newValue);
                }}
                
              />
            </LocalizationProvider>
          </div>
          <div className="switch">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} fullWidth required />}
                label="End DateTimePicker"
                value={end}
                onChange={(newValue) => {
                  setEnd(newValue);
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="btn">
            <Button
              type="submit"
              name="update"
              value="update"
              variant="contained"
              fullWidth
              size="large"
              disabled={isUpdated}
            >
              Update
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default AdminShowTime;
