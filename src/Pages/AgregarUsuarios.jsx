import CardEdicion from "../Moleculas/CardEdicion";
import LabelTitle from "../Moleculas/LabelTitle";
import "../../styles/pages.css"

function AgregarUsuarios() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Editar Usuarios" complement="RentLaR"/>
            <CardEdicion title="Editar"/>
           
        </div>
    );
}

export default AgregarUsuarios;