import Card from '../Moleculas/Card';
import LabelTitle from '../Moleculas/LabelTitle';
import "../../styles/pages.css"

const CardList = () => {
  return (
    <>
    <LabelTitle complement="RentLaR" text="Sugerencias Clientes"/>
      <div className="cardlist">
      
        <h2></h2>
        <Card name="Sugerencia:" postCount="Solicito un mantenimiento regular para asegurar el buen estado del lugar."  linkName="Luis Palomeque" />   
        <Card name="Sugerencia:"  postCount="Sería genial si pudieras enviar a alguien para solucionar la fuga de agua en el baño lo antes posible. ¡Gracias de antemano por tu ayuda!" linkName="Rodrigo Borrayes "/>   
        <Card name="Sugerencia:"  postCount="¿Podríamos programar una visita para abordar el problema con la cerradura de la puerta principal? Sería estupendo resolver esto lo antes posible para evitar complicaciones mayores." linkName="Vìctor Atala"/>
        
      </div>
    </>
  )
}

export default CardList;
