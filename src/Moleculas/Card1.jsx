import React, { useEffect } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "../../styles/moleculas.css"
// import { useEffect } from 'react';
function CardComponent(props) {
  // useEffect(()=>{
  //   // localStorage.setItem('');
  // });
  return (
    <div className="card1">
      <div className="edit-icon">
        {/* <a href="/agregar-usuarios">
          <ModeEditIcon style={{ color: 'black' }} />
        </a> */}
        <button onClick={props.onClick}>Editar</button>
      </div>
      <h2>{props.nombre}</h2>
      <br />
      {/* <p><strong>Fecha de Pago:</strong> {props.fechaPago}</p> */}
      {/* <p><strong>Monto de Pago:</strong> {props.montoPago}</p> */}
      <p><strong>Teléfono:</strong> {props.telefono}</p>
      <p><strong>Contacto de Emergencia:</strong> {props.contactoEmergencia}</p>
      <p><strong>Número de Emergencia:</strong> {props.numeroEmergencia}</p>
      <p><strong>Número de Cuarto:</strong> {props.numeroCuarto}</p>
      {/* <p><strong>Contraseña:</strong> {contraseña}</p>  */}
    </div>
  );
}

export default CardComponent;
