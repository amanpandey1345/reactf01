import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Css/Sign_Up.module.css';
import {clearErrors, register} from "../actions/userAction";
import { useDispatch ,useSelector } from 'react-redux';
// import { useAlert } from 'react-alert';
import Loader from './Loader';
import MetaData from "./Header/MetaData";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Sigh_Up({history}) {
    const dispatch = useDispatch()

    const { error, loading, isAuthenticated } = useSelector((state)=> state.user);

    const [user, setUser] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        CPassword:"",
        referCode:""
    })
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


    const [type1, setType1]=useState('password');
    const [icon1, setIcon1]=useState(<VisibilityOffIcon/>);
  
    const handleToggle1=()=>{    
      if(type1==='password'){
        setIcon1(<VisibilityIcon/>);      
        setType1('text');
      }
      else{
        setIcon1(<VisibilityOffIcon/>);     
        setType1('password');
      }
    }
  

    const { fname, email, mobile, password, CPassword, referCode } = user;


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
          history.push("/Dashboard");
          alert.success("login successfully...",{
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

    const registerSubmit=(e)=>{
        e.preventDefault();
        if(password !== CPassword){
          alert.error("Confirm Password is not match.",{
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
        } else{
        const myForm = new FormData();

        myForm.set("fname",fname);
        myForm.set("email",email);
        myForm.set("mobile",mobile);
        myForm.set("password",password);
        myForm.set("referCode",referCode);
        // console.log(myForm);
        dispatch(register(myForm));
      }
    }

    const registerDataChange = (e)=>{
       
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    return (
        <>
        {loading ? <Loader/> : 
        <>
        <MetaData title="Sign_up" />
        <div className={styles.Sign_Up}> 
        <form encType='multipart/from-data' onSubmit={registerSubmit} >
            <h3> Create an Account </h3> 
            <label for="Name"> Full Name <span className={styles.Star}> *  </span> </label> <br/>       
            <input class="input-field" type="text" placeholder="Full Name" title="Enter Your Full Name" name="fname"  required value={fname} onChange={registerDataChange}  /> <br/>
            
            <label for="Email"> Email <span className={styles.Star}> *  </span> </label> <br/>          
              <input class="input-field" type="email" placeholder="Email" title="Enter Your Email" name="email" required value={email} onChange={registerDataChange} /> <br/>

              <label for="Number">Mobile Number <span className={styles.Star}> *  </span> </label> <br/>
             <input class="input-field" type="tel" placeholder="1234567890" title="Enter Your 10 Digit Phone Number" name="mobile" pattern="[0-9]{10}" required value={mobile} onChange={registerDataChange} /> <br/>
            
            
            <label for="Password"> Password <span className={styles.Star}> *  </span> </label> <br/>
            <input class="input-field" type={type} placeholder="Password" title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" name="password" required value={password} onChange={registerDataChange} />
            <span onClick={handleToggle}>{icon}</span>
             <br/>
           {/* <span>  <input type="checkbox" /> Show Password <br/> </span> */}


           <label for="Password"> Confirm Password <span className={styles.Star}> *  </span> </label> <br/>
            <input class="input-field" type={type1} placeholder="Confirm Password" title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password filed" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" name="CPassword" value={CPassword} required onChange={registerDataChange}  />
            <span onClick={handleToggle1}>{icon1}</span>
             <br/>

             <label for="Password"> Refer Code </label> <br/>
            <input class="input-field" type="text" placeholder="Refer Code"  name="referCode" value={referCode}  onChange={registerDataChange}  />
             <br/>





           {/* <span>   <input type="checkbox"/> Show Conform Password </span> */}

           <p className={styles.conp}> <span> <input type="checkbox" required/> </span>  I read and agree <Link to="/Terms">Terms and Conditions</Link> / <Link to="/Policy"> Policy. </Link>  </p>

           <p className={styles.btn}>
           <button type="reset" name='Reset'> Reset </button>
           <button type="submit" name="Register" value="Register"  > Create Account </button> 
           </p>


                    
           <center>  <p className={styles.Link}> Already have an account? <Link to="/Login"> Login </Link> </p> </center>
          </form>

        </div>
        </>
         }
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

// disabled={loading ? true : false}

export default Sigh_Up ;