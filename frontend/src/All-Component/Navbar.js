// import * as React,  from "react";
import { Link } from "react-router-dom";
import styles from "./Css/Navbar.module.css";
// import UserOptions from "./Header/UserOptions"
import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";
import { logout, loadUser } from "../actions/userAction";

import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";


function Navbar() {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const [show, setShow] = useState(false);
  const { isAuthenticated , user} = useSelector((state) => state.user);
  const { isUpdated } = useSelector((state) => state.UpdateNotification);

  if(isUpdated){
    dispatch(loadUser());
  }

  function logoutUser() {
    setShow(!show)
    dispatch(logout());
    alert.success("Logout Successfully..");
    window.location.reload(true);
  }

  // const noti = user.notilenth;

  return (
    <div className={styles.navbar}>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <span> RCGames </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <i class="fas fa-bars" style={{ color: "white" }}></i>

            {/* this is button code  */}
            {/* <span class="navbar-toggler-icon">  </span> */}
          </button>

          <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <div class="navbar-nav ms-auto">

            {isAuthenticated && (user.role === "admin" && <Link to="/admin/dashboard" onClick={() => setShow(!show)}> <i class="fas fa-user-circle"></i> Admin </Link>)}
            <a href="https://instagram.com/rcgamesmail/" target="_black" onClick={() => setShow(!show)} >
            <i class="fab fa-instagram"></i> Instagram
              </a>
              <Link to="/showhistory" onClick={() => setShow(!show)}>
              <i class="fas fa-history"></i> Show history
              </Link>
              <Link to="/Notification" onClick={() => setShow(!show)}>
                <i class="fas fa-bell"></i><sup style={{ color: "red", fontSize:"12px" }}>{isAuthenticated ? user.notilenth : "0"}</sup> Notification
              </Link>
              
              
              {!isAuthenticated && (
                <Link to="/login" onClick={() => setShow(!show)} >
                  
                  <i class="fas fa-sign-out-alt"></i> Login
                </Link>
              )}
              {isAuthenticated && (
                <Link onClick={logoutUser} >
                  
                  <i class="fas fa-sign-out-alt"></i> Logout
                </Link>
              )}
              

              {/* <span>{isAuthenticated && <UserOptions user={user} />}</span> */}

              <section className={styles.Mobile_Nav}>
              {/* <a href="https://t.me/RCGamesTelegram" target="_black" onClick={() => setShow(!show)} >
                <i class="fas fa-share"></i> Share
              </a> */}
                <Link to="/app" onClick={() => setShow(!show)} >
                  <i class="fa fa-download" aria-hidden="true"></i> App Download
                </Link>
                <Link to="/show" onClick={() => setShow(!show)}>
                  <i class="fas fa-history"></i> Bet History
                </Link>
                <Link to="/transactions" onClick={() => setShow(!show)} >
                  <i class="fas fa-exchange-alt"></i> Transactions
                </Link>
                <Link to="/My_Profile" onClick={() => setShow(!show)}>
                  <i class="fas fa-user-circle"></i> My Profile
                </Link>
                {/* <Link to="/show"onClick={() => setShow(!show)} >
                <i class="fas fa-history"></i> Bet History
                </Link> */}
              </section>
            </div>
          </div>
        </div>
      </nav>
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
    </div>
  );
}

export default Navbar;
