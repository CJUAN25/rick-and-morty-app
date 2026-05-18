import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";
import {
  translateStatus,
  translateGender,
  translateSpecies,
} from "../../utils/translations";

function CharacterCard({ personaje }) {
  const estadoEnEspanol = translateStatus(personaje.status);
  const generoEnEspanol = translateGender(personaje.gender);
  const especieEnEspanol = translateSpecies(personaje.species);

  return (
    <div className="tarjeta-credencial">
      <div className="credencial-foto-contenedor">
        <img
          src={personaje.image}
          alt={personaje.name}
          className="credencial-foto"
        />
        {/* Luz indicadora de estado */}
        <div
          className={`luz-estado-tarjeta ${
            personaje.status === "Alive"
              ? "luz-tarjeta-viva"
              : personaje.status === "Dead"
                ? "luz-tarjeta-muerta"
                : "luz-tarjeta-desconocida"
          }`}
        ></div>
      </div>

      <div className="credencial-info">
        <h3 className="credencial-nombre">{personaje.name}</h3>

        <div className="credencial-datos">
          <p>
            <span>ESPECIE:</span> {especieEnEspanol}
          </p>
          <p>
            <span>GÉNERO:</span> {generoEnEspanol}
          </p>
          <p>
            <span>ESTADO:</span> {estadoEnEspanol}
          </p>
        </div>

        <div className="credencial-acciones">
          <Link to={`/personaje/${personaje.id}`} className="btn-detalle">
            VER DETALLE
          </Link>
          <div className="codigo-barras">|| | ||| | || |</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
