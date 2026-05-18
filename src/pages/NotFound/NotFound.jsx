import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-contenedor">
      <h1 className="not-found-titulo">404</h1>
      <p className="not-found-subtitulo">Dimensión no encontrada</p>
      <Link to="/" className="not-found-btn-volver">
        ← Volver al catálogo
      </Link>
    </div>
  );
};

export default NotFound;
