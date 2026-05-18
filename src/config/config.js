const API_BASE = "https://rickandmortyapi.com/api";

export const getCharactersUrl = () => `${API_BASE}/character`;
export const getCharacterDetailUrl = (id) => `${API_BASE}/character/${id}`;
export const getCharactersBySpeciesUrl = (species) =>
  `${API_BASE}/character/?species=${species}`;
export const getCharactersByNameUrl = (name) =>
  `${API_BASE}/character/?name=${name}`;
