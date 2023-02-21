import React from 'react'
import "./transactions.css"

import { useEffect } from "react";
import store from "../store";
import { getDepositUser, getWithdrawalUser} from '../actions/userAction';
import { useSelector} from "react-redux";
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
// import { useAlert } from "react-alert";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transactions = ({history}) => {

    // const alert = useAlert();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { Dloading, getdeposit } = useSelector((state) => state.getdeposits);
  const { Wloading, getwithdrawal } = useSelector((state) => state.getwithdrawals);

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
    store.dispatch(getWithdrawalUser())
    store.dispatch(getDepositUser())
    if (isAuthenticated === false) { 
      history.push("/login");
      alert.error("login to access...",{
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
  }, [alert,history,isAuthenticated]); 

  return (
    <>
    <MetaData title={`All Transaction's`} />
    <div className="maintrans">
        <div className="maindepo">
        <h4>Deposit</h4>
        <>
      {Dloading ? (
        <Loader />
      ) : (
        <>
  
          {getdeposit.deposits &&
            getdeposit.deposits
              .slice(0)
              .reverse()
              .map((deposits) => (
                <div className="diposit1" key={deposits.createdAt}>

                  <div>
                    <h5>Transaction ID / UTR</h5>
                    <p>{deposits.paymentId}</p>
                  </div>
                  <div>
                    <h5>Payment Method</h5>
                    <p>{deposits.PaymentMethod}</p>
                  </div>
                  <div>
                    <h5>Deposit Amount</h5>
                    <p>₹{deposits.DAmount}</p>
                  </div>
                  <div>
                    <h5>Deposit Status</h5>
                    <p>{deposits.DStatus}</p>
                  </div>
                  <div>
                    <h5>Deposit Request</h5>
                    <p>{new Date(deposits.createdAt).toLocaleDateString()}</p>
                    <p>{new Date(deposits.createdAt).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
        </>
      )}
    </>

        </div>
        <div className="mainwithdra">
        <h4>Withdrawal</h4>
        <>
      {Wloading ? (
        <Loader />
      ) : (
        <>
  
          {getwithdrawal.withdrawals &&
            getwithdrawal.withdrawals
              .slice(0)
              .reverse()
              .map((withdrawals) => (
                <div className="diposit1" key={withdrawals.createdAt}>

                  <div>
                    <h5>Mobile Number</h5>
                    <p>{withdrawals.Mobile}</p>
                  </div>
                  {withdrawals.tId ? <div>
                    <h5> UTR / UPI Ref : No</h5>
                    <p>{withdrawals.tId}</p>
                  </div> : ""}
                  <div>
                    <h5>Payment Method</h5>
                    <p>{withdrawals.PaymentMethod}</p>
                  </div>
                  <div>
                    <h5>Withdrawal Amount</h5>
                    <p>₹{withdrawals.WAmount}</p>
                  </div>
                  <div>
                    <h5>Withdrawal Status</h5>
                    <p>{withdrawals.WStatus}</p>
                  </div>
                  <div>
                    <h5>Withdrawal Request </h5>
                    <p>{new Date(withdrawals.createdAt).toLocaleDateString()}</p>
                    <p>{new Date(withdrawals.createdAt).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
        </>
      )}
    </>


        </div>
    </div>
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

export default Transactions