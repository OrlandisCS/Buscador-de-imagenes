import React from 'react';
import Imagen from './Imagen';
const ListadoImagenes = ({imagenes,busqueda}) => {
    //Siempre que se itera se necesita un id unico
   
    return ( 
        <div className="col-12 p5 row">
            {
              imagenes.map(imagen => (
                  <Imagen 
                  key={imagen.id}
                  imagen={imagen}
                  />
              ))
            }
        </div>
     );
}
 
export default ListadoImagenes;