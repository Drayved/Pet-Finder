import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { useParams } from "react-router-dom";
import PictureCarousel from "../components/PictureCarousel";
import PetCards from "../components/PetCards";

export default function Animal() {
  const { results } = useContext(AuthContext);
  const { id } = useParams();

  const storedResults = JSON.parse(localStorage.getItem("results"));
  const [filteredResults, setFilteredResults] = useState(storedResults || []);

  const pets = filteredResults.length > 0 ? filteredResults : results;
  const animal = pets.find((pet) => pet.id.toString() === id.toString());
  const [isFavorite, setIsFavorite] = useState(false)

  

  if (!animal) {
    return <div>Animal not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [animal.id])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingFavorite = storedFavorites.find((favorite) => favorite.id === animal.id);
    setIsFavorite(!!existingFavorite);
  }, [animal]);

  function handleSponsorClick() {
    alert(`Thank you for sponsoring ${animal.name}`);
  }

  function handleFavoriteClick() {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingFavorite = storedFavorites.find((favorite) => favorite.id === animal.id);
  
    if (!existingFavorite) {
      storedFavorites.push(animal);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    } else {
      const newFavorites = storedFavorites.filter((favorite) => favorite.id !== animal.id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  
    setIsFavorite(!isFavorite);
  }
  
  return (
    <div>
      {animal && animal.photos && (
        <div>
          <PictureCarousel photos={animal.photos} />
          <div className="flex flex-col md:flex-row justify-center">
            <div className="border rounded-md mt-10 w-[600px] pl-5 ml-6 py-5 animal-details">
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
                  {animal.attributes.declawed ? ', Declawed' : ''}
                </p>
                {animal.description && (
                  <>
                    <h2 className="text-2xl border-t mr-5 pt-2 font-bold">Meet {animal.name}</h2>
                    <p className="text-sm mt-4 w-[90%] flex-wrap">
                      {animal.description}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-10 ml-6 border rounded-lg bg-purple-800 text-white h-72 w-[360px] relative adoption-details">
              <h2 className="font-bold mt-6 text-center text-xl px-5">Considering {animal.name} for adoption?</h2>
              <button className="adopt-btns py-1.5 border-2 border-white rounded-3xl mt-7 bg-white text-purple-800 font-semibold w-[80%] mx-auto" onClick={() => window.location.href="https://www.petfinder.com/user/login/?next=https%3A%2F%2Fwww.petfinder.com%2Fcat%2Fcrenshaw-62131540%2Fky%2Fnewport%2Fstray-animal-adoption-program-ky64%2Fstart-your-inquiry%2F%3FhasUserSkippedQuiz%3Dtrue"}>Start Your Inquiry</button>
              <button className="font-semibold adopt-btns py-1.5 border-2 rounded-3xl mt-4 w-[80%] mx-auto" onClick={() => window.location.href="https://www.petfinder.com/cat/crenshaw-62131540/ky/newport/stray-animal-adoption-program-ky64/faq/"}>READ FAQS</button>
              <div className="border-t border-black flex justify-between absolute bottom-0 w-full ">
                <button className="font-semibold adopt-btns mx-auto border-r border-black w-[100%] py-3" onClick={handleSponsorClick} >SPONSOR</button>
                <button onClick={handleFavoriteClick} 
                  className="font-semibold adopt-btns mx-auto w-[100%] py-1.5">
                  {isFavorite ? "❤️ " : "🤍 "}FAVORITE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h1 className="w-[95%] mx-auto text-3xl font-semibold text-purple-800 text-center -mb-12">Other Animals Available for Adoption</h1>
        <PetCards num1={0} num2={6} />
      </div>
    </div>
    
  );
  
}
