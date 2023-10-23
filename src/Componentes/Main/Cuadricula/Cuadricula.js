import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import estilos from './Cuadricula.module.css';

function Cuadricula () {
    return ( 
        <>
        <div className={estilos.contenedor}>
            <h2 className={estilos.h2}>Perros de Pastoreo</h2>
            <div className={estilos.malla}>
                <Link to={'/pastores/1'} 
                    className={estilos.one}
                > 
                    <h3 className={estilos.h3}>border collie</h3>
                    <div>
                        <img src={require('../../../img/collie.png')} alt= 'border collie'
                        className={estilos.img} ></img>
                    </div>
                </Link>
                <Link to={'/pastores/2'} className={estilos.one}> 
                    <h3 className={estilos.h3}>Pastor belga malinois</h3>
                    <div>
                        <img src={require('../../../img/malinois.png')} alt='Pastor belga malinois'
                        className={estilos.img}></img>
                    </div>
                </Link>
                <Link to={'/pastores/3'} className={estilos.one}>
                    <h3 className={estilos.h3}>Pastor alemán</h3>
                    <div>
                        <img src={require('../../../img/aleman.png')} alt='Pastor alemán'
                        className={estilos.img}></img>
                    </div>
                </Link>
                <Link to={'/pastores/4'} className={estilos.one}>
                    <h3 className={estilos.h3}>Pastor blanco suizo</h3>
                    <div>
                        <img src={require('../../../img/blancos.png')} alt='Pastor blanco suizo'
                        className={estilos.img}></img>
                    </div>
                </Link>
            </div>
        </div>
        <Outlet></Outlet>
        </>
     );
}

export default Cuadricula ;