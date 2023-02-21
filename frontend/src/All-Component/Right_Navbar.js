import styles  from './Css/Right_Navbar.module.css';
import moment from 'moment';
import {  useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { loadUser } from "../actions/userAction";
import { UPDATE_BALANCE_RESET } from "../constants/userConstants";


function Right_Navbar () {
    const dispatch = useDispatch()

    const { isAuthenticated, user } = useSelector((state) => state.user);
    const { isUpdated } = useSelector(
        (state) => state.userbalance
      );

    
    let Time = new Date().toLocaleTimeString();
    const [cureentTime, setCtime] = useState(Time);
 

    const UpdateTime = () => {
        Time = new Date().toLocaleTimeString();
        setCtime(Time);
    } ;

    setInterval(UpdateTime, 1000);

    if (isUpdated) {
        // alert.success("Balance update Successfully");
        dispatch(loadUser());
        dispatch({ type: UPDATE_BALANCE_RESET });
      }

    // if (isupdated === true ) {  

    //     setBalanceis(isUpdated.users.balance)
       
    //   } else if(isAuthenticated){
    //     setBalanceis(user.balance)
    //   } else {
    //     setBalanceis("00")
    //   }



    return (
        <section className={styles.Right_Navbar}> 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4" className={styles.B}> 
                    {/* <img src="All-Images/Navbar-Images/Balance.jpg"/>  */} 
                     <p> 
                        Available <br/>
                         Balance <br/>
                         <span> &#x20B9;{isAuthenticated ? user.balance : "000"} </span> 
                        
                     </p>
                    
                    </div> 
                    <div class="col-4" className={styles.U}>
                    {/* <img src="All-Images/Navbar-Images/User-Name.jpg"/> */}
                                 
                     <p> 
                        Hello... <br/>
                        
                        {isAuthenticated ? user.fname : "User_Name"} 
                     </p> 
                        
                     </div>
                     <div class="col-4" className={styles.T}> 
                     {/* <img src="All-Images/Navbar-Images/Time.jpg"/>   */}
                     
                      <p> 
                             <h4>  WATCH </h4>
                             {Time} <br/> 
                             {/* {moment().format('dddd') } <br/>  */}
                            {moment().format('D MMMM YYYY') } <br/> 
                                    
                    
                        
                      </p>
                        
                     </div>
                
                </div> 
            
        </div>

        </section>
        
    )
}

export default Right_Navbar;