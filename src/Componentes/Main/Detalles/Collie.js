import { Link } from 'react-router-dom';
import estilos from './Malinois.module.css';

function Collie () {
    return ( 
        <div className={estilos.completo}>
            <div className={estilos.tarjeta}>
            <Link to='/pastores'>◀️</Link>
                <div className={estilos.flexible}>
                        <img 
                            src={require('../../../img/collie2.png')} 
                            alt='Border collie'
                            className={estilos.img}
                        ></img>
                    <div>
                        <ul className={estilos.lista}>
                       <li> <b>Nombre:</b> Border collie:</li> 
                       <li> <b> Fisico:</b> Talla mediana con un pelaje moderado de doble capa, los colores más habituales son negro y blanco, ojos habitualmente de color marrón o azul.</li>  
                       <li> <b>temperamento:</b> Durante las situaciones laborales, siempre permanece al lado de su líder, mostrando una extraordinaria habilidad de concentración que es inusual en comparación con otras razas de perros.</li> 
                       <li> <b>Cuidados: </b> Requieren cepillado regular, al menos tres veces por semana. Un baño cada mes y medio es suficiente para su cuidado de higiene.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Collie ;