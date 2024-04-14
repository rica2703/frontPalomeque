import React from 'react';
import "../../styles/atomos.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'; 

const BotonConFlechaAlRevez = () => {
  return (
    <Link to="/menu-usuario" className="botones">
      <FaArrowLeft style={{ fontSize: '20px' }}/> 
    </Link>
  );
}

export default BotonConFlechaAlRevez;