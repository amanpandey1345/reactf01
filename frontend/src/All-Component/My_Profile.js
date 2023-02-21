
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
// import styles1 from './Css/Sign_Up.module.css';
import './Css/My_Profile.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function My_Profile({ history }) {
  //   const alert = useAlert();
  //   const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  // const date = new Date(user.createdAt).toLocaleDateString()
  // const time = new Date(user.createdAt).toTimeString()

  // console.log(user.createdAt);
  // console.log(date);
  // console.log(time);

  //   useEffect(() => {
  //     if (error) {
  //       return alert.error(error);
  //     }
  //     dispatch(getUser());
  //   }, [dispatch, error, alert]);
  //   function refreshPage() {
  //     if(!isAuthenticated){
  //         history.pushState("/Dashboard")
  //     }
  //   }
  //   refreshPage()

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${user.fname}'s Profile`} />
          
           <div class="My_ProfileArea"> 
            <h3> {user.fname}'s Profile </h3>
           <center>  <div class="Balance-img"> 
            Available Balance <br/>
           <span> ₹{user.balance} </span>
            </div> <hr/>
            </center>

           <center>  <div class="Profile"> 
                <h4> Full Name </h4>
                <p> {user.fname} </p> <hr/>

                <h4> Email </h4>
                <p> {user.email} </p> <hr/>

                <h4> Mobile Number </h4>
                <p> {user.mobile} </p> <hr/>

                {user.referCode ?   <><h4> Refer Code </h4>
                <p> {user.referCode} </p> <hr/></>: ""}

                <h4> Date </h4>
                <p> {new Date(user.createdAt).toLocaleDateString()} </p> <hr/>

                <h4> Time </h4>
                <p> {new Date(user.createdAt).toLocaleTimeString()}</p> <hr/>

            </div> </center>

            <center><Link to="/password/update" class="Change_password"> Change Password </Link> </center>
            {/* <center>    <button class="Change_password"> Change Password </button> </center> */}
            
        </div>
        </>
      )}
    </>
  );
}

export default My_Profile;
