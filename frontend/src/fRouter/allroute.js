// // import styels from './Css/All_Link.module.css';

// import { Switch, Route } from "react-router-dom";

// import Notification from "./Notification";
// import Dashboard from "./Dashboard";

// import Show from "./Show";
// import Bike_Bet from "./Bet/Bike_Bet";

// import Spiderman_Bet from "./Bet/Spiderman_Bet";

// import { useEffect } from "react";
// import store from "../store";
// import { loadUser } from "../actions/userAction";
// import ProtectedRoute from "./route/ProtectedRoute";
// import UpdatePassword from "./UpdatePassword";

// import Adminbg from "../admin/Adminbg";

// import Adminbguser from "../admin/Adminbguser";

// import AdminbgDeposit from "../admin/Deposite/AdminbgDeposit";
// import AdminbgWithdrawal from "../admin/Withdrawal/AdminbgWithdrawal";

// import App_Download from "./App_Download";

// import Withdrawalsp from "./Withdrawalsp";

// import Base from "../base";

// function All_Link() {
//   useEffect(() => {
//     store.dispatch(loadUser());
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <div>
//       <Switch>
//         <Route exact path="/base" component={Base} />
//         <Route exact path="/Withdrawalsp" component={Withdrawalsp} />

//         <ProtectedRoute
//           exact
//           path="/password/update"
//           component={UpdatePassword}
//         />
//         <Route exact path="/Show" component={Show} />
//         <Route exact path="/app" component={App_Download} />
//         <Route exact path="/Notification" component={Notification} />
//         <Route exact path="/dashboard" component={Dashboard} />
//         <Route exact path="/" component={Dashboard} />
//         <ProtectedRoute exact path="/bike" component={Bike_Bet} />
//         <ProtectedRoute exact path="/spiderman" component={Spiderman_Bet} />

//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/dashboard"
//           component={Adminbg}
//         />
//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/users"
//           component={Adminbguser}
//         />
//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/withdrawals"
//           component={AdminbgWithdrawal}
//         />
//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/deposits"
//           component={AdminbgDeposit}
//         />
//       </Switch>
//     </div>
//   );
// }

// export default All_Link;
