import { Link } from "react-router-dom";
import styles from "./Css/Second_Footer.module.css";


function Second_Footer () {
    return (

        <section className={styles.Second_Footer}> 
            <div class="container">
                <div class="row"> 
                  <div class="col-md-4 col-lg-4 col-xl-4" >
                    <ul> 
                        <li> Policy </li>
                        <li> <Link to="/Terms"> Terms & Conditions </Link>  </li>
                        <li> <Link to="/Withdrawalsp"> Withdrawals Policy </Link>  </li>
                        <li> <Link to="/Payment"> Payment Policy </Link>  </li>
                        <li> <Link to="/Policy"> Privacy Policy </Link>  </li>
                        <li> <Link to="/Depositp"> Deposit Policy </Link>  </li>
                    </ul>

                  </div>
                  <div class="col-md-4 col-lg-4 col-xl-4" >
                    <ul>
                        <li> About </li>
                        <li> <Link to="/Disclaimer"> Disclaimer </Link>  </li>
                        <li> <Link to="/Contact"> Contact us </Link>  </li>
                        <li> <Link to="/About_Us"> About us </Link>  </li>
                        <li> <Link to="/FAQs"> FAQs </Link>  </li>
                    </ul>


                  </div>
                  <div class="col-md-4 col-lg-4 col-xl-4" >
                    <ul>
                        <li> Social </li>
                        <li> <a href="https://www.facebook.com/profile.php?id=100084059021483" target="_blank">  Facebook  </a> </li>
                        <li> <a href="https://instagram.com/rcgamesmail/" target="_blank">  instagram  </a> </li><li> <a href="https://t.me/RCGamesTelegram" target="_blank">  Telegram  </a> </li><li> <a href="https://twitter.com/rcgamesmail?t=AR_3d4fT936k56Ww4ZWxyg&s=09" target="_blank">  Twitter  </a> </li>
                    </ul>

                  </div>
                
                </div>
                
            </div> 

            <div>

            </div>
            
        <section  className={styles.Copyrightline}> 
                <div class="container"> 
             <div class="row"> 
                <div class="col-md-7"> 
                    &copy; Copyright 2022 RCGames.in All Rights Reserved. 
                </div>

            <div class="col-md-5">
                <a href="https://www.facebook.com/profile.php?id=100084059021483" target="_black"> <i class="fab fa-facebook-f" style={{color:"white",backgroundColor: "#3c5a99",}} ></i> </a>

                <a href="https://t.me/RCGamesTelegram" target="_black"> <i class="fab fa-telegram-plane" style={{color:"white",backgroundColor: "#00a0e3",}} ></i> </a>

                <a href="https://instagram.com/rcgamesmail/" target="_black"> <i class="fab fa-instagram" style={{color:"white",backgroundColor: "#e44405",}} ></i> </a>

                <a href="https://twitter.com/rcgamesmail?t=AR_3d4fT936k56Ww4ZWxyg&s=09" target="_black"> <i class="fab fa-twitter"style={{color:"white",backgroundColor: "#1da1f2",}} ></i></a>
            </div>

             </div>

                   

            </div>
        </section>
          
            
        </section>

    )
}

export default Second_Footer ;