import './Showtime.css';
import MetaData from "./Header/MetaData";
import { useDispatch, useSelector } from "react-redux";
import {

    getShowtime,
  } from "../actions/userAction";
import { useEffect } from 'react';
import store from "../store"

function ShowTime () {
    window.scrollTo({top:0,behavior:'smooth'});
    const dispatch = useDispatch()
    const { showtime } = useSelector((state)=> state.GetShowTime.showtime);

    useEffect(() => {
        store.dispatch(getShowtime())
    }, [store, dispatch, getShowtime])
   
    

    return (
        
        <div class="result_area">
            <MetaData title={`RCGames ShowTime`} />
    <h2> It's ShowTime </h2>
    {/* <h2>  {new Date(showtime.Start).toLocaleDateString()} </h2> */}
    
    <div class="result_images">
      {/* Is is show backgound    */}

   

         {/* result images */}
        
        {/* comment this image after then you can see date and time */}
        {/* <img src={MobileCar} alt="Car"/> */}
        <h2 class="n"> Next Show Time </h2>
        <h2 class="r"> NOW WINNER REWARD MONEY BET × 5 </h2>
        <h3 class="d"> Betting Time Start <br/> <br/>
        {showtime ? new Date(showtime.Start).toLocaleTimeString():""}  </h3>
        <h3 class="t"> Betting Time End <br/> <br/>
        {showtime ? new Date(showtime.End).toLocaleTimeString():""} </h3>
        
   </div>


   <p> You can see RCGames show result in 10 to 30 minutes after betting end time. Reward money will be change every day and next betting time. So you check winner reward money before betting. </p>
</div>

    )

}

export default ShowTime ;