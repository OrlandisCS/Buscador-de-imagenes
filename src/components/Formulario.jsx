import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({setBusqueda}) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);
  const buscarImagenes = (e) => {
    e.preventDefault();
    //Validar
    if (termino.trim() === "") {
      setError(true);
      return;
    }
    //Enviar el teermino de busque to app jsx
    setError(false);
    setBusqueda(termino);
  };
  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: Trading o café"
            onChange={(e) => setTermino(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error
      error='Agrega un termino de búsqueda valido'
      /> :null}
    </form>
  );
};

export default Formulario;
