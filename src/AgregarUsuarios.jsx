import '../styles/pages.css'
import CardInputs from "./Moleculas/CardInputs";
import LabelTitle from "./Moleculas/LabelTitle";


function AgregarUsuarios() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Agregar Usuarios" complement="RentLaR"/>
            <CardInputs title="Editar"/>
           
        </div>
    );
}

export default AgregarUsuarios;