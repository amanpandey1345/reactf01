import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import {Provider} from "react-redux";
import store from "./store";
// import {positions, transitions, Provider as AlertProvider} from "react-alert";
// import AlertTemplate from "react-alert-template-basic";  
import App from './App';


// const options = {
//   timeout: 10000,
//   position: positions.TOP_CENTER,
//   transition: transitions.SCALE
// }


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(  
  <Provider  store={store} >
    {/* <AlertProvider template={AlertTemplate} {...options} >  */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* </AlertProvider> */}
  </Provider>
  
    
  
);

