import React, { useState } from 'react';
import Input from '../atomos/Input';
import Button from '../atomos/Button';
import { useEffect } from 'react';
import { useContext } from 'react';
import userContext from '../userContext';
import { useNavigate } from 'react-router-dom';
function CardEdicion({ title, titleSize = 50, text, onDelete }) {
    const [showAlert, setShowAlert] = useState(false);
    const [datosLocal, setDatosLocal] = useState([]);
    const [tarjeta, setTarjeta] = useState("");
    const { user, setUser } = useContext(userContext);
    const [nombre, setNombre] = useState(user.nombre);
    const [telefono, setTelefono] = useState(user.numCelular); 
    const [contactoEmergencia, setContactoEmergencia] = useState(user.nombreEmergencia); 
    const [numEmergencia, setNumEmergencia] = useState(user.numEmergencia); 
    const [numCuarto, setNumCuarto] = useState(user.numCuarto);
    const [token,setToken]=useState("");
    const navigate=useNavigate();
    const handleDelete = () => {
        onDelete(); // Llama a la función de eliminación proporcionada por el componente padre
        setShowAlert(false); // Oculta la alerta después de eliminar el usuario
    }
    useEffect(() => {
              const tokenFromStorage = localStorage.getItem('token');
              setToken(tokenFromStorage);
},[]);
const guardarUsuario = () => {
    // Construye el objeto con los datos actualizados del usuario
    const updatedUser = {
        nombre: nombre,
        numCelular: telefono,
        nombreEmergencia: contactoEmergencia,
        numEmergencia: numEmergencia,
    };

    // Realiza la solicitud PUT al servidor para actualizar los datos del usuario
    fetch('http://localhost:8080/api/auth/users/' +numCuarto, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token,
        },
        body: JSON.stringify(updatedUser) // Convierte el objeto a formato JSON
    })
    .then(response => {
        if (response.ok) {
            // Si la solicitud es exitosa, actualiza el estado del usuario en el contexto
            setUser(updatedUser);
            alert("usuario actualizado");
            // Puedes hacer otras acciones aquí si es necesario
        } else {
            alert("Error al actualizar el usuario.");
            throw new Error('Error al actualizar el usuario.');
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert("Error al actualizar el usuario.")
        // Maneja el error de la manera que desees (por ejemplo, muestra un mensaje al usuario)
    });
}


    //     const [datos,setDatos]=useState([]);
    //     const [indice,setIndice]=useState(0);
    //     useEffect(() => {
    //       const tokenFromStorage = localStorage.getItem('token');
    //       setToken(tokenFromStorage);
    //   fetch('http://localhost:8080/api/auth/users', {
    //       method: 'GET',
    //       headers: {
    //           'Content-Type': 'application/json',
    //           'x-access-token': token,
    //       },
    //   })
    //       .then(response => {
    //           if (response.ok) {
    //               return response.json();
    //           } else {
    //               throw new Error('Error al obtener los datos.');
    //           }
    //       })
    //       .then(data => {
    //           console.log('Datos obtenidos:', data);
    //           setDatos(data);
    //           setIndice(localStorage.getItem('indice'));
    //       })
    //       .catch(error => {
    //           console.error('Error:', error.message);
    //       });
    //   }, []);
const handlerEliminar=()=>{
    fetch(`http://localhost:8080/api/auth/users/${numCuarto}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token,
        }
    })
    .then(response => {
        if (response.ok) {
            // Si la solicitud es exitosa, actualiza el estado del usuario en el contexto
            setUser(null); // Elimina al usuario del contexto
            alert("Usuario eliminado");
            // Puedes hacer otras acciones aquí si es necesario
        } else {
            alert("error al eliminar el usuario");
            throw new Error('Error al eliminar el usuario.');
        }
    })
    .catch(error => {
        alert("error al eliminar el usuario");
        console.error('Error:', error.message);
        // Maneja el error de la manera que desees (por ejemplo, muestra un mensaje al usuario)
    });
    setShowAlert(false)
    navigate("/lista-usuario");
}
    return (
        <div className="CardInputClass">
            <p style={{ fontSize: titleSize }}>{title}</p>
            <div className='container'>
                <div className='Column'>
                    <Input onChange={(e) => setNombre(e.target.value)} textoInput={user.nombre} nombre={"Nombre"} ></Input>
                    <br />
                    <Input nombre={"Fecha de Pago"}></Input>
                    <br />
                    <Input textoInput="$1800" nombre={"Monto de Pago"}></Input>
                    <br />
                    <Input onChange={(e) => setTelefono(e.target.value)} textoInput={user.numCelular} nombre={"Número de Telefono"}></Input>
                </div>
                <div className='Column'>
                    <Input onChange={(e) => setContactoEmergencia(e.target.value)} textoInput={user.nombreEmergencia} nombre={"Contacto de Emergencia"}></Input>
                    <br />
                    <Input onChange={(e) => setNumEmergencia(e.target.value)} textoInput={user.numEmergencia} nombre={"Número de Emergencia"}></Input>
                    <br />
                    <Input onChange={(e) => setNumCuarto(e.target.value)} textoInput={user.numCuarto} nombre={"Número de Cuarto"}></Input>
                    <br />
                    <Input nombre={"Contraseña"}></Input>
                </div>
            </div>
            <Button bProps={[]} />
            <button onClick={() => guardarUsuario()} className='edicion'>Guardar</button>
            <button className="edicion" onClick={() =>setShowAlert(true) }>Eliminar</button> {/* Botón para mostrar la alerta */}

            {/* Alerta */}
            {showAlert && (
                <div className="alert">
                    <p>¿Estás seguro de que deseas eliminar este usuario?</p>
                    <button onClick={() => handlerEliminar()}>Eliminar</button>
                    <button onClick={()=>setShowAlert(false)}>Cancelar</button>
                </div>
            )}

            <p style={{ color: "black" }}>{text}</p>
        </div>
    );
}

export default CardEdicion;
