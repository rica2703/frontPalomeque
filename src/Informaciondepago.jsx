import CardTextS from "./Moleculas/cardText";
import {data} from './assets/data/data'
import LabelTitle from "./Moleculas/LabelTitle";

import '../styles/pages.css'

import img from './assets/react.svg'

function InformacionDePago() {
    return ( 
        <div  className="InfPagoClass">
            
            <LabelTitle complement="RentLaR" text="Información de pago"/>


            <img src={img} style={{margin: "100px"}} width={100}/>

            <CardTextS text1={data.InformacionDePago.card1[0]} text2={data.InformacionDePago.card1[1]} text3={data.InformacionDePago.card1[2]}/>
        </div>
    );
}

export default InformacionDePago;