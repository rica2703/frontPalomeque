import React from 'react';
import ReactDOM from 'react-dom/client'
import "../styles/LandingPage.css";
import Landing from './Landing';
import Logging from './Loggin';
import InformacionDePago from './Informaciondepago';
import Contrato from './Contrato';
import  Sugerencias from "../src/Sugerencias"
import Comprobantes from "../src/Comprobantes"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Landing/>
    <Logging/>  
     <InformacionDePago/>   */}
       {/* <Contrato/>  */}
        {/* <Sugerencias/>  */}
        <Comprobantes/> 
  </React.StrictMode> 
);
