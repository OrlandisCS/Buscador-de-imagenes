import React from "react";

const Imagen = ({ imagen }) => {
  const { largeImageURL, user, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 col-sm-4 col-lg-3 mb-4">
      <div className="card position-relative">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <i className="fas fa-heart text-danger"></i> {likes} Me Likes
          </p>
          <p className="card-text">
            <i className="fas fa-eye"></i> {views} Vistas
          </p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            className="btn btn-primary btn-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
