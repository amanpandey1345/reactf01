import styles from './Css/Mobile_Bottom_Icon.module.css';
import { Link } from "react-router-dom";

function Mobile_Bottom_Icon() {
    return (

    <div class="container-fluid" className={styles.Mobile_Bottom_Icon}>
        <div class="row">
        <div className={styles.Mobile_Bottom_Icon}>
        <Link to="/dashboard"> <i class="fas fa-tachometer-alt"> </i> <br/> Dashboard </Link>
        <Link to="/ShowTime"> <i class="far fa-eye"></i> <br/> ShowTime </Link>
        <Link to="/deposit">  <i class="fa fa-bank"></i> <br/> Deposit </Link>
        <Link to="/withdrawal"> <i class="fa fa-money"></i><br/>  Withdrawals </Link> 
        </div>
           
        
        </div> 

    </div>
    

    
        
        // class="mobile-bottom-button fixed-bottom"
    )
}

export default Mobile_Bottom_Icon;