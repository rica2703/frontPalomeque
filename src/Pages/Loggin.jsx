
import React from "react";
import "../../styles/atomos.css"
import Button from "../atomos/Button";
import Label from "../Moleculas/Label";

export default function Logging() {
  const bProps = [
    {
      nombre:"Iniciar",
      style:"Button",
    }
  ]
  return (
    <>
      <div className="bigContainer">
        <div className="containerLogging">
          <div className="headerLogging"
          >
            
            <Label title="Bienvenidos a" text="RentLaR"/>

          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div className="formContainerLogging"
            >
              <div
                style={{
                  margin: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6676/6676023.png"
                  alt="avatar"
                  style={{
                    height: "50px",
                  }}
                />

                <h1>Iniciar Sesió n</h1>
              </div>
              <div
                style={{
                  margin: "15px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h2
                  style={{
                    margin: "20px",
                    marginLeft: "40px",
                  }}
                >
                  Usuario
                </h2>
                <div class="input-wrapper">
                  <input
                    class="input input-text"
                    type="email"
                    id="login-email"
                    autocomplete="off"
                    placeholder=" "
                    required
                  />
                  <label class="input-label" for="login-email">
                    Email
                  </label>
                </div>
              </div>
              <div
                style={{
                  margin: "15px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h2
                  style={{
                    margin: "12px",
                  }}
                >
                  Contraseña
                </h2>
                <div class="input-wrapper">
                  <input
                    class="input input-text"
                    type="password"
                    id="login-password"
                    autocomplete="off"
                    placeholder=" "
                    required=""
                  />
                  <label class="input-label" for="login-password">
                    Password
                  </label>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button bProps={bProps}/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

