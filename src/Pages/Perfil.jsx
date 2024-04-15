 import "../../styles/pages.css"
 import CardInputs from '../Moleculas/CardInputs';
 import LabelTitlee from '../Moleculas/LabelTitle';
function Perfil() {
    return ( 
        <div className="PerfilClass">
            <LabelTitlee text="Perfil" complement="RentLaR"/>
            <CardInputs title="Bienvenido a tu perfil" text="¿Deseas editar tu información? Acude con tu Arrendatario para realizar el cambio"/>
           
        </div>
    );
}

export default Perfil;