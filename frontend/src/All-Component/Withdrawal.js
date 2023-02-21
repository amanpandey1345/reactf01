import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Css/Sign_Up.module.css";
import { clearErrors, createWithdrawal,updateBalance, loadUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_BALANCE_RESET } from "../constants/userConstants";

const Withdrawal = ({ history }) => {
  const dispatch = useDispatch();

  const { error, isAuthenticated } = useSelector((state) => state.user);
  const { balance } = useSelector((state) => state.user.user);
  const { loading } = useSelector((state) => state.withdrawals); 
  const { isUpdated } = useSelector(
    (state) => state.userbalance
  );



  const [withdrawal, setWithdrawal] = useState({
    Mobile: "",
    WAmount: "",
    PaymentMethod: "",
  });

  const { Mobile, WAmount, PaymentMethod } = withdrawal;



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
      alert.success("Balance update Successfully",{
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
      dispatch(loadUser());
      dispatch({ type: UPDATE_BALANCE_RESET });
    }
    if (!isAuthenticated) {
      history.push("/dashboard");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

  const registerSubmit = (e) => {
    e.preventDefault();
    const check = WAmount;
    const pm = PaymentMethod
    if (balance === check) {
      alert.error("Sorry , balance low",{
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
    } else if (balance === 0) {
      alert.error("Sorry , Please insufficient balance",{
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
    } else if (balance <= check) {
      alert.error("Sorry , insufficient balance",{
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
    } else if (!pm) {
      alert.error("Sorry , Please select Payment Method",{
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
    } else if (check < 199) {
      alert.error("Sorry , you can withdrawal 200 and 200 above",{
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
    } else {
      const myForm = new FormData();
      const myBalance = new FormData();
      myForm.set("Mobile", Mobile);
      myForm.set("WAmount", WAmount);
      myForm.set("PaymentMethod", PaymentMethod);
      myBalance.set("balance", balance - check);
      dispatch(createWithdrawal(myForm));
      dispatch(updateBalance(myBalance));
      if (isAuthenticated) {
        history.push("/transactions");
        // window.location.reload()
      }
    }
  };
  // console.log(Mobile);

  const registerDataChange = (e) => {
    setWithdrawal({ ...withdrawal, [e.target.name]: e.target.value });

  };

  return (
    <>
    {loading ? <Loader/> : (
        <>
        <MetaData title="Withdrawals Money" />
        <div className={styles.Sign_Up}>
          <form encType="multipart/from-data" onSubmit={registerSubmit}>
            <h3> Withdrawal Money </h3>
            <label for="Name">
              
              Mobile Number  <span className={styles.Star}> * </span>
            </label>
            <br />
            <input
              class="input-field"
              type="tel"
              placeholder="Enter Your 10 Digit Mobile Number"
              title="Enter Your 10 Digit Mobile Number 1234567890 "
              name="Mobile"
              pattern="[0-9]{10}"
              required
              value={Mobile}
              onChange={registerDataChange} 
            />
            <br />

            <label for="Name"> Payment Method <span className={styles.Star}> *  </span> </label> <br/>       

            <select class="Payment_options" value={PaymentMethod} name="PaymentMethod" onChange={registerDataChange} >
              <option value=""> Select </option>
              <option value="Phone Pe"> Phone Pe </option>
              <option value="Google Pay"> Google Pay </option>
              <option value="Paytm"> Paytm </option>
              <option value="Amazon Pay"> Amazon Pay </option>
              <option value="Bhim"> Bhim </option>
              {/* <option value="Airtel Money"> Airtel Money </option> */}
              <option value="Others"> Others </option>
            </select> <br/>

            <label for="Name">
              
              Withdrawal Amounts <span className={styles.Star}> * </span>
            </label>
            <br />
            <input
              class="input-field"
              type="number"
              placeholder="Withdrawal Amount"
              title="Enter Your Deposit Amount"
              name="WAmount"
              required
              value={WAmount}
              onChange={registerDataChange}
            />
            <br />
            <p>
              
              <span>
                
                <input type="checkbox" required />
              </span>
              I read and agree <Link to="/Withdrawalsp">Withdrawals Policy </Link> /
              <Link to="/Payment"> Payment Policy. </Link>
            </p>
            <p className={styles.btn}>
              <button type="submit" name="Deposit" value="Deposit">
                
                Withdrawal
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

export default Withdrawal;
