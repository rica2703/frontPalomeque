import React from 'react'
import Card from './Moleculas/Card'
import '../styles/pages.css'
import LabelTitle from "./Moleculas/LabelTitle";
import img from './assets/tarjeta.png'



const Comprobantes = () => {
  return (
    <>
    <LabelTitle complement="RentLaR" text="Comprobantes"/>

      <div className="cardlist">
      
        
        <Card name="Luis Palomeque"   linkName="Abrir Comprobante" className="Nombres" img={img}/>   
        <br />
        <Card name="Vìctor Atala"  linkName="Abrir Comprobante"/>  
        <br />
        <Card name="Rodrigo Borrayes"  linkName="Abrir Comprobante"/>

        
        
      </div>
    </>
  )
}   

export default Comprobantes;

