import React from 'react';
import "../../styles/atomos.css";
import { FaArrowLeft } from 'react-icons/fa'; 

const BotonArrendatario = () => {
  return (
    <button className="boton">
      <Link to="/landing" className="boton"></Link>
      <FaArrowLeft style={{ fontSize: '38px' }}/> 
    </button>
  );
}

export default BotonArrendatario;