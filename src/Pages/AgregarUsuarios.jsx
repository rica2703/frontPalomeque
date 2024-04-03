import CardInputs from "../Moleculas/CardInputs";
import LabelTitle from "../Moleculas/LabelTitle";
import "../../styles/pages.css"

function AgregarUsuarios() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Agregar Usuarios" complement="RentLaR"/>
            <CardInputs title="Editar"/>
           
        </div>
    );
}

export default AgregarUsuarios;