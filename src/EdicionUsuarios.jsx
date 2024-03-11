import '../styles/pages.css'
import CardInputs from "./Moleculas/CardInputs";
import LabelTitle from "./Moleculas/LabelTitle";


function EdicionUsuarios() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Edicion de Usuarios" complement="RentLaR"/>
            <CardInputs title="Agregar" />
           
        </div>
    );
}

export default EdicionUsuarios;