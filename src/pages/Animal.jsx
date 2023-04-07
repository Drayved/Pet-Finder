import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useParams } from "react-router-dom";
import PictureCarousel from "../components/PictureCarousel"






export default function Animal() {
  const { results, filteredResults } = useContext(AuthContext);
  const { id } = useParams();

  const pets = filteredResults.length > 0 ? filteredResults : results;
  console.log(pets)
  // Find the animal object with the ID that matches the one in the URL
  const animal = pets.find((pet) => pet.id.toString() === id.toString());

  if (!animal) {
    console.log("id:", id);
    console.log("pets:", pets);
    return <div>Animal not found</div>;
  }


  return (
    <div>
      {animal && animal.photos && (
  <>
    <h2>{animal.name}</h2>
    <PictureCarousel photos={animal.photos}/>
    <p>Age: {animal.age}</p>
    <p>Breed: {animal.breeds.primary}</p>
    <p>Location: {animal.contact.address.city + ", " + animal.contact.address.state}</p>
    <p>Description: {animal.description}</p>
    {/* Display any other information that you want to show */}
  </>
)}
    </div>
  );
}
