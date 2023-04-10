import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useParams } from "react-router-dom";
import PictureCarousel from "../components/PictureCarousel";

export default function Animal() {
  const { results, filteredResults } = useContext(AuthContext);
  const { id } = useParams();

  const pets = filteredResults.length > 0 ? filteredResults : results;
  const animal = pets.find((pet) => pet.id.toString() === id.toString());

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div>
      {animal && animal.photos && (
        <div>
          <PictureCarousel photos={animal.photos} />
          <div className="border rounded-md mt-10 w-[600px] pl-5 ml-6 py-5">
            <h2 className="text-3xl font-bold mb-4 ">{animal.name}</h2>
            <div className="flex flex-col mt-4 ">
              <p className="text-med my-5 font-semibold">
                {animal.breeds.primary + " • " + animal.contact.address.city + ", " + animal.contact.address.state}
              </p>
              <p className="text-med border-y mr-5 py-3 ">
                {animal.age + " • " + animal.gender + " • " + animal.size }
              </p>
              <h2 className="text-2xl my-5 font-bold">About</h2>
              <p className="text-lg align-top mb-3">
                {animal.attributes.spayed_neutered ? 'Spayed/Neutered' : 'Not spayed/neutered'}, 
                {animal.attributes.house_trained ? ' House trained' : ' Not house trained'}
                {animal.attributes.declawed && ', Declawed'}
             </p>
            </div>
            {animal.description && (
              <>
                <h2 className="text-2xl border-t mr-5 pt-2 font-bold">Meet {animal.name}</h2>
                <p className="text-sm mt-4 w-[550px]">
                  {animal.description}
               </p>
              </>
            )  
          }
            {/* Display any other information that you want to show */}
          </div>
        </div>
      )}
    </div>
  );
}
