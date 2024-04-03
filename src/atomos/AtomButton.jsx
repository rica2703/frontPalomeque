
import React from 'react';
import '../../styles/atomos.css';

const Boton = ({ children }) => {
  return <button className="boton">{children}</button>;
};

const ListaBotones = () => {
  return (
    <div className="lista-botones">
        <br /><br />
      <Boton>Luis Palomeque</Boton>
      <br /><br />

      <Boton>Margarita Olivera</Boton>
      <br /><br />
      <Boton>Rodrigo Borrayes</Boton>
      <br /><br />
      <Boton>Sofia Abarca Ruiz</Boton> 
      <br /><br />
      <Boton>Fernanda Morales</Boton>
      <br /><br />
      <Boton> Mauricio de Santos</Boton>
      <br />
     
    
    </div>
  );
};

export default ListaBotones;

