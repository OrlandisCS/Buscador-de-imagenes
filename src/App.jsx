import axios from "axios";
import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";
import Imagen from "./components/Imagen";

function App() {
  //state para el aapp
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPagina] = useState(1);
  const [totalpagina, setTotal] = useState(1);
  <Imagen busqueda={busqueda} />;
  useEffect(() => {
    if (busqueda === "") return;

    const queryAPI = async () => {
      const imagenPorPagina = 30;
      const key = "19630411-bd8c4495bff80fe5ba7fd266c";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenPorPagina}&image_type=photo&page=${paginaActual}`;
      const response = await axios.get(url);
      setImagenes(response.data.hits);
      //Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(response.data.totalHits);
      setTotal(calcularTotalPaginas);
      //Mover arriba 
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});
    };

    queryAPI();
  }, [busqueda,paginaActual]);

  //Definir la pagina anterior
  const paginaAnterior = ()=>{
    const nuevaPaginaActual = paginaActual -1;
    if(nuevaPaginaActual === 0) return;
    setPagina(nuevaPaginaActual)
  }  
  //Definir Pagina siguiente

  const paginaSiguiente = ()=>{
    const nuevaPaginaActual = paginaActual + 1;
    if(nuevaPaginaActual > setTotal) return;
    setPagina(nuevaPaginaActual)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} busqueda={busqueda} />
       {(
         (paginaActual === 1) ? null :  <button 
        type='button' 
        className='btn btn-info mr-1'
        onClick={paginaAnterior}> &laquo; Anterior</button>
        )}
        {(
          (paginaActual === totalpagina) ? null : <button 
          type='button' 
          className='btn btn-info '
          onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
