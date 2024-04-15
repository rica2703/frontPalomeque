import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "../../styles/moleculas.css"

function CardComponent({ nombre, fechaPago, montoPago, telefono, contactoEmergencia, numeroEmergencia, numeroCuarto, contraseña }) {
  return (
    <div className="card1">
       <div className="edit-icon">
<a href="/agregar-usuarios">
<ModeEditIcon style={{ color: 'black' }}/>
</a> 
      </div>
      <h2>{nombre}</h2>
      <br />
      <p><strong>Fecha de Pago:</strong> {fechaPago}</p>
      <p><strong>Monto de Pago:</strong> {montoPago}</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Contacto de Emergencia:</strong> {contactoEmergencia}</p>
      <p><strong>Número de Emergencia:</strong> {numeroEmergencia}</p>
      <p><strong>Número de Cuarto:</strong> {numeroCuarto}</p>
      <p><strong>Contraseña:</strong> {contraseña}</p> 
    </div>
  );
}

export default CardComponent;
