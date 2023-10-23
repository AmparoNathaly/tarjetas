import { Link } from 'react-router-dom';
import estilos from './Malinois.module.css';

function Aleman () {
    return ( 
        <div className={estilos.completo}>
            <div className={estilos.tarjeta}>
            <Link to='/pastores'>◀️</Link>
                <div className={estilos.flexible}>
                        <img 
                            src={require('../../../img/aleman2.png')} 
                            alt='Pastor alemán'
                            className={estilos.img}
                        ></img>
                    <div>
                        <ul className={estilos.lista}>
                       <li> <b>Nombre:</b> Pastor alemán:</li> 
                       <li> <b> Fisico:</b> Su color por lo general es negro con manchas de color amarillas, rojas, marrones o gris claro, ojos almendrados oscuros,  orejas medianas, abiertas hacia adelante y llevadas de manera uniforme.</li>  
                       <li> <b>temperamento:</b> Pastor de ganado, infatigable y de gran inteligencia, sobresale por ser ágil, bien musculado y despierto.</li> 
                       <li> <b>Cuidados: </b> Es susceptible al calor, puede entrar en calor mucho más rápido que otros perros. Requiere cepillado diario.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Aleman ;