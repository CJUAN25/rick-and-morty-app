import React from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import { getCharactersUrl, getCharactersByNameUrl } from "../../config/config";

function Home() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const baseUrl = searchTerm
    ? getCharactersByNameUrl(searchTerm)
    : getCharactersUrl();
  const { data, loading, error } = useFetch(baseUrl);

  const personajes = data?.results || [];

  // Pantalla de carga
  if (loading) {
    return (
      <div className="contenedor-principal">
        <div className="pantalla-carga">
          <div className="portal-giratorio"></div>
          <h2>Abriendo portal interdimensional...</h2>
        </div>
      </div>
    );
  }

  // Sin resultados
  if (!data || error || personajes.length === 0) {
    return (
      <div className="contenedor-principal">
        <h1 className="titulo-principal">
          {searchTerm
            ? `Resultados para: ${searchTerm}`
            : "Catalogo de credenciales"}
        </h1>
        <div className="mensaje-sin-resultados">
          <p>No se encontraron personajes en este universo...</p>
          {error && <p className="texto-error">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">
        {searchTerm
          ? `Resultados para: ${searchTerm}`
          : "Catalogo de credenciales"}
      </h1>

      <div className="cuadricula-personajes">
        {personajes.map((personaje) => (
          <CharacterCard key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default Home;
