import React from 'react'
import Card from './Moleculas/Card'
import '../styles/pages.css'
import LabelTitle from "./Moleculas/LabelTitle";


const Comprobantes = () => {
  return (
    <>
    <LabelTitle complement="RentLaR" text="Comprobantes"/>

      <div className="cardlist">
      
        <h2>Comprobantes Clientes</h2>
        <Card name="Luis Palomeque"   linkName="Abrir Comprobante" className="Nombres"/>   
        <br />
        <Card name="Atala Vuelta"  linkName="Abrir Comprobante"/>  
        <br />
        <Card name="Rodrigo Borrayes"  linkName="Abrir Comprobante"/>
        
      </div>
    </>
  )
}

export default Comprobantes