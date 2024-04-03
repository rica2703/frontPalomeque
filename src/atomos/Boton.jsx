import React from 'react';
import "../../styles/atomos.css";
import { FaArrowLeft } from 'react-icons/fa'; 

const BotonConFlechaAlRevez = () => {
  return (
    <button className="boton">
      <FaArrowLeft style={{ fontSize: '38px' }}/> 
    </button>
  );
}

export default BotonConFlechaAlRevez;
