import React, { useState } from "react";
import PetCards from "../components/PetCards";

export default function Favorites() {
window.scrollTo(0, 0)
  const [pets, setPets] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const handleRemoveFavorite = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedPets));
    setPets(updatedPets);
  };

  return (
    <>
      {pets.length > 0 ? 
      <PetCards pets={pets} onFavoritesPage={true} handleRemoveFavorite={handleRemoveFavorite} />
      : <h4 className="text-center">No pets added to favorites</h4>}
    </>
    
  );
}
