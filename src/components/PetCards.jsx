import React, { useContext } from "react";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";

export default function PetCards({ num1, num2, pets, onFavoritesPage, handleRemoveFavorite }) {
  const {results, setResults, filteredResults} = useContext(AuthContext);
  const filteredPets = onFavoritesPage ? pets : (filteredResults.length > 0 ? filteredResults : results);

  return (
    <div className="animal-list">
      {Array.isArray(filteredPets) &&
        filteredPets
          .filter((animal) => animal.photos.length > 0)
          .slice(num1, num2)
          .map((animal) => (
            <div className="animal-container" key={animal.id}>
              <Link to={`/animal/${animal.id}`}>
                <div className="animal-cards ">
                  <img
                    className="animal-img"
                    src={animal.photos.length ? animal.photos[0].medium : ""}
                    alt={`Photo of ${animal.name}`}
                  />
                  <div className="animal-card-text">
                    <h2 className="font-bold">
                      {animal.name.length > 20 ? animal.name.slice(0, 20) + "..." : animal.name}
                    </h2>
                    <p className=" animal-text">
                      {animal.age} - <span>{animal.breeds.primary}</span>
                    </p>
                    <p className=" animal-text">
                      {animal.contact.address.city + ", " + animal.contact.address.state}
                    </p>
                    {animal.distance ? (
                      <p className=" animal-text">
                        {animal.distance.toFixed(1) === 1 ? "mile away" : animal.distance.toFixed(1) + " miles away"}
                      </p>
                      
                    ) : null}
                    {onFavoritesPage && (
                    <div className="flex justify-center">
                      <button className="remove-favorite"
                        onClick={(e) => {e.preventDefault(), handleRemoveFavorite(animal.id)}}>Remove
                      </button>
                    </div>
                    )}
                  </div>
                </div>
              </Link>
              
            </div>
          ))}
    </div>
  );
}
