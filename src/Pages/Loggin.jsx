import React from "react";
import "../../styles/atomos.css";
import Button from "../atomos/Button";
import Label from "../Moleculas/Label";
import "../../styles/pages.css"

export default function Logging() {
  const bProps = [
    {
      nombre: "Iniciar",
      style: "Button",
    },
  ];
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
                  type="email"
                  id="login-email"
                  autoComplete="off"
                  placeholder=" "
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
                  required=""
                />
              </div>
            </div>
            <div className="buttonContainer">
              <Button bProps={bProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}