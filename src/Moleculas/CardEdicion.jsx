import React, { useState } from 'react';
import Input from '../atomos/Input';
import Button from '../atomos/Button';

function CardEdicion({ title, titleSize = 50, text, onDelete }) {
    const [showAlert, setShowAlert] = useState(false);

    const handleDelete = () => {
        onDelete(); // Llama a la función de eliminación proporcionada por el componente padre
        setShowAlert(false); // Oculta la alerta después de eliminar el usuario
    }

    return (
        <div className="CardInputClass">
            <p style={{ fontSize: titleSize }}>{title}</p>
            <div className='container'>
                <div className='Column'>
                    <Input nombre={"Nombre"} ></Input>
                    <br />
                    <Input nombre={"Fecha de Pago"}></Input>
                    <br />
                    <Input nombre={"Monto de Pago"}></Input>
                    <br />
                    <Input nombre={"Número de Telefono"}></Input>
                </div>
                <div className='Column'>
                    <Input nombre={"Contacto de Emergencia"}></Input>
                    <br />
                    <Input nombre={"Número de Emergencia"}></Input>
                    <br />
                    <Input nombre={"Número de Cuarto"}></Input>
                    <br />
                    <Input nombre={"Contraseña"}></Input>
                </div>
            </div>
            <Button bProps={[]} />
            <button  className='edicion'>Guardar</button>
            <button className="edicion" onClick={() => setShowAlert(true)}>Eliminar</button> {/* Botón para mostrar la alerta */}

            {/* Alerta */}
            {showAlert && (
                <div className="alert">
                    <p>¿Estás seguro de que deseas eliminar este usuario?</p>
                    <button onClick={handleDelete}>Eliminar</button>
                    <button onClick={() => setShowAlert(false)}>Cancelar</button>
                </div>
            )}

            <p style={{ color: "black" }}>{text}</p>
        </div>
    );
}

export default CardEdicion;
