import React, { useState } from "react";
import "../../styles/atomos.css";
import Button from "../atomos/Button";
import Label from "../Moleculas/Label";
import "../../styles/pages.css";
import { Link } from 'react-router-dom';

export default function Logging() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const bProps = [
    {
      nombre: "Iniciar",
      style: "Button",
    },
  ];

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (username !== "250" || password !== "palomeque") {
      setError("Usuario o contraseña incorrectos");
    } else {
      // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones necesarias
      window.location.href = "/landing";
    }
  };

  return (
    <>
      <div className="bigContainer">
        <div className="containerLogging">
          <div className="headerLogging">
            <Label title="Bienvenidos a" text="RentLaR" />
          </div>
          <div className="formContainerLogging">
            <div className="formHeader">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6676/6676023.png"
                alt="avatar"
                className="avatar"
              />
              <h1 className="formTitle">Iniciar Sesión</h1>
            </div>
            <div className="inputContainer">
              <label htmlFor="login-email" className="inputTitle">Usuario</label>
              <div className="input-wrapper">
                <input
                  className="input input-text"
                  type="text"
                  id="login-email"
                  autoComplete="off"
                  placeholder=" "
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="login-password" className="inputTitle">Contraseña</label>
              <div className="input-wrapper">
                <input
                  className="input input-text"
                  type="password"
                  id="login-password"
                  autoComplete="off"
                  placeholder=" "
                  value={password}
                  onChange={handlePasswordChange}
                  required=""
                />
              </div>
            </div>
            <div className="error">{error}</div>
            <div className="buttonContainer">
            <Link to="/landing" className="button-link">
                <Button bProps={bProps} />
              </Link>   

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
