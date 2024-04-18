import React, { useState, useEffect } from 'react';
import Input from '../atomos/Input';

function CardInputs({ title, titleSize = 50, text }) {
    const [perfilUsuario, setPerfilUsuario] = useState({});
    const [token,setToken]=useState("");
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        setToken(tokenFromStorage);
    }, []);

    useEffect(() => {
        // Obtener el número de cuarto del localStorage
        const numCuarto = localStorage.getItem('numCuarto');

        // Realizar la solicitud GET para obtener la lista de usuarios
        fetch(`http://localhost:8080/api/auth/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
        })
        .then(response => {
            if (response.ok) {
                alert("usuario encontrado")
                return response.json();
            } else {
                alert("erro en back")
                throw new Error('Error al obtener la lista de usuarios.');
            }
        })
        .then(data => {
            // Filtrar la lista de usuarios para encontrar el usuario con el número de cuarto correspondiente
            const usuarioEncontrado = data.find(usuario => usuario.numCuarto === parseInt(numCuarto));
            if (usuarioEncontrado) {
                alert("usuario encontrado")
                setPerfilUsuario(usuarioEncontrado);
            } else {
                alert("no encontrado")
                throw new Error('Usuario no encontrado.');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
    }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez, después del primer renderizado

    return (
        <div className="CardInputClass">
            <p style={{ fontSize: titleSize }}>{title}</p>
            <div className='container'>
                <div className='Column'>
                    <Input nombre="Nombre" value={perfilUsuario.nombre || ''} readOnly />
                    <br />
                    <Input nombre={"email"} value={perfilUsuario.email || ''} readOnly />
                    <br />
                    <Input nombre={"Monto de Pago"} value="1800" readOnly />
                    <br />
                    <Input nombre={"Número de Telefono"} value={perfilUsuario.numCelular || ''} readOnly />
                </div>
                <div className='Column'>
                    <Input nombre={"Contacto de Emergencia"} value={perfilUsuario.nombreEmergencia || ''} readOnly />
                    <br />
                    <Input nombre={"Número de Emergencia"} value={perfilUsuario.numEmergencia || ''} readOnly />
                    <br />
                    <Input nombre={"Número de Cuarto"} value={perfilUsuario.numCuarto || ''} readOnly />
                    <br />
                    <Input nombre={"Contraseña"} value={perfilUsuario.contraseña || ''} readOnly />
                </div>
            </div>
            <p style={{ color: "black" }}>{text}</p>
        </div>
    );
}

export default CardInputs;
