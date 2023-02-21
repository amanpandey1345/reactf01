import styles from "../Css/Bet.module.css";
import ComputerBike from "../Bet-Images-Computer/ComputerBike.jpg";
import MobileBike from "../Bet-Images-Mobile/MobileBike.jpg";
import React, { useState } from "react";
// import { useAlert } from "react-alert";
import {
  clearErrors,
  createBet,
  updateBalance,
  loadUser,
  getShowtime,
} from "../../actions/userAction";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader";
import MetaData from "../Header/MetaData";

import { UPDATE_BALANCE_RESET } from "../../constants/userConstants";
import store from "../../store";

const Bike_Bet = ({ history }) => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { showtime } = useSelector((state)=> state.GetShowTime.showtime);

  const { loading, error, isUpdated } = useSelector(
    (state) => state.userbalance
  );


  const [nums, setNums] = useState();
  const [bet, setBet] = useState(0);
  const [balance, setBalance] = useState();

  // console.log(nums);
  // console.log(bet);
  // console.log(balance);
  const betName = "Bike";
  const mImage =
    "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812770/M%20pic/MobileBike_ihnomw.jpg";
  const cImage =
    "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812600/C%20pic/ComputerBike_bqrbjk.jpg";

  const registerSubmit = () => {
    let start = new Date(showtime.Start)
    let end = new Date(showtime.End)
    let nT = new Date()
    if (nums <= bet) {
      alert.error('🦄"Sorry , insufficient balance"!',{
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
    } else if (start.getTime() > nT.getTime()) {
      alert.error("Sorry , Please Check show time",{
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
    } else if (end.getTime() < nT.getTime()) {
      alert.error("Sorry , Please Check show time",{
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
    } else if (bet == 0) {
      alert.warn("Sorry , Please Select Betting Amount",{
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
    } else if (bet > nums) {
      alert.warn("Sorry , insufficient balance",{
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
      setBalance(nums - bet);
      const myForm = new FormData();
      const myBalance = new FormData();
      myForm.set("betName", betName);
      myForm.set("betAmount", bet);
      myForm.set("mImage", mImage);
      myForm.set("cImage", cImage);
      myBalance.set("balance", nums - bet);
      dispatch(createBet(myForm));
      dispatch(updateBalance(myBalance));

      alert.success("Betting successfully done...",{
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
      if (isAuthenticated) {
        history.push("/show");
        // window.location.reload();
      }
    }
  };

  const one = () => {
    setBet(10);
  };
  const two = () => {
    setBet(20);
  };
  const three = () => {
    setBet(50);
  };
  const four = () => {
    setBet(100);
  };
  const five = () => {
    setBet(200);
  };
  const six = () => {
    setBet(500);
  };
  const seven = () => {
    setBet(1000);
  };
  const eight = () => {
    setBet(2000);
  };

  useEffect(() => {
    // myDiv()
    window.scrollTo({top:0,behavior:'smooth'});
    if (user) {
      setNums(user.balance);
    }
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
    if (!isAuthenticated) {
      alert.warn("Please Login then you can bet",{
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
      history.push("/dashboard");
    }

    setInterval(() => {
    
      store.dispatch(getShowtime())
    }, 1000);

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
  }, [dispatch, error, alert, history, isUpdated, isAuthenticated, loadUser]);

  return (
    //    bet area code here start

    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Bike Bet`} />
          <div className={styles.bet_background}>
            <div className={styles.bet_back}>
              <div className={styles.bet_image}>
                <img
                  src={ComputerBike}
                  alt="Bike"
                  className={styles.Computer}
                />
                <img src={MobileBike} alt="B" className={styles.Mobile} />
              </div>

              <div className={styles.bet_amount}>
                <h3> BET AMOUNTS </h3>
                <p> &#x20B9; {bet}.00</p>
                <button onClick={registerSubmit}> BET </button>
              </div>
            </div>

            <div className={styles.bet_coin}>
              <div>
                <button onClick={one}> 10 </button>
                <button onClick={two}> 20 </button>
                <button onClick={three}> 50 </button>
                <button onClick={four}> 100 </button>
              </div>

              <div></div>
              <button onClick={five}> 200 </button>
              <button onClick={six}> 500 </button>
              <button onClick={seven}> 1000 </button>
              <button onClick={eight}> 2000 </button>
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
      )}
    </>
  );
};

export default Bike_Bet;
