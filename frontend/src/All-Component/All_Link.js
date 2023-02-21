// // import styels from './Css/All_Link.module.css';

// import {
//     Switch,
//     Route,
//   } from "react-router-dom";

// import Developers from './Developers';
// import Notification from "./Notification";
// import Dashboard from './Dashboard';
// import Slide from './Slide';
// import Show from './Show';
// import Bike_Bet from './Bet/Bike_Bet';
// import Car_Bet from './Bet/Car_Bet';
// import Lion_Bet from './Bet/Lion_Bet';
// import Spiderman_Bet from './Bet/Spiderman_Bet';
// import Aeroplane_Bet from './Bet/Aeroplane_Bet';
// import Tajmahal_Bet from './Bet/Tajmahal_Bet';
// import Ship_Bet from './Bet/Ship_Bet';
// import Unicorn_Bet from './Bet/Unicorn_Bet';
// import House_Bet from './Bet/House_Bet';
// import Laptop_Bet from './Bet/Laptop_Bet';
// import Sign_Up from './Sign_Up';
// import Login from './Login';
// import My_Profile from './My_Profile';
// import { useEffect } from 'react';
// import store from "../store";
// import { loadUser } from '../actions/userAction';
// import ProtectedRoute from './route/ProtectedRoute';
// import UpdatePassword from './UpdatePassword';
// import ForgotPassword from './ForgotPassword';
// import ResetPassword from './ResetPassword.js';
// import Deposit from './Deposit';
// import Withdrawal from './Withdrawal';
// import Transactions from './Transactions';

// import Adminbg from '../admin/Adminbg';


// import Adminbgbet from '../admin/Adminbgbet';
// import Adminbguser from '../admin/Adminbguser';

// import AdminbgDeposit from '../admin/Deposite/AdminbgDeposit';
// import AdminbgWithdrawal from '../admin/Withdrawal/AdminbgWithdrawal';
// import AdminKit from '../admin/Winset/AdminKit';
// import App_Download from './App_Download';
// import ShowTime from './ShowTime';
// import About_Us from './About_Us';
// import Payment from './Payment';
// import Policy from './Policy';
// import Disclaimer from './Disclaimer';
// import FAQs from './FAQs';
// import Contact from './Contact';
// import Depositp from './Depositp';
// import Terms from './Terms';
// import Withdrawalsp from './Withdrawalsp';
// import Showhistory from './Showhistory';
// import Base from "../base"








// function All_Link () {

//     useEffect(() => {
//         store.dispatch(loadUser());
//         window.scrollTo({top:0,behavior:'smooth'});

//     }, [])
    

//     return (
//         <div > 
//         <Switch>
//         <Route exact path="/Developers" component={Developers } />
//         <Route exact path="/base" component={Base } />
//         <Route exact path="/Withdrawalsp" component={Withdrawalsp } />
//         <Route exact path="/Disclaimer" component={Disclaimer } />
//         <Route exact path="/FAQs" component={FAQs } />
//         <Route exact path="/Depositp" component={Depositp } />
//         <Route exact path="/Contact" component={Contact } />
//             <Route exact path="/Policy" component={Policy } />
//             <Route exact path="/Terms" component={Terms } />
//             <Route exact path="/Payment" component={Payment } />
//             <Route exact path="/About_Us" component={About_Us} />
//             <Route exact path="/sign_Up" component={Sign_Up } />
//             <Route exact path="/login" component={Login } />
//             <ProtectedRoute exact path="/My_Profile" component={My_Profile} />
//             <Route exact path="/password/forgot" component={ForgotPassword} />
//             <Route exact path="/password/reset/:token" component={ResetPassword} />
//             <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
//             <Route exact path="/Show" component={Show } />
//             <Route exact path="/app" component={App_Download } />
//             <Route exact path="/Notification" component={Notification } />
//             <Route exact path='/dashboard' component={Dashboard } />
//             <Route exact path='/' component={Dashboard } />
//             <ProtectedRoute exact path='/bike' component={Bike_Bet } />
//             <ProtectedRoute exact path='/spiderman' component={Spiderman_Bet } />
//             <ProtectedRoute exact path='/house' component={House_Bet } />
//             <ProtectedRoute exact path='/car' component={Car_Bet } />
//             <ProtectedRoute exact path='/lion' component={Lion_Bet } />
//             <ProtectedRoute exact path='/aeroplane' component={Aeroplane_Bet } />
//             <ProtectedRoute exact path='/tajmahal' component={Tajmahal_Bet } />
//             <ProtectedRoute exact path='/laptop' component={Laptop_Bet } />
//             <ProtectedRoute exact path='/ship' component={Ship_Bet } />
//             <ProtectedRoute exact path='/unicorn' component={Unicorn_Bet } />
//             <ProtectedRoute exact path='/ShowTime' component={ShowTime } />
//             <ProtectedRoute exact path='/deposit' component={Deposit} />
//             <ProtectedRoute exact path='/withdrawal' component={Withdrawal} />
//             <ProtectedRoute exact path='/transactions' component={Transactions} />
//             <ProtectedRoute exact path="/showhistory" component={Showhistory}/>
//             <Route exact path="/Slide" component={Slide } />
//             <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Adminbg}/>
//             <ProtectedRoute isAdmin={true} exact path="/admin/users" component={Adminbguser}/>
//             <ProtectedRoute isAdmin={true} exact path="/admin/withdrawals" component={AdminbgWithdrawal}/>
//             <ProtectedRoute isAdmin={true} exact path="/admin/deposits" component={AdminbgDeposit}/>
//             <ProtectedRoute isAdmin={true} exact path="/admin/bets" component={Adminbgbet}/>
//             <ProtectedRoute isAdmin={true} exact path="/admin/kit" component={AdminKit}/>
            
//             </Switch>
//         </div>
//     )
// }
   

// export default All_Link;

