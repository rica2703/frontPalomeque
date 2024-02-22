import React from 'react';
import ReactDOM from 'react-dom/client'
import "../styles/LandingPage.css";
import Landing from './Landing';
import Logging from './Loggin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Landing/>
    <Logging/>
  </React.StrictMode>
);
