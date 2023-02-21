import { Link } from 'react-router-dom';
import Car from './All-Images/Dashboard-Images/Car.jpg';
import Laptop from './All-Images/Dashboard-Images/Laptop.jpg';
import Lion from './All-Images/Dashboard-Images/Lion.jpg';
import Bike from './All-Images/Dashboard-Images/Bike.jpg';
import House from './All-Images/Dashboard-Images/House.jpg';
import Tajmahal from './All-Images/Dashboard-Images/Tajmahal.jpg';
import Spiderman from './All-Images/Dashboard-Images/Spiderman.jpg';
import Unicorn from './All-Images/Dashboard-Images/Unicorn.jpg';
import Aeroplane from './All-Images/Dashboard-Images/Aeroplane.jpg';
import Ship from './All-Images/Dashboard-Images/Ship.jpg';
import styles from './Css/Dashboard.module.css';
import Slide from './Slide';
// import { useDispatch ,useSelector } from 'react-redux';
// import { getShowtime} from "../actions/userAction";
import { useEffect } from 'react';
// import store from '../store';
import MetaData from "./Header/MetaData";



function Dashboard ({history}) {
  // const dispatch = useDispatch
  // const { showtime } = useSelector((state)=> state.GetShowTime);   

  
  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
  }, [])
  

    return (

     <> 
      <MetaData title="RCGames Dashboard" />
        <Slide/>
        <section className={styles.Dashboard}> 
      
        <div> 
          <img src={Car} />
          <Link to="/car">  BET NOW </Link>
        </div>

        <div> 
          <img src={Bike} />
          <Link to="/bike">  BET NOW </Link>
        </div>

        <div> 
          <img src={Ship} />
          <Link to="/ship">  BET NOW </Link>
        </div>

        <div> 
          <img src={Spiderman} />
          <Link to="/Spiderman">  BET NOW </Link>
        </div>

        <div> 
          <img src={House} />
          <Link to="/house">  BET NOW </Link>
        </div>

        <div> 
          <img src={Aeroplane} />
          <Link to="/aeroplane">  BET NOW </Link>
        </div>

        <div> 
          <img src={Unicorn} />
          <Link to="/unicorn">  BET NOW </Link>
        </div>

        <div> 
          <img src={Laptop} />
          <Link to="/laptop">  BET NOW </Link>
        </div>

        <div> 
          <img src={Tajmahal} />
          <Link to="/tajmahal">  BET NOW </Link>
        </div>

        <div> 
          <img src={Lion} />
          <Link to="/lion">  BET NOW </Link>
        </div>


        </section>

        </>
    )
}

export default Dashboard;