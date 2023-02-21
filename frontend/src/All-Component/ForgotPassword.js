import styles from "./Css/Sign_Up.module.css";
import { useState, useEffect } from "react";
import { clearErrors, forgotPassword } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgotPassword = () => {
    const dispatch = useDispatch();
    // const alert = useAlert();
  
    const { error, message, loading } = useSelector(
      (state) => state.forgotPassword
    );
  
    const [email, setEmail] = useState("");
  
    const forgotPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("email", email);
      dispatch(forgotPassword(myForm));
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
  
      if (message) {
        alert.success(message,{
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
    }, [dispatch, error, alert, message]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData title="Forgot Password" />
        <div className={styles.Sign_Up}>
          <form onSubmit={forgotPasswordSubmit}>
            <h3> Forgot Password </h3>
            <label for="Email">
              
              Email <span className={styles.Star}> * </span>
            </label>
            <br />
            <input
              class="input-field"
              type="email"
              placeholder="Email"
              title="Enter Your Email"
              name="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* <span>  <input type="checkbox" /> Show Password <br/> </span> */}
            <p className={styles.btn}>
              <button type="submit" name="Register" value="Send">
                Send
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

export default ForgotPassword;
