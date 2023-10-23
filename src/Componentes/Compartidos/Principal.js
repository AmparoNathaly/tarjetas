import estilos from './Principal.module.css';

function Principal ({ children }) {
    return ( 
        <div className={estilos.principal}>
            <main>
                {children}
            </main>
        </div>
     );
}

export default Principal ;