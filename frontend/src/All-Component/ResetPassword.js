import styles from "./Css/Sign_Up.module.css";
import { useState, useEffect } from "react";
import { clearErrors, resetPassword  } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import Loader from "./Loader";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MetaData from "./Header/MetaData";

const ResetPassword = ({history,match}) => {

    const dispatch = useDispatch();
  // const alert = useAlert();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(match.params.token, myForm));
  };

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
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

    if (success) {
      alert.success("Password Updated Successfully",{
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

      history.push("/login");
    }
  }, [dispatch, error, alert, history, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData title="Reset Password" />
        <div className={styles.Sign_Up}>
          <form onSubmit={resetPasswordSubmit}>
            <h3> Change Password </h3>
            
            <label for="Password">
              New Password <span className={styles.Star}> * </span>
            </label>
            <br />
            <input
              class="input-field"
              type="Password"
              placeholder="New Password"
              title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$"

              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label for="Password">
              confirm Password <span className={styles.Star}> * </span>
            </label>
            <br />
            <input
              class="input-field"
              type="Password"
              placeholder="confirm Password"
              title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$"

              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            {/* <span>  <input type="checkbox" /> Show Password <br/> </span> */}
            <p className={styles.btn}>
              <button type="submit" name="Register" value="Update">
                Update
              </button>
            </p>
    
    
          </form>
        </div>
        </>
      )}
                <ToastContainer
            position="top-center"
            autoClose={10000}
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
  )
}

export default ResetPassword