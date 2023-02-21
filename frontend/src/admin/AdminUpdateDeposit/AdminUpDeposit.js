import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "../AdminUpdateUsers/AdPo.css"
import { FormControl } from "@mui/material";
import {clearErrors, AdminUpdateDeposit1 } from "../../actions/userAction";
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect } from "react";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_DEPOSIT_RESET } from "../../constants/userConstants"

const AdminUpDeposit = () => {

  const dispatch = useDispatch()
  const [id, setId] = useState()
  const { error, isUpdated, loading} = useSelector((state)=> state.AdminUpdateDeposite);
  const [user, setUser] = useState({
    DStatus: "",
  });


  const { DStatus } = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    
    if(id.length === 24){
      const myForm = new FormData();
      myForm.set("DStatus", DStatus);
      dispatch(AdminUpdateDeposit1(id,myForm));

    } else{
      alert.warn("Id is wrong...",{
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

    alert.success("Withdrawal Updated Successfully",{
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



  const registerDataChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });

  };
  // console.log(id);

  const registerDataidChange = (e) => {
    setId(e.target.value)


  };

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


      dispatch({ type: UPDATE_DEPOSIT_RESET });
    }
    
  }, [dispatch, error, alert ]) 

  return (
    <>
      <div className="AdUp">
        <h2>Update Deposit Status</h2>
      <form encType="multipart/from-data" onSubmit={registerSubmit}>
        <div className="textfield">
        <TextField
          id="fullWidth"
          label="Deposit Id"
          variant="standard"
          name="id"
          value={id}
          required
          fullWidth

          onChange={registerDataidChange}
        />
        </div>
        <div className="switch">
        <FormControl fullWidth> 
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={DStatus}
          name="DStatus"
          label="DStatus"
          required
          onChange={registerDataChange}
        >
          {/* <MenuItem value="Pending">Pending</MenuItem> */}
          <MenuItem value="Success">Success</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div className="btn">
        <Button type="submit" name="update" value="update" variant="contained" fullWidth size="large" disabled={isUpdated} >
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

export default AdminUpDeposit;
