import React, { useState } from "react";
import PetCards from "../components/PetCards";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [pets, setPets] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const handleRemoveFavorite = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedPets));
    setPets(updatedPets);
  };

  return (
    <PetCards pets={pets} onFavoritesPage={true} handleRemoveFavorite={handleRemoveFavorite} />
  );
}
