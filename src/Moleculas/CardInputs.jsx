import '../../styles/moleculas.css'
import Input from '../atomos/Input';

function CardInputs({title, titleSize = 50, text}) {
    return (
        <div className="CardInputClass">
            <p style={{fontSize: titleSize }}>{title}</p>
            
            <div className='container'>
                <div className='Column'>
                    <Input nombre={"Nombre"}></Input>
                    <br />
                    <Input nombre={"Fecha de Pago"}></Input>
                    <br />
                    <Input nombre={"Monto de Pago"}></Input>
                    <br />
                    <Input nombre={"Numero de Telefono"}></Input>
                    {/* Inputs de lado izquierdo */}
                </div>
                <div className='Column'>
                    <Input nombre={"Contacto de Emergencia"}></Input>
                    <br />
                    <Input nombre={"Numero de Emergencia"}></Input>
                    <br />
                    <Input nombre={"Numero de Cuarto"}></Input>
                    <br />
                    <Input nombre={"Contraseña"}></Input>
                    {/* Inputs de lado Derecho */}
                    
                </div>
            </div>
            <p style={{color: "black"}}>{text}</p>
            
        </div>
    );
}   

export default CardInputs;