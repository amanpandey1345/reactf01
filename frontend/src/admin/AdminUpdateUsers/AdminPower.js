import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./AdPo.css"
import { FormControl } from "@mui/material";
import {clearErrors, AdminUpdateUser1 } from "../../actions/userAction";
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect } from "react";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_ADUSER_RESET } from "../../constants/userConstants"

const AdminPower = () => {

  const dispatch = useDispatch()
  const [id, setId] = useState()
  const { error, isUpdated, loading} = useSelector((state)=> state.AdminUpdateUser);
  const [user, setUser] = useState({
    role: "",
  });

  // console.log(user);

  const { role } = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    
    if(id.length === 24){
      const myForm = new FormData();
      myForm.set("role", role);
      dispatch(AdminUpdateUser1(id,myForm));

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
    alert.success("User Updated Successfully",{
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
  console.log(id);

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
      // alert.success("User Updated Successfully");

      dispatch({ type: UPDATE_ADUSER_RESET });
    }
    
  }, [dispatch, error, alert ]) 

  return (
    <>
      <div className="AdUp">
        <h2>Update User Role</h2>
      <form encType="multipart/from-data" onSubmit={registerSubmit}>
        <div className="textfield">
        <TextField
          id="fullWidth"
          label="User Id"
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
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          name="role"
          label="Role"
          required
          onChange={registerDataChange}
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div className="btn">
        <Button type="submit" name="update" value="update" variant="contained" fullWidth size="large">
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

export default AdminPower;
