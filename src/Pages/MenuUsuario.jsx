
import React from "react";
import "../../styles/atomos.css";
import "../../styles/pages.css"; 
import Button from "../atomos/Button";
import Usuario from "../organismo/Usuario";

export default function MenuUsuario() {
  const bProps = [{}];
  const bProps2 = [{}];
  return (
    <>
      <div className="bigContainer">
        <div className="containerLanding">
          <header className="headerLanding">
            <div className="rentlarTitle">
              <h1>RentLaR!</h1>
            </div>
            <div className="tituloLandingContainer"> {/* Contenedor para centrar */}
              <h1 className="tituloLanding">¡Bienvenido Emprendedor!</h1>
              <div className="buttonContainer">
                <Button bProps={bProps} />
              </div>
            </div>
          </header>
          <section>
            <Usuario/>
          </section>
        </div>
      </div>
    </>
  );
}
