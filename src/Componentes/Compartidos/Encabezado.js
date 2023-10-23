import { useState } from "react";
import estilos from './Encabezado.module.css';
import { Link } from 'react-router-dom';

function Encabezado () {
    const [menuOpen, setMenuOpen] = useState(false);

    const abrirMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const cerrarMenu = () => {
        setMenuOpen(false);
      };

    return ( 
        <header className={estilos.encabezado}>
            <Link to='/primera'>
            <h1 className={estilos.h1}>Razas de perros</h1> </Link>
            <div className={estilos.menu}>
                <button onClick={abrirMenu}>🐾</button>
                {menuOpen && 
                    <nav>
                        <ul className={estilos.navegacion}>
                            <Link to="/" onClick={cerrarMenu} >Principal</Link> <br></br> 
                            <Link to="/pastores" onClick={cerrarMenu} >Perros de Pastoreo</Link> <br></br> 
                            <Link to="/about" onClick={cerrarMenu}>About</Link>
                        </ul>
                    </nav>}
            </div>
        </header>
     );
}

export default Encabezado ;