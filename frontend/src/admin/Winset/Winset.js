import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "../AdminUpdateUsers/AdPo.css";
import { FormControl } from "@mui/material";
import { clearErrors, AdminUpdateWinset , AdminUpdateBetDone, createShowhistory} from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_WINSET_RESET ,ALL_BETDONE_RESET} from "../../constants/userConstants";

const Winset = () => {
  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.UpdateWinset
  );
  const { isUpdated1} = useSelector(
    (state) => state.AdminUpdateBet
  );
  const [user, setUser] = useState({
    Name: "",
    Times: "",
  });

  const { Name, Times } = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    const myForm1 = new FormData();
    myForm.set("Name", Name);
    myForm.set("Times", Times);
    myForm1.set("Name", Name);
    myForm1.set("Times", Times);
    dispatch(AdminUpdateWinset(myForm));
    dispatch(createShowhistory(myForm1));

    dispatch(AdminUpdateBetDone());

  };

  if (isUpdated) {
    alert.success("Winner Updated Successfully",{
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

  useEffect(() => {
    if (error) {
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

      dispatch({ type: UPDATE_WINSET_RESET });
    }
    if (isUpdated1) {
      // alert.success("User Updated Successfully");

      dispatch({ type: ALL_BETDONE_RESET });
    }
  }, [dispatch, error, alert]); 

  return (
    <>
      <div className="AdUp">
        <h2>Update winner</h2>
        <form encType="multipart/from-data" onSubmit={registerSubmit}>
          <div className="switch">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Bet Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Name}
                name="Name"
                label="Bet Name"
                required
                onChange={registerDataChange}
              >
                <MenuItem value="Bike">Bike</MenuItem>
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Ship">Ship</MenuItem>
                <MenuItem value="Spiderman">Spiderman</MenuItem>
                <MenuItem value="Aeroplane">Aeroplane</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Unicorn">Unicorn</MenuItem>
                <MenuItem value="Laptop">Laptop</MenuItem>
                <MenuItem value="Tajmahal">Tajmahal</MenuItem>
                <MenuItem value="Lion">Lion</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="switch">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Times</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Times}
                name="Times"
                label="Times"
                required
                onChange={registerDataChange}
              >
                <MenuItem value="2">X2</MenuItem>
                <MenuItem value="4">X4</MenuItem>
                <MenuItem value="5">X5</MenuItem>
                <MenuItem value="6">X6</MenuItem>
                <MenuItem value="8">X8</MenuItem>
                <MenuItem value="10">X10</MenuItem>
              </Select>
            </FormControl>
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

export default Winset;
