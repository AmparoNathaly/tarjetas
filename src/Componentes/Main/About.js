import estilos from './About.module.css';

function About () {
    return ( 
        <div className={estilos.about}>
            <div className={estilos.titulo}>
                <h2 className={estilos.h2}>Amparo Ocaña</h2>
                <hr className={estilos.hr}></hr>
                <p className={estilos.p}>Developer</p>
            </div>
        </div>
     );
}

export default About ;