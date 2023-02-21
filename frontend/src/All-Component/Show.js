import './Bet_History.css';
import { useEffect } from "react";
import store from "../store";
import { getBetUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
// import { useAlert } from "react-alert";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bet_History = ({ history }) => {
  // const alert = useAlert();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, getbet } = useSelector((state) => state.getbets);

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
    store.dispatch(getBetUser());
    if (isAuthenticated === false) {
      history.push("/login");
      alert.error("login to access...",{
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
  }, [alert, history, isAuthenticated]);



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={` RCGames Bet Histroy`} />
          {getbet.bets &&
            getbet.bets
              .slice(0)
              .reverse()
              .map((bet) => (
               
               <div class="BetHistoryArea" key={bet.createdAt} >
             <h2> BET ON {bet.betName} </h2>
           <div class="Leftside"> 
                <img class="ComputerBike" src={bet.image.cUrl}/>
                <img class="MobileBike" src={bet.image.mUrl}/>

           </div>
               
                 <div class="Rightside"> 
                     
                    <p> Betting Amounts <br/>
                  <span class="Right_Answer">  ₹{bet.betAmount}  </span> </p>
                      
                    <p> Bet Status <br/>
                    <span class="Right_Answer"> {bet.betStatus} </span>
                      </p> 
                     
                    <p> Bet Result  <br/>
                    <span class="Right_Answer"> {bet.result} </span>
                    </p>
                   
                    <p>  <span class="date"> Date {new Date(bet.createdAt).toLocaleDateString()} </span> 
                    <span class="time"> Time  {new Date(bet.createdAt).toLocaleTimeString()} </span>  </p>
                    {/* <div class="line-text"> If You have Inversted on This Image. Then
                        You will Get Bet Reward Money.  </div> */}
                   
                 </div>
                   
    
    
        </div>
              ))}
        </>
      )}
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
  );
};

export default Bet_History;
