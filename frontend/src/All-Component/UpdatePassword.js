
import styles from "./Css/Sign_Up.module.css";
import { useState, useEffect } from "react";
import { clearErrors, updatePassword } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import Loader from "./Loader";
import { UPDATE_PASSWORD_RESET } from "../constants/userConstants";
import MetaData from "./Header/MetaData";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePassword = ({ history }) => {
    const dispatch = useDispatch();
    // const alert = useAlert();
  
    const { error, isUpdated, loading } = useSelector((state) => state.profile);
  
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
  
    const updatePasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("oldPassword", oldPassword);
      myForm.set("newPassword", newPassword);
      myForm.set("confirmPassword", confirmPassword);
  
      dispatch(updatePassword(myForm));
    };
    // console.log(oldPassword);
    // console.log(newPassword);
    // console.log(confirmPassword);
  
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
  
      if (isUpdated) {
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
  
        history.push("/account");
  
        dispatch({
          type: UPDATE_PASSWORD_RESET,
        });
      }
    }, [dispatch, error, alert, history, isUpdated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData title="Update Password" />
        <div className={styles.Sign_Up}>
          <form onSubmit={updatePasswordSubmit}>
            <h3> Change Password </h3>
            <label for="Password">
              Old Password <span className={styles.Star}> * </span>
            </label>
            <br />
            <input
              class="input-field"
              type="Password"
              placeholder="Old Password"
              title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$"

              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <br />
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              <button type="submit" name="Register" value="Change">
                Change
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
  );
};

export default UpdatePassword;
