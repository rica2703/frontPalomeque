import React, { useState } from "react";
import "../../styles/atomos.css";
import Button from "../atomos/Button";
import Label from "../Moleculas/Label";
import "../../styles/pages.css";
import axios from "axios";
import { Info } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Logging() {
  const [numCuarto, setNumCuarto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setNumCuarto(e.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numCuarto: numCuarto,
        password: password,
      }),
    };

    fetch("http://localhost:8080/api/auth/signin", requestOption)
      .then((response) => {
        if (response.ok) {
          alert("Inicio de sesión exitoso");
          localStorage.setItem("numCuarto", numCuarto);
          return response.json();
        } else if (response.status === 400) {
          alert("Credenciales inválidas");
          throw new Error("Credenciales inválidas");
        } else {
          alert("Error al iniciar sesión");
          throw new Error("Error al iniciar sesión");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        if (numCuarto === "255") {
          navigate("/landing");
        } else {
          navigate("/menu-usuario");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
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
              <label htmlFor="login-email" className="inputTitle">
                Usuario
              </label>
              <div className="input-wrapper">
                <input
                  className="input input-text"
                  type="number"
                  id="login-email"
                  autoComplete="off"
                  placeholder=" "
                  value={numCuarto}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="login-password" className="inputTitle">
                Contraseña
              </label>
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
              <button className="button-link" type="submit">
                <button onClick={handleSubmit} className="Button">
                  Iniciar
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
