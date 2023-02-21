import Car from "./All-Images/Dashboard-Images/Car.jpg";
import Laptop from "./All-Images/Dashboard-Images/Laptop.jpg";
import Lion from "./All-Images/Dashboard-Images/Lion.jpg";
import Bike from "./All-Images/Dashboard-Images/Bike.jpg";
import House from "./All-Images/Dashboard-Images/House.jpg";
import Tajmahal from "./All-Images/Dashboard-Images/Tajmahal.jpg";
import Spiderman from "./All-Images/Dashboard-Images/Spiderman.jpg";
import Unicorn from "./All-Images/Dashboard-Images/Unicorn.jpg";
import Aeroplane from "./All-Images/Dashboard-Images/Aeroplane.jpg";
import Ship from "./All-Images/Dashboard-Images/Ship.jpg";
import styles from "./Css/Slide.module.css";
import { Link } from "react-router-dom";

function Slide() {
  return (
    <>
    
      <section className={styles.Slide}>
        {/* slide code start  here  */}

        <div
          id="carouselExampleControls"
          class="carousel slide   "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner " >
            <div class="carousel-item active position-relative">
              <Link to="/Help">
                
                <img src={Lion} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={House} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Spiderman} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Bike} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Tajmahal} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Car} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Laptop} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Unicorn} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Aeroplane} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to="/Help">
                
                <img src={Ship} class="d-block w-100" alt="..." />
              </Link>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Slide;
