import React, {useState} from 'react';

// Creamos contexto =  estado global
const ContextoTema = React.createContext();

const ProovedorTema = ({children}) => {
    const [tema, cambiarTema] = useState(
        {
            alineado: 'left',
            tamFuente: 20
        }
    );

    // Cambiar tamaño fuente
    const aumentarFuente = () => cambiarTema({...tema,tamFuente: tema.tamFuente + 1});
    const disminuirFuente = () => cambiarTema({...tema,tamFuente: tema.tamFuente - 1});

    // Alineado
    const alinearIzquierda = () => cambiarTema({...tema,alineado: 'left'});
    const alinearCentrado = () => cambiarTema({...tema,alineado: 'center'});
    const alinearDerecha = () => cambiarTema({...tema,alineado: 'right'});

    return(
        <ContextoTema.Provider 
            value={
                {
                    tema, 
                    aumentarFuente,
                    disminuirFuente, 
                    alinearIzquierda,
                    alinearCentrado,
                    alinearDerecha
                }
            }>
            {children}
        </ContextoTema.Provider>
    );
}
 
export {ContextoTema, ProovedorTema};