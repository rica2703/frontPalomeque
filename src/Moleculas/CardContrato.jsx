import React from 'react';
import '../../styles/moleculas.css';

const CardContrato = () => {
  return (
    <div className="cards">
      <div className="card-header">Contrato de Arrendamiento de Departamento</div>
      <div className="card-body">
        <div className="property-info">
          <div className="info-item">
            <strong>Dirección:</strong> 456 Avenida Principal, Ciudad Grande
          </div>
          <div className="info-item">
            <strong>Precio:</strong> $2800 al mes
          </div>
          <div className="info-item">
            <strong>Tamaño:</strong> 600 metros cuadrados
          </div>
          <div className="info-item">
            <strong>Habitaciones:</strong> 1
          </div>
          <div className="info-item">
            <strong>Baños:</strong> 1
          </div>
          <div className="info-item">
            <strong>Amueblado:</strong> Sí
          </div>
          <div className="info-item">
            <strong>Servicios incluidos:</strong> Agua, electricidad, gas, internet
          </div>
          <div className="info-item">
            <strong>Fecha de inicio del contrato:</strong> 1 de enero de 2024
          </div>
          <div className="info-item">
            <strong>Fecha de finalización del contrato:</strong> 30 de mayo de 2024
          </div>
        </div>
        <div className="description">
          Este contrato de arrendamiento es para un amplio departamento ubicado en una zona céntrica de la ciudad. 
          Totalmente amueblado y equipado con electrodomésticos modernos, incluyendo lavadora y secadora. 
          Cuenta con una amplia sala de estar, comedor, cocina espaciosa y una terraza con vistas panorámicas.
        </div>
      </div>
    </div>
  );
};

export default CardContrato;
