import { Link } from 'react-router-dom';
import styles from './Css/Footer.module.css';
import  { useEffect, useState } from 'react';
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {clearErrors, createSay} from "../actions/userAction";
import { useDispatch ,useSelector } from 'react-redux';
// import Loader from './Loader';


function Footer ({history}) {

    
    const dispatch = useDispatch()
    // const alert = useAlert();
    const {  isAuthenticated } = useSelector((state)=> state.user);
    const { error } = useSelector((state)=> state.Say);
    const { loading } = useSelector((state) => state.withdrawals); 
 
    const [deposits1, setDeposits1] = useState({
        Fname:"",
        email:"",
        message:"",
      
    })
    const { Fname, email, message} = deposits1;

    
    const depositDataChange = (e)=>{
       
      // setAmt({DAmount})
      setDeposits1({ ...deposits1, [e.target.name]: e.target.value }); 
    }



   

    const depositSubmit=(e)=>{
        e.preventDefault();
          const myForm = new FormData();
  
          myForm.set("Fname",Fname);
          myForm.set("email",email);
          myForm.set("message",message);
          dispatch(createSay(myForm));
          alert.success("successfully submeted.",{
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

          history.push("/");
          window.scrollTo({top:0,behavior:'smooth'});


    }




    useEffect(() => {
    //   window.scrollTo({top:0,behavior:'smooth'});
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
    //   if(!isAuthenticated){
    //     history.push("/dashboard");
    //   }

      
    }, [dispatch, error, alert, history, isAuthenticated])  
    // window.scrollTo({top:0,behavior:'smooth'});
    return (
        <section className={styles.FooterSecond}> 
        <div  class="container" > 
          <div class="row">
             <div class="col-md-6  col-xl-6">
                <h2> Contact us </h2>
                <p> 
                    24/7 Customer Support is available to answer your quentions. You can ask your quentions on Telegram or Email. Of course we will help you. Our Live Support service will always happy to help you.
                </p>

        <ul> 
            <li> <i class="fas fa-envelope" style={{backgroundColor:"#e44405",}}> </i> RCGamesmail@gmail.com  
            
            </li>
                
            <li> <a href='https://t.me/RCGamesTelegram' target="_blank" > <i class="fab fa-telegram-plane" style={{backgroundColor:"#00a0e3",}}>  </i> Telegram </a> </li> 
        </ul>

             </div> 
             
             <div class="col-md-6 col-xl-6">
             

                <div class="container" className={styles.FormArea}>
                <h3 className={styles.Formheading}> Say Something </h3>
                    <form onSubmit={depositSubmit}>
                        <label for="Name">Full Name</label>
                        <input type="text" id="fname" name="Fname" placeholder="Your Full Name.." required value={Fname} onChange={depositDataChange} /> <br/>

                        <label for="Email">Email </label>
                        <input type="text" id="lname" name="email" placeholder="Your Email.." required value={email}  onChange={depositDataChange} /> <br/>

                        <label for="messages"> Messages</label>
                        <textarea id="subject" name="message" placeholder="Write something.." required value={message}  onChange={depositDataChange} ></textarea> <br/>

                        <input type="submit" value="Submit" disabled={!isAuthenticated} />
                    </form>
                </div>

             </div>
            
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
      </section>
    )
}

export default Footer ;