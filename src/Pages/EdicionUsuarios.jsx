 import "../../styles/pages.css"

import LabelTitle from '../Moleculas/LabelTitle';
function EdicionUsuarios() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Agregar Usuarios" complement="RentLaR"/>
            <CardAgregar title="Agregar" />
           
        </div>
    );
}

export default EdicionUsuarios;