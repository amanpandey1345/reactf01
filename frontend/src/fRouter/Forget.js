import * as React from "react";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";
import { clearErrors, clearMESSAGE, forgotPassword, resetPassword } from "../actions/userAction"; 
import { useEffect } from "react";

const Forget = ({ history }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error1, message1, error, success} = useSelector((state) => state.forgotPassword);

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [emailshow, setEmailshow] = useState(true);
  const [tokenshow, setTokenshow] = useState(false);
  const [cloading, setCLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [cShowPassword, setCshowPassword] = useState(false);

  const resetreq = async (e) => {
    e.preventDefault();
    setCLoading(true);
    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      setCLoading(false);
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
    if (error1) {
      setEmail("")
      alert.error(error1,{
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
    if (message1) {
      setEmailshow(false);
      setTokenshow(true);
      setCLoading(false);
      alert.success(message1,{
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
      dispatch(clearMESSAGE());
    }
    if (success=== true) {
      history.push("/login");
      setCLoading(false);
      alert.success("New Password update successfully...", {
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

    }
  }, [message1,clearMESSAGE,dispatch, error1,error,success]);

  const reset = async (e) => {
    e.preventDefault();
    setCLoading(true);
    const myForm = new FormData();
    
    myForm.set("token", token);
    myForm.set("password", password);
    myForm.set("cpassword", cpassword);
    dispatch(resetPassword( myForm));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickcShowPassword = () => {
    setCshowPassword(!cShowPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-200 ">
        <div className="flex flex-col items-center h-screen p-10 bg-white rounded-lg md:w-1/3 h-1/2">
          <img src={"/artBoard1.png"} className="mb-3 w-44" />
          <h2 className="mb-2 text-3xl font-bold ">Forget Password </h2>
          {emailshow ? (
            <div className="flex w-full h-auto mb-5 bg-gray-100 rounded-lg j1ustify-center">
              <form action="" className="flex flex-col w-full h-auto p-2 ">
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="w-full mb-2"
                >
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    variant="standard"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    className="hover:outline-blue-900"
                  />
                </Box>
                <LoadingButton
                  onClick={resetreq}
                  loading={cloading}
                  variant="outlined"
                  className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 bg-transparent border border-blue-900 rounded hover:bg-blue-900 hover:text-white hover:border-transparent "
                >
                  Verify
                </LoadingButton>
              </form>
            </div>
          ) : (
            ""
          )}
          {tokenshow ? (
            <div className="flex flex-col justify-center w-full h-auto bg-gray-100 rounded-lg">
              <form action="" className="flex flex-col w-full h-auto p-2 ">
                <TextField
                  id="standard-basic"
                  label="Token no."
                  variant="standard"
                  name="token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <FormControl variant="filled">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={cShowPassword ? "text" : "password"}
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    name="cpassword"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickcShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {cShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <LoadingButton
                  onClick={reset}
                  loading={cloading}
                  variant="outlined"
                  className="w-40 px-4 py-2 m-2 font-semibold text-blue-900 bg-transparent border border-blue-900 rounded hover:bg-blue-900 hover:text-white hover:border-transparent "
                >
                  Reset
                </LoadingButton>
              </form>
            </div>
          ) : (
            ""
          )}
          <Link to={"/login"}>
            <a className="m-4 font-medium text-blue-900 text-md hover:underline">
              login.
            </a>
          </Link>
        </div>
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
    </>
  );
};

export default Forget;
