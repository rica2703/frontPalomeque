import React from "react";

function CardCon({ CardProps }) {
  return (
    <>
      {CardProps.map((info, index) => ( // Agregué "index" para evitar errores de key
        <div key={index} className="cardContratoClass">
          <h1>
            {info.titulo} {/* Accede a las propiedades de cada objeto "info" */}
          </h1>
          <p>
            {info.subtitulo}
          </p>
          <p>
            {info.cont[0]}
          </p>
          <p>
            {info.cont[1]}
          </p>
          <p>
            {info.cont[2]}
          </p>
          <p>
            {info.fecha}
          </p>
          <p>
            {info.lugar}
          </p>
        </div>
      ))}
    </>
  );
}

export default CardCon;
