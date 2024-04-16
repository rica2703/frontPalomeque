import CardTextS from "../Moleculas/cardText";
import { data } from "../assets/data/data";
import LabelTitlee from "../Moleculas/LabelTitlee";
import "../../styles/pages.css"
import img from "../assets/tarjeta.png"
function InformacionDePago() {
    return ( 
        <div  className="InfPagoClass">
            
            <LabelTitlee complement="RentLaR" text="Información de pago"/>


            <img src={img} style={{margin: "40px"}} width={350}/>

            <CardTextS text1={data.InformacionDePago.card1[0]} text2={data.InformacionDePago.card1[1]} text3={data.InformacionDePago.card1[2]}/>
        </div>
    );
}

export default InformacionDePago;   
