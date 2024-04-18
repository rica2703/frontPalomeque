import '../../styles/moleculas.css'
import Input from '../atomos/Input';


function CardAgregar({title, titleSize = 50, text}) {
    const bProps = [
        {
          nombre:"Continuar",
          style:"Button",
        }
      ] 
    return (
        <div className="CardInputClass">
            <p style={{fontSize: titleSize }}>{title}</p>   
            <div className='container'>
                <div className='Column'> 
                    <Input nombre={"Nombre"} > </Input>
                    <br />
                    <Input nombre={"Fecha de Pago"}></Input>
                    <br />
                    <Input nombre={"Monto de Pago"}></Input>
                    <br />
                    <Input nombre={"Número de Telefono"}></Input>
                </div>
                <div className='Column'>
                    <Input nombre={"Contacto de Emergencia"}></Input>
                    <br />
                    <Input nombre={"Número de Emergencia"}></Input>
                    <br />
                    <Input nombre={"Número de Cuarto"}></Input>
                    <br />
                    <Input nombre={"Contraseña"}></Input>                           
                    </div>     ´

                    <button  className='edicion'>Agregar</button>
            </div>

          
            <p style={{color: "black"}}>{text}</p>        
            
        </div>
    );
}   
export default CardAgregar;