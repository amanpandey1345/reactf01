

import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import ProtectedRoute from "../All-Component/route/ProtectedRoute";
import forget from "./Forget";
import Admin from "./Admin";
import store from "../store";
import { loadUser } from "../actions/userAction";
import ProtectedLogin from "../All-Component/route/ProtectedLogin";
import Login from "./Login";
import PDash from "./Page/PDash";
import PAdmission from "./Page/PAdmission";
import PAccount from "./Page/PAccount";
import PStaff from "./Page/PStaff";
import PClass from "./Page/PClass";
import PSession from "./Page/PSession";
import PAccClass from "./Page/PAccClass";
import PAccStudent from "./Page/PAccStudent";
import PAdminTool from "./Page/PAdminTool";
import PAdToClass from "./Page/PAdToClass";
import PAdEditClass from "./Page/PAdEditClass";
import PAdStudent from "./Page/PAdStudent";
import PAdFee from "./Page/PAdFee";
import PProfile from "./Page/PProfile";
import PAdStudentPro from "./Page/PAdStudentPro";


function Mainrouter() {
  useEffect(() => {
    store.dispatch(loadUser());
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Base} /> */}
        <Route exact path="/admin" component={Admin} />
        {/* <Route exact path="/admission" component={dashboardt} /> */}
        {/* <Route exact path="/login" component={login} /> */}
        <Route exact path="/forget" component={forget} />

        {/* <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <Route exact path="/Show" component={Show} />
        <Route exact path="/app" component={App_Download} />
        <Route exact path="/Notification" component={Notification} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Dashboard} /> */}
        <ProtectedRoute exact path="/dashboard" component={PDash} />
        {/* <ProtectedRoute exact path="/admin" component={DashAdmin} /> */}
        <ProtectedRoute exact path="/" component={PDash} />
        <ProtectedRoute isAdmin={true} exact path="/admission" component={PAdmission} />
        <ProtectedRoute isAdmin={true} exact path="/classes" component={PClass} />
        <ProtectedRoute isAdmin={true} exact path="/session" component={PSession} />
        <ProtectedRoute isAdmin={true} exact path="/account" component={PAccount} />
        <ProtectedRoute isAdmin={true} exact path="/account/class/student/profile/:id" component={PProfile} />
        <ProtectedRoute isAdmin={true} exact path="/account/:id" component={PAccClass} />
        <ProtectedRoute isAdmin={true} exact path="/account/class/:id" component={PAccStudent} />
        <ProtectedRoute isAdmin={true} exact path="/admintools/class/:id" component={PAdToClass} />
        <ProtectedRoute isAdmin={true} exact path="/admintools/class/student/:id" component={PAdStudent} />
        <ProtectedRoute isAdmin={true} exact path="/admintools/class/student/fee/:id" component={PAdFee} />
        <ProtectedRoute isAdmin={true} exact path="/admintools/class/student/profile/:id" component={PAdStudentPro} />
        <ProtectedRoute isAdmin={true} exact path="/class/:id,:sY" component={PAdEditClass} />
        <ProtectedRoute isAdmin={true} exact path="/staff" component={PStaff} />
        <ProtectedRoute isAdmin={true} exact path="/admintools" component={PAdminTool} />
        <ProtectedLogin isAdmin={true} exact path="/login" component={Login} />
        {/* <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Adminbg}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={Adminbguser}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/withdrawals"
          component={AdminbgWithdrawal}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/deposits"
          component={AdminbgDeposit}
        /> */}
      </Switch>
    </div>
  );
}

export default Mainrouter;
