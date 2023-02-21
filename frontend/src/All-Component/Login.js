import { Link } from 'react-router-dom';

import styles from './Css/Sign_Up.module.css';
import {  useState, useEffect } from 'react';
import { clearErrors, login } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from 'react-alert';
import Loader from './Loader';
import MetaData from "./Header/MetaData";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Login ({history}) {

  const dispatch = useDispatch();
  // const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector((state)=> state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState(""); 
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(<VisibilityOffIcon/>);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(<VisibilityIcon/>);      
      setType('text');
    }
    else{
      setIcon(<VisibilityOffIcon/>);     
      setType('password');
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
    if(isAuthenticated){
      history.push("/dashboard");
      alert.success("login successfully..." ,{
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
    
  }, [dispatch, error, alert, history, isAuthenticated]) 
  


  const loginSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  }
  

    return (
   
        <>
        {loading ? <Loader/> :<>
        <MetaData title="Login" /> 
        <div className={styles.Sign_Up}> 
        <form  onSubmit={loginSubmit} >
            <h3> Login </h3> 
            
            <label for="Email"> Email <span className={styles.Star}> *  </span> </label> <br/>          
              <input class="input-field" type="email" placeholder="Email" title="Enter Your Email" name="Email"  required  value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /> <br/>
            
            
            <label for="Password"> Password <span className={styles.Star}> *  </span> </label> <br/>
            <input class="input-field" type={type} placeholder="Password" title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" name="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}  />
            <span className={styles.icon121} onClick={handleToggle}>{icon}</span>
            
              <br/>
           {/* <span>  <input type="checkbox" /> Show Password <br/> </span> */}

           <p className={styles.btn}>
           <Link to="/password/forgot"><button type="button" className={styles.btnlogin}>  Forgot Password  </button></Link>
           <button type="submit" name="Register" value="Login" > Login </button> 
           </p>
                    
           <center>  <p className={styles.Link}> Don't have an account? <Link to="/Sign_Up"> Create Account </Link> </p> </center>

           <p className={styles.help}> 
            Need Help? Live Chat Support 24/7
           </p>
          </form>

        </div></>}
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
   
        
        
    )
}

export default Login  ;