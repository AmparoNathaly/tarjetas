import { Link } from 'react-router-dom';
import estilos from './Malinois.module.css';

function Malinois () {
    return ( 
        <div className={estilos.completo}>
            <div className={estilos.tarjeta}>
            <Link to='/pastores'>◀️</Link>
                <div className={estilos.flexible}>
                        <img 
                            src={require('../../../img/malinois2.png')} 
                            alt='Pastor belga malinois'
                            className={estilos.img}
                        ></img> 
                    <div>
                        <ul className={estilos.lista}>
                       <li> <b>Nombre:</b> Pastor belga malinois:</li> 
                       <li> <b> Fisico:</b> Tamaño mediano, pelo corto, no tiene flecos en las extremidades ni la cola como otros pastores, su color de pelaje es marrón carbonado y más oscuro en la cara. </li>  
                       <li> <b>temperamento:</b> Sus niveles de energía están entre los más altos de todas las razas de perros. Son reconocidos por su facilidad en el entrenamiento, por su elevada capacidad de comprensión.</li> 
                       <li> <b>Cuidados: </b> Si no se les ofrece la estimulación y el ejercicio adecuados, podrían manifestar comportamientos destructivos o desarrollar conductas neuróticas, por lo que suelen ser abandonados, es un perro de trabajo, usado por militares y equipos de rescate.</li>
                       <li><b>Información de fotografía:</b> Autor	U.S. Air Force photo by Staff Sgt. Stacy L. Pearsall. Foto Dominio público según: (https://es.wikipedia.org/wiki/Pastor_belga_malinois)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Malinois ;