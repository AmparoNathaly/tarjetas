import estilos from './Primera.module.css';
function Primera () {
    return ( 
        <div className={estilos.contenedor}>
            <blockquote className={estilos.texto}>
                <p>Sentarse con un perro en la ladera de una montaña en una tarde gloriosa es volver al Edén, donde no hacer nada, no era aburrido: era paz.</p>
                <cite>Milan Kundera</cite>
            </blockquote>
            <img src={require('../../img/principal.png')} alt="Imagen de perro" className={estilos.img}></img>
        </div>
     );
}

export default Primera ;