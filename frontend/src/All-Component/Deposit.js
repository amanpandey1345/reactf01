import * as React from "react";
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Css/Sign_Up.module.css';
import {clearErrors, createDeposit} from "../actions/userAction";
import { useDispatch ,useSelector } from 'react-redux';
import Loader from './Loader';
import MetaData from "./Header/MetaData";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RCGames_QR_Code from './QR_Code/RCGames_QR_Code.png';


const Deposit = ({history}) => {

    const dispatch = useDispatch()
    // const alert = useAlert();
    const {  isAuthenticated } = useSelector((state)=> state.user);
    const { deposit,error } = useSelector((state)=> state.deposits);
    const { loading } = useSelector((state) => state.withdrawals);  
 
    const [deposits1, setDeposits1] = useState({
      paymentId:"",
      DAmount:"",
      PaymentMethod:"",
      
    })
    const { paymentId, DAmount, PaymentMethod} = deposits1;

    
    const depositDataChange = (e)=>{
       
      // setAmt({DAmount})
      setDeposits1({ ...deposits1, [e.target.name]: e.target.value }); 
    }



   

    const depositSubmit=(e)=>{
        e.preventDefault();
        const num = DAmount;
        const pm = PaymentMethod
        if (num <= 99) {
          alert.error("Sorry , you can diposit 100 and 100 above"); 
        } else if (!pm) {
          alert.error("Sorry , Please select Payment Method"); 
        }  else{

          const myForm = new FormData();
  
          myForm.set("paymentId",paymentId);
          myForm.set("DAmount",DAmount);
          myForm.set("PaymentMethod",PaymentMethod);
          dispatch(createDeposit(myForm));

          history.push("/transactions");

          
        }

    }




    useEffect(() => {
      window.scrollTo({top:0,behavior:'smooth'});
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
      if(!isAuthenticated){
        history.push("/dashboard");
      }

      
    }, [dispatch, error, alert, history, isAuthenticated,deposit])  
  return (
    <>
    {loading ? <Loader/> : (
        <>
        <MetaData title="Deposit Money" />
        <div className={styles.Sign_Up}> 
       
        <form encType='multipart/from-data' onSubmit={depositSubmit} >
            <h3> Deposit Money </h3> 
            <center> 
              <a href="https://i.postimg.cc/FsprMdJf/RCGames-QR-Code.png" download="RCGames_QR_Code"> <img src={RCGames_QR_Code}/>  </a> <br/>
            
            </center> <br/>
           <a href="https://p.paytm.me/xCTH/10y4qmr3">  <h6> Paytm Deposit Link </h6> </a>
            <h2> UPI ID : rcgames@ybl </h2>
            <label for="Name"> UTR / UPI Ref : No <span className={styles.Star}> *  </span> </label> <br/>       
            <input class="input-field" type="text" placeholder=" UTR ID: /  UPI Ref : No:221442702138" title=" Enter 12 Digits UPI Ref : No / UTR : 123456789067" pattern="[0-9]{12}" name="paymentId"  required value={paymentId} onChange={depositDataChange}  /> <br/>
            <label for="Name"> Payment Method <span className={styles.Star}> *  </span> </label> <br/>       
          
            <select class="Payment_options" value={PaymentMethod} name="PaymentMethod" onChange={depositDataChange} >
              <option value=""> Select </option>
              <option value="Phone Pe"> Phone Pe </option>
              <option value="Google Pay"> Google Pay </option>
              <option value="Paytm"> Paytm </option>
              <option value="Amazon Pay"> Amazon Pay </option>
              <option value="Bhim"> Bhim </option>
              {/* <option value="Airtel Money"> Airtel Money </option> */}
              <option value="Others"> Others </option>
            </select> <br/>

            <label for="Name"> Deposit Amount <span className={styles.Star}> *  </span> </label> <br/>       
            <input class="input-field" type="number" placeholder="Deposit Amount" title="Enter Your Deposit Amount" name="DAmount"  required value={DAmount} onChange={depositDataChange}  /> <br/>


           <p> <span> <input type="checkbox" required/> </span>  I read and agree <Link to="/Depositp"> Deposit Policy </Link> / <Link to="/Payment"> Payment Policy. </Link>  </p>

           <p className={styles.btn}>
           <button type="submit" name="Deposit" value="Deposit" > Deposit </button> 
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

export default Deposit