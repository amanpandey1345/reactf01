import styles from './Css/Left_Navbar.module.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

 
function Left_Navbar () {
    const { isAuthenticated } = useSelector((state) => state.user);
return (
    
    <section className={styles.Left_Navbar}> 
    
        <div class="container">
            <div class="row">
             <div class="col-12">
             <ul> 
                <Link to="/dashboard"> <i class="fas fa-tachometer-alt"></i> Dashboard </Link> 
                <Link to="/show"> <i class="far fa-eye"></i> Bet History  </Link> 
                <Link to="/deposit"> <i class="fa fa-bank"></i> Deposit </Link> 
                <Link to="/withdrawal"> <i class="fa fa-money"></i> Withdrawals </Link>  
                <Link to="/app"> <i class="fa fa-download" aria-hidden="true"></i> App Download </Link>
                <Link to="/ShowTime"> <i class="fas fa-history"></i> ShowTime </Link> 
                <Link to="/transactions"> <i class="fas fa-exchange-alt"></i> Transactions </Link> 
                {isAuthenticated && <Link to="/My_Profile"> <i class="fas fa-user-circle"></i> My Profile </Link>} 
                {/* <Link to="/Sign_Up"> <i class="fas fa-sign-out-alt"></i> Log out </Link>  */}
                

            </ul>
             </div> 

                
            </div> 

        </div>
     </section>

)
    
}

export default Left_Navbar;