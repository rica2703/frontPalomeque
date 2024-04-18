import React, { useEffect, useState } from 'react';
import '../../styles/atomos.css';
import Card1 from '../Moleculas/Card1';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';
import { useContext } from 'react';
import userContext from '../userContext';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
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
    const {user,setUser}=useContext(userContext);
    const [token,setToken]=useState("");
    const [datos,setDatos]=useState([]);
    const [iteracion,setIteracion]=useState(8);
    const navigate=useNavigate();
    useEffect(() => {
      const tokenFromStorage = localStorage.getItem('token');
      setToken(tokenFromStorage);
  }, []);
  fetch('http://localhost:8080/api/auth/users', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
      },
  })
      .then(response => {
          if (response.ok) {
              // Si la respuesta del servidor es exitosa (código de estado 200),
              // parseamos la respuesta como JSON y la devolvemos
              return response.json();
          } else {
              // Si el servidor devuelve un código de estado de error, lanzamos una excepción con un mensaje de error
              throw new Error('Error al obtener los datos.');
          }
      })
      .then(data => {
          // Si todo va bien y se recibe una respuesta válida del servidor, se ejecuta esta parte
          console.log('Datos obtenidos:', data);
          setDatos(data)
          // Puedes realizar acciones adicionales con los datos, como actualizar el estado de tu aplicación
      })
      .catch(error => {
          // Si ocurre algún error en el proceso, se captura aquí
          console.error('Error:', error.message);
          // Aquí puedes mostrar un mensaje de error al usuario, informando sobre lo que ha salido mal
      });
      // useEffect(()=>{
        
      // },[]);
      
      const [tarjetaVisible, setTarjetaVisible] = useState(false);
      const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
    
      const manejarClicBoton = (indice) => {
        if (indice === tarjetaSeleccionada) {
          setTarjetaVisible(!tarjetaVisible);
          setTarjetaSeleccionada(null);
          // alert("entro al if");
          setUser(null); // Reinicia el contexto
          // alert("dato eliminado del contexto");
        } else {
          // alert("entro al else");
          setTarjetaVisible(true);
          setTarjetaSeleccionada(indice);
          // setUser({
          //   username: datos[indice].username,
          //   email: datos[indice].email,
          //   nombre: datos[indice].nombre,
          //   numCelular: datos[indice].numCelular,
          //   nombreEmergencia: datos[indice].nombreEmergencia,
          //   numEmergencia: datos[indice].numEmergencia,
          //   numCuarto: datos[indice].numCuarto,
          // });
          // alert("dato guardado en contexto",tarjetaSeleccionada,datos[11].nombre);
        }
      };
      
    const handlerClickEditar=(indice)=>{
      // alert("tarjeta seleccionada es: "+indice);
      setUser({
          username: datos[indice].username,
          email: datos[indice].email,
          nombre: datos[indice].nombre,
          numCelular: datos[indice].numCelular,
          nombreEmergencia: datos[indice].nombreEmergencia,
          numEmergencia: datos[indice].numEmergencia,
          numCuarto: datos[indice].numCuarto,
        });
        navigate("/agregar-usuarios")
        // alert(datos[indice].numCuarto)
    }
      return (
        <div className="lista-botones">
          <div>
            {datos.map((item, index) => (
              <div key={index}>
                {/* <Boton onClick={() => manejarClicBoton(index)} nombre={item.nombre}>
                  {item.nombre}
                </Boton> */}
                <button className='boton' onClick={()=>manejarClicBoton(index)}>{item.nombre}</button>
                <br /><br />
              </div>
            ))}
          </div>
          <div className={`card-container ${tarjetaVisible ? 'visible' : 'hidden'}`}>
            {tarjetaSeleccionada !== null && 
            <Card1 onClick={()=>handlerClickEditar(tarjetaSeleccionada)} numeroCuarto={datos[tarjetaSeleccionada].numCuarto} contactoEmergencia={datos[tarjetaSeleccionada].nombreEmergencia} nombre={datos[tarjetaSeleccionada].nombre} telefono={datos[tarjetaSeleccionada].numCelular} numeroEmergencia={datos[tarjetaSeleccionada].numEmergencia} />}
          </div>
        </div>
      );
    };
    
    export default ListaBotones;