import React, { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./FilterSpecies.css";
import "../Home/Home.css";
import { useFetch } from "../../hooks/useFetch";
import { getCharactersBySpeciesUrl } from "../../config/config";

function FilterSpecies() {
  const [especie, setEspecie] = useState("Human");
  const { data, loading } = useFetch(getCharactersBySpeciesUrl(especie));

  const personajes = data?.results || [];

  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">Filtros Multiversales</h1>

      {/* Botones de filtro */}
      <div className="contenedor-botones-filtro">
        <button
          onClick={() => setEspecie("Human")}
          className={especie === "Human" ? "btn-activo" : "btn-filtro"}
        >
          Humanos
        </button>
        <button
          onClick={() => setEspecie("Alien")}
          className={especie === "Alien" ? "btn-activo" : "btn-filtro"}
        >
          Aliens
        </button>
        <button
          onClick={() => setEspecie("Robot")}
          className={especie === "Robot" ? "btn-activo" : "btn-filtro"}
        >
          Robots
        </button>
        <button
          onClick={() => setEspecie("Mythological")}
          className={especie === "Mythological" ? "btn-activo" : "btn-filtro"}
        >
          Mitológicos
        </button>
      </div>

      {/* Renderizado condicional */}
      {loading ? (
        <div className="pantalla-carga">
          <div className="portal-giratorio"></div>
          <h2>Buscando especies...</h2>
        </div>
      ) : (
        <div className="cuadricula-personajes">
          {personajes.map((personaje) => (
            <CharacterCard key={personaje.id} personaje={personaje} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterSpecies;
