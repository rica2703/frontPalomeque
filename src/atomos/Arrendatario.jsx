import React from 'react';
import "../../styles/atomos.css";
import { FaArrowLeft } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const BotonArrendatario = () => {
  return (
     <Link to="/menu-usuario" className="botones">
      <FaArrowLeft style={{ fontSize: '20px' }}/> 
    </Link>
    
  );
}

export default BotonArrendatario;