import Card from '../Moleculas/Card';
import LabelTitlee from '../Moleculas/LabelTitle';
import "../../styles/pages.css"
import Input from '../atomos/Input';
import "../../styles/pages.css"
const CardList = () => {
  return (
    <>
    <LabelTitlee complement="RentLaR" text="Sugerencias Clientes"/>
      <div className="cardlist">
      
        <h2></h2>
        <Card name="Luis Palomeque" postCount="Solicito un mantenimiento regular para asegurar el buen estado del lugar."  />   
        <Card name="Rodrigo Borrayes"  postCount="Sería genial si pudieras enviar a alguien para solucionar la fuga de agua en el baño lo antes posible. ¡Gracias de antemano por tu ayuda! "/>   
        <Card name="Luis A"  postCount="¿Podríamos programar una visita para abordar el problema con la cerradura de la puerta principal? Sería estupendo resolver esto lo antes posible para evitar complicaciones mayores."/>
         <Input className="input" nombre={"Escribe tu Mensaje......"}></Input>  
         
      </div>
    </>
  )
}

export default CardList;
