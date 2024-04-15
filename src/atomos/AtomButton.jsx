import React, { useState } from 'react';
import '../../styles/atomos.css';
import Card1 from '../Moleculas/Card1';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';

const Boton = ({ children, onClick, nombre, icono }) => {
  const renderIcon = (icono) => {
    switch (icono) {
      case '1':
        return <LooksOneIcon style={{ marginRight: '5px' }} />;
      case '2':
        return <LooksTwoIcon style={{ marginRight: '5px' }} />;
      case '3':
        return <Looks3Icon style={{ marginRight: '5px' }} />;
      case '4':
        return <Looks4Icon style={{ marginRight: '5px' }} />;
      case '5':
        return <Looks5Icon style={{ marginRight: '5px' }} />;
      case '6':
        return <Looks6Icon style={{ marginRight: '5px' }} />;
      default:
        return null;
    }
  };

  return (
    <button className="boton" onClick={onClick}>
      {renderIcon(icono)} {/* Renderiza el icono */}
      {nombre}
    </button>
  );
};

  const ListaBotones = () => {
    const cardData = [
      {
        nombre: "Luis Hernandez  ",
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

      const [tarjetaVisible, setTarjetaVisible] = useState(false);
      const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
    
      const manejarClicBoton = (indice) => {
        if (indice === tarjetaSeleccionada) {
          setTarjetaVisible(false);
          setTarjetaSeleccionada(null);
        } else {
          setTarjetaVisible(true);
          setTarjetaSeleccionada(indice);
        }
      };
    
      return (
        <div className="lista-botones">
          <div>
            {cardData.map((item, index) => (
              <div key={index}>
                <Boton onClick={() => manejarClicBoton(index)} nombre={item.nombre}>
                  {item.nombre}
                </Boton>
                <br /><br />
              </div>
            ))}
          </div>
          <div className={`card-container ${tarjetaVisible ? 'visible' : 'hidden'}`}>
            {tarjetaSeleccionada !== null && <Card1 {...cardData[tarjetaSeleccionada]} />}
          </div>
        </div>
      );
    };
    
    export default ListaBotones;