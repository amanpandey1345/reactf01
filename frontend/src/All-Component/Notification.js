import "./Notification.css"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
// import { clearErrors,UpdateNotifi } from "../actions/userAction";
// import store from "../store"
// import { ALL_NOTIFICATION_RESET} from "../constants/userConstants";
function Notification ({history}) {
  const dispatch = useDispatch()
    const { error,isAuthenticated, user, loading } = useSelector((state) => state.user);
    // const { isUpdated } = useSelector((state) => state.UpdateNotification);
    // if(isAuthenticated){

    //   dispatch(UpdateNotifi())
    // }

    useEffect(() => {
      // if (error) {
      //   alert.error(error);
      //   dispatch(clearErrors());
      // }
      // if(isUpdated){
      //   dispatch({ type: ALL_NOTIFICATION_RESET }); 
      // }
      window.scrollTo({top:0,behavior:'smooth'});
        if (isAuthenticated === false) {
          history.push("/login");
        }

      }, [history, isAuthenticated]);
      if (isAuthenticated === false) {
        history.push("/login");
      }

    return (
        <>
        <MetaData title={`${user.fname}'s Notification`} />
        <div className="mainh">
            <div className="headtag">
                <h1> Notification's </h1>
            </div> 
            <div className="notibox">
            <div className="noticard"> 
            <p> We Will Every Withdrawals Transcations charges 5%. Like you want Withdrawal 500 repees but you will have credit in your account 475 rupees and less 5% Transcations charges .</p> 
           </div>
            {loading ? (
        <Loader />
      ) : (
        <>
        {user.notifi ? user.notifi.slice(0).reverse().map((notifi,index)=>(
            <div className="noticard" key={index} >
            <p>{notifi}</p>
           </div>
        )):<>
        <h2>No Notifications</h2>
        </>}
        </>
           
      )}
      </div> 
        </div>
        </>
      
    )
}

export default Notification; 