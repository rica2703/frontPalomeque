import React, { useState } from 'react';
import '../../styles/moleculas.css';
import Input from '../atomos/Input';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Card2({title, titleSize = 50, text}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [numCelular, setNumCelular] = useState("");
    const [nombreEmergencia, setNombreEmergencia] = useState("");
    const [numEmergencia, setNumEmergencia] = useState("");
    const [numCuarto, setNumCuarto] = useState("");
    const[token,setToken]=useState("");
    const navigate=useNavigate();
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        setToken(tokenFromStorage);
},[]);
    const agregarUsuario = () => {
        const nuevoUsuario = {
            username: username,
            email: email,
            password: password,
            nombre: nombre,
            numCelular: numCelular,
            nombreEmergencia: nombreEmergencia,
            numEmergencia: numEmergencia,
            numCuarto: numCuarto,
        };

        // Realiza la solicitud POST al servidor para agregar el nuevo usuario
        fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':token,
                // Agrega otros encabezados necesarios, como el token de acceso, si es necesario
            },
            body: JSON.stringify(nuevoUsuario) // Convierte el objeto a formato JSON
        })
        .then(response => {
            if (response.ok) {
                alert("usuario agregado exitosamente");
                navigate("/landing");
                // Si la solicitud es exitosa, puedes hacer alguna acción adicional si es necesario
            } else {
                throw new Error('Error al agregar el usuario.');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
            // Maneja el error de la manera que desees (por ejemplo, muestra un mensaje al usuario)
        });
    }

    return (
        <div className="CardInputClass">
            <p style={{fontSize: titleSize }}>{title}</p>   
            <div className='container'>
                <div className='Column'> 
                    <Input onChange={(e) => setUsername(e.target.value)} nombre={"Username"} ></Input>
                    <br />
                    <Input onChange={(e) => setEmail(e.target.value)} nombre={"Email"}></Input>
                    <br />
                    <Input onChange={(e) => setPassword(e.target.value)} nombre={"Password"}></Input>
                    <br />
                    <Input onChange={(e) => setNombre(e.target.value)} nombre={"Nombre"}></Input>
                </div>
                <div className='Column'>
                    <Input onChange={(e) => setNumCelular(e.target.value)} nombre={"Número de Celular"}></Input>
                    <br />
                    <Input onChange={(e) => setNombreEmergencia(e.target.value)} nombre={"Contacto de Emergencia"}></Input>
                    <br />
                    <Input onChange={(e) => setNumEmergencia(e.target.value)} nombre={"Número de Emergencia"}></Input>
                    <br />
                    <Input onChange={(e) => setNumCuarto(e.target.value)} nombre={"Número de Cuarto"}></Input>                           
                </div>     
            </div>
            <button onClick={agregarUsuario} className='edicion'>Agregar</button> {/* Agregar la clase 'edicion' al botón */}
            <p style={{color: "black"}}>{text}</p>        
            
        </div>
    );
}   

export default Card2;
