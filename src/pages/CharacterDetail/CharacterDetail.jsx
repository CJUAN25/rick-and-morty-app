import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetail.css";
import "../Home/Home.css";
import { useFetch } from "../../hooks/useFetch";
import { getCharacterDetailUrl } from "../../config/config";
import {
  translateStatus,
  translateGender,
  translateSpecies,
  translateLocation,
} from "../../utils/translations";

function CharacterDetail() {
  const { id } = useParams();
  const { data: personaje, loading } = useFetch(getCharacterDetailUrl(id));

  // Pantalla de carga
  if (loading) {
    return (
      <div className="pantalla-carga">
        <div className="portal-giratorio"></div>
        <h2>Cargando expediente del multiverso...</h2>
      </div>
    );
  }

  if (!personaje)
    return <h2 className="titulo-principal">Expediente no encontrado</h2>;

  // Traducciones
  const estadoEsp = translateStatus(personaje.status);
  const generoEsp = translateGender(personaje.gender);
  const especieEsp = translateSpecies(personaje.species);
  const origenEsp = translateLocation(personaje.origin?.name);
  const ubicacionEsp = translateLocation(personaje.location?.name);

  // Clase dinámica para luz de estado
  let claseLuz = "luz-desconocido";
  if (personaje.status === "Alive") claseLuz = "luz-vivo";
  if (personaje.status === "Dead") claseLuz = "luz-muerto";

  return (
    <div className="contenedor-principal">
      <div className="cabecera-detalle">
        <Link to="/" className="btn-volver">
          ← VOLVER AL CATÁLOGO
        </Link>
      </div>

      <div className="expediente-contenedor">
        <div className="expediente-foto-wrapper">
          <img
            src={personaje.image}
            alt={personaje.name}
            className="expediente-foto"
          />
          {/* Luz de estado */}
          <div className={`luz-estado-expediente ${claseLuz}`}></div>
        </div>

        <div className="expediente-datos">
          <h1 className="expediente-nombre">{personaje.name}</h1>
          <p className="expediente-id">ID FEDERAL: #{personaje.id}</p>

          <div className="expediente-grid-info">
            <div className="info-bloque">
              <span>ESTADO</span>
              <p>{estadoEsp}</p>
            </div>
            <div className="info-bloque">
              <span>ESPECIE</span>
              <p>{especieEsp}</p>
            </div>
            <div className="info-bloque">
              <span>GÉNERO</span>
              <p>{generoEsp}</p>
            </div>
            <div className="info-bloque">
              <span>ORIGEN</span>
              <p>{origenEsp}</p>
            </div>
            <div className="info-bloque">
              <span>ÚLTIMA UBICACIÓN CONOCIDA</span>
              <p>{ubicacionEsp}</p>
            </div>
            <div className="info-bloque">
              <span>APARICIONES EN EPISODIOS</span>
              <p>{personaje.episode?.length} Episodios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
