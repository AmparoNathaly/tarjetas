import { Link } from 'react-router-dom';
import estilos from './Malinois.module.css';

function Blanco () {
    return ( 
        <div className={estilos.completo}>
            <div className={estilos.tarjeta}>
            <Link to='/pastores'>◀️</Link>
                <div className={estilos.flexible}>
                        <img 
                            src={require('../../../img/blancos2.png')} 
                            alt='Pastor blanco suizo'
                            className={estilos.img}
                        ></img>
                    <div>
                        <ul className={estilos.lista}>
                       <li> <b>Nombre:</b> Pastor blanco suizo:</li> 
                       <li> <b> Fisico:</b> El pelaje de color blanco o crema pálido, de longitud mediana o larga, denso y lacio, de doble capa, en las orejas y la cabeza es más corto.</li>  
                       <li> <b>temperamento:</b> Confiado y sereno, Aunque su instinto protector lo hace estar alerta cuando es necesario. Son leales con buenas habilidades sociales y tienden a proteger a animales jóvenes de diversas especies.</li> 
                       <li> <b>Cuidados: </b> Cepillar de su pelaje una o dos veces por semana. Bañarlo solo cuando estén sucios. Necesita ejercicio al aire libre, con al menos dos paseos diarios.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Blanco ;