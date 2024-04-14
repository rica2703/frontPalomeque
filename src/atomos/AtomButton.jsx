import React, { useState } from 'react';
import '../../styles/atomos.css';
import Card1 from '../Moleculas/Card1'; 

const Boton = ({ children, onClick }) => {
  return <button className="boton" onClick={onClick}>{children}</button>;
};

const ListaBotones = () => {
  const cardData = [
    {
      nombre: "Luis Palomeque",
      fechaPago: "01/04/2024",
      montoPago: "$2800",
      telefono: "123-456-7890",
      contactoEmergencia: "Contacto 1",
      numeroEmergencia: "987-654-3210",
      numeroCuarto: "101",
      contraseña: "contraseña1"
    },
    {
      nombre: "Margarita Olivera",
      fechaPago: "02/04/2024",
      montoPago: "$2800",
      telefono: "234-567-8901",
      contactoEmergencia: "Contacto 2",
      numeroEmergencia: "876-543-2109",
      numeroCuarto: "102",
      contraseña: "contraseña2"
    },

    {
      nombre: "Rodrigo Borrayes",
      fechaPago: "03/04/2024",
      montoPago: "$2800",
      telefono: "345-678-9012",
      contactoEmergencia: "Contacto 3",
      numeroEmergencia: "765-432-1098",
      numeroCuarto: "103",
      contraseña: "contraseña3"
    },
    {
      nombre: "Sofia Abarca Ruiz",
      fechaPago: "04/04/2024",
      montoPago: "$2800",
      telefono: "456-789-0123",
      contactoEmergencia: "Contacto 4",
      numeroEmergencia: "654-321-0987",
      numeroCuarto: "104",
      contraseña: "contraseña4"
    },
    {
      nombre: "Fernanda Morales",
      fechaPago: "05/04/2024",
      montoPago: "$2800",
      telefono: "567-890-1234",
      contactoEmergencia: "Contacto 5",
      numeroEmergencia: "543-210-9876",
      numeroCuarto: "105",
      contraseña: "contraseña5"
    },
    {
      nombre: "Mauricio de Santos",
      fechaPago: "06/04/2024",
      montoPago: "$2800",
      telefono: "678-901-2345",
      contactoEmergencia: "Contacto 6",
      numeroEmergencia: "432-109-8765",
      numeroCuarto: "106",
      contraseña: "contraseña6"
    }
  ];

  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

  const manejarClicBoton = (indice) => {
    setTarjetaSeleccionada(cardData[indice]);
  };

  return (
    <div className="lista-botones">
      <div>
      {cardData.map((item, index) => (
        <div key={index}>
          <Boton onClick={() => manejarClicBoton(index)}>{item.nombre}</Boton>
          <br /><br />
        </div>
      ))} 
      </div>
      <div>
      {tarjetaSeleccionada && <Card1 {...tarjetaSeleccionada} />}
      </div>
    </div>
  );
};

export default ListaBotones;
