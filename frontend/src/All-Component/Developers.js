import "./Css/Developer.css";
import Aman_Pandey from './Developers_Images/Aman_Pandey.jpg';
import Vishnu from './Developers_Images/Vishnu.jpg';


function Developers() {
    return (
        <div class="Developers"> 
            <h2> This is Developers pages </h2>
            <p class="dtext"> 
                It's our profile pages. if you developed any website so you can contact our gmail or facebook Account. we will developed any website with some charges.
            </p> <br/>

            <h4> Full stack Developer </h4>
             <center>             
                <img src={Aman_Pandey} alt="Aman Pandey developer backend developer" class="dimg"/>
             </center>
            
            <a href="https://www.facebook.com/profile.php?id=100007695795209" target="_blank"> This is my Facebook Account Link </a> <br/> <br/>
            <h4> This is my gmail: amanpandey1346@gmail.com </h4>



            <p class="dtext"> 
                I am Aman Pandey Full stack Developer. I knows many programming languages  and Frameworks like: node js , next js, python, htmt, css, boostrap, Tailwind, react js, mongodb , Mysql, javascript  and jsx etc,
            </p> <br/>

            <h4> Full stack Developer </h4>
          <center> 
            <img src={Vishnu} alt="Aman Pandey developer backend developer" class="dimg"/>
            </center>
            <p class="dtext"> 
                I'm Vishnu Choudhari Full stack Developer. I knows many programming languages  and Frameworks like: python, react js, mongodb , Mysql, php, htmt, css, boostrap, javascript and jsx etc,
            </p>

        </div>
    )
}

export default Developers;