import '../styles/pages.css'
import CardInputs from "./Moleculas/CardInputs";
import LabelTitle from "./Moleculas/LabelTitle";

function Perfil() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Perfil" complement="RentLaR"/>
            <CardInputs title="Bienvenido a tu perfil" text="¿Deseas editar tu información? Acudec con tu Arrendatario para realizar el cambio"/>
           
        </div>
    );
}

export default Perfil;