import React from "react";
import "../../styles/atomos.css";
import "../../styles/pages.css"; 
import Button from "../atomos/Button";
import Contenido from "../organismo/Contenido";
export default function Landing() {
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
            <div className="landingTitleContainer"> 
              <h1 className="landingTitle">¡Bienvenido Arrendador!</h1>
              <div className="buttonContainer">
                <Button bProps={bProps} />
              </div>
            </div>
          </header>
          <section>
            <Contenido />
          </section>
        </div>
      </div>
    </>
  );
}

