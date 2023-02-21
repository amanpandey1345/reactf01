import './Bet_History.css';
import { useEffect } from "react";
import store from "../store";
import { getAllShowHistory } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import MetaData from "./Header/MetaData";
// import { useAlert } from "react-alert";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Showhistory = ({ history }) => {
  // const alert = useAlert();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, showhistory } = useSelector((state) => state.ShowHistorys);

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
    store.dispatch(getAllShowHistory());
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
//   const mbike =
//   "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812770/M%20pic/MobileBike_ihnomw.jpg";
// const cImage =
//   "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812600/C%20pic/ComputerBike_bqrbjk.jpg";

  const imgs =(name)=>{
    if(name == "Bike"){
      let mImage =
      "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812770/M%20pic/MobileBike_ihnomw.jpg";
    let cImage =
      "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812600/C%20pic/ComputerBike_bqrbjk.jpg";
      return mImage,cImage;
  
    } else if(name === "Aeroplane"){
      const mImage =
      "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812775/M%20pic/MobileAeroplane_dxtqma.jpg";
    const cImage =
      "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812602/C%20pic/ComputerAeroplane_ov64ce.jpg";
      return mImage,cImage;
    } else if(name === "Car"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812770/M%20pic/MobileCar_u7ch4o.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812599/C%20pic/ComputerCar_e2ni8v.jpg"
      return mImage,cImage;
    } else if(name === "House"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812773/M%20pic/MobileHouse_uehzod.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812599/C%20pic/ComputerHouse_rsnbpk.jpg"
      return mImage,cImage;
    } else if(name === "Laptop"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812771/M%20pic/MobileLaptop_yk0vlb.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812599/C%20pic/ComputerLaptop_t3kxl8.jpg"
      return mImage,cImage;    
    } else if(name === "Lion"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812771/M%20pic/MobileLion_lrcbxe.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812600/C%20pic/ComputerLion_vsfxfh.jpg"
      return mImage,cImage;    
    } else if(name === "Ship"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812771/M%20pic/MobileShip_ooftn1.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812600/C%20pic/ComputerShip_clk6cl.jpg"
      return mImage,cImage;    
    } else if(name === "Spiderman"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812773/M%20pic/MobileSpiderman_r6cxft.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812607/C%20pic/ComputerSpiderman_wpissz.jpg"
      return mImage,cImage;
    } else if(name === "Tajmahal"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812773/M%20pic/MobileTajmahal_ruo7mj.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812600/C%20pic/ComputerTajmahal_j50eja.jpg"
      return mImage,cImage;
    } else if(name === "Unicorn"){
      const mImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812773/M%20pic/MobileUnicorn_fxb1lg.jpg"
      const cImage = "https://res.cloudinary.com/dfzlvdrcn/image/upload/v1657812599/C%20pic/ComputerUnicorn_ggi4af.jpg"
      return mImage,cImage;
    }

  }



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`RCGames Show History`} />
          {showhistory.showhistory &&
            showhistory.showhistory
              .slice(0)
              .reverse()
              .map((showhistory) => (
               
               <div class="BetHistoryArea" key={showhistory.createdAt} >
             {/* <h2> BET ON {showhistory.betName} </h2> */}
           <div class="Leftside"> 
                <img class="ComputerBike" src={`${imgs(showhistory.Name)}`}/>
                <img class="MobileBike" src={`${imgs(showhistory.Name)}`}/>

           </div>
               
                 <div class="Rightside"> 
                     
                    <p> Bet Result  <br/>
                    <span class="Right_Answer"> {showhistory.Name} </span>
                    </p>
                      
                    <p> Bet Winning Times  <br/>
                    <span class="Right_Answer"> X{showhistory.Times} </span>
                    </p>
                    <p> Bet Status <br/>
                    <span class="Right_Answer"> Winner </span>
                      </p> 
                     
                   
                    <p>  <span class="date"> Date {new Date(showhistory.createdAt).toLocaleDateString()} </span> 
                    <span class="time"> Time  {new Date(showhistory.createdAt).toLocaleTimeString()} </span>  </p>
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

export default Showhistory;
