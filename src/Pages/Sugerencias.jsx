import React, { useState, useEffect } from 'react';
import Card from '../Moleculas/Card';
import LabelTitlee from '../Moleculas/LabelTitlee';
import "../../styles/pages.css";
import Input from '../atomos/Input';
import img from "../assets/img/Logo.png";
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const [datos, setDatos] = useState([]);
  const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje ingresado en el input
  const [datosMensaje,setDatosMensaje]=useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const numCuarto = localStorage.getItem('numCuarto');
    fetch(`http://localhost:8080/api/auth/users/${numCuarto}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al obtener los datos.');
        }
    })
    .then(data => {
        setDatos(data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
  }, []);

 useEffect(() => {
    fetch(`http://localhost:8080/api/auth/mensajes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al obtener los datos.');
        }
    })
    .then(data => {
      // alert("ok mensajes")
        setDatosMensaje(data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
  }, []);

  const obtenerMensajes = () => {
    fetch(`http://localhost:8080/api/auth/mensajes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al obtener los datos.');
        }
    })
    .then(data => {
        setDatosMensaje(data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
  };

  const enviarMensaje = () => {
    const numCuarto = localStorage.getItem('numCuarto');
    const username = datos?.nombre; // Obtener el nombre de usuario directamente

    const nuevoMensaje = {
      username: username,
      contenido: mensaje
    };

    fetch('http://localhost:8080/api/auth/mensajes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoMensaje)
    })
    .then(response => {
      if (response.ok) {
        console.log('Mensaje enviado correctamente');
        setMensaje(""); // Limpiar el input después de enviar el mensaje
        obtenerMensajes(); // Obtener los mensajes actualizados después de enviar el mensaje
        // Aquí puedes hacer alguna acción adicional si el mensaje se envió correctamente
      } else {
        throw new Error('Error al enviar el mensaje.');
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
      // Manejar el error de alguna manera (por ejemplo, mostrar un mensaje al usuario)
    });
  };

  return (
    <>
      <LabelTitlee complement="RentLaR" text="Chat Grupal" />
      <div className="cardlist">
        <h2></h2>
        <img src={img} className="Sugerencia" />
        {datosMensaje.map((data)=>(
        <Card name="" postCount={data.contenido}/>
        ))}
        {/* Resto de tus tarjetas */}
        <Input 
          className="input" 
          nombre={"Escribe tu Mensaje..."} 
          value={mensaje} // Asigna el valor del input
          onChange={(e) => setMensaje(e.target.value)} // Actualiza el estado del mensaje cuando cambia el input
        />
        <button onClick={enviarMensaje}>Enviar</button>
      </div>
    </>
  );
};

export default CardList;
