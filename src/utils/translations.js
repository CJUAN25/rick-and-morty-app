export const translations = {
  status: {
    Alive: "Vivo",
    Dead: "Muerto",
    unknown: "Desconocido",
  },
  gender: {
    Male: "Masculino",
    Female: "Femenino",
    Genderless: "Sin Género",
    unknown: "Desconocido",
  },
  species: {
    Human: "Humano",
    Alien: "Alien",
    Humanoid: "Humanoide",
    "Mythological Creature": "Criatura Mitológica",
    Disease: "Enfermedad",
    Robot: "Robot",
    Animal: "Animal",
    unknown: "Desconocido",
  },
};

export const translateStatus = (status) =>
  translations.status[status] || status;
export const translateGender = (gender) =>
  translations.gender[gender] || gender;
export const translateSpecies = (species) =>
  translations.species[species] || species;

export const translateLocation = (location) => {
  if (!location) return "Desconocido";
  return location === "unknown" ? "Desconocido" : location;
};
