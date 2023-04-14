import React, { useContext } from "react";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";

export default function PetCards({ num1, num2 }){
    const {results, setResults, filteredResults} = useContext(AuthContext)
    
    console.log(filteredResults)
    
    const pets = filteredResults.length > 0 ? filteredResults : results
    
    const location = JSON.parse(localStorage.getItem("location"))
    const zipCode = localStorage.getItem("zipCode")

    return(
      <div className="animal-list">
        {Array.isArray(pets) &&
          pets
            .filter((animal) => animal.photos.length > 0)
            .slice(num1, num2)
            .map((animal) => (
              <Link key={animal.id} to={`/animal/${animal.id}`}>
                <div className="animal-cards" key={animal.id}>
                  <img
                    className="animal-img"
                    src={animal.photos.length ? animal.photos[0].medium : ""}
                    alt={`Photo of ${animal.name}`}
                  />
                  <div className="animal-card-text">
                    <h2 className="font-bold">
                      {animal.name.length > 20
                        ? animal.name.slice(0, 20) + "..."
                        : animal.name}
                    </h2>
                    <p>
                      {animal.age} - <span>{animal.breeds.primary}</span>
                    </p>
                    <p className="text-sm">{animal.contact.address.city + ", " + animal.contact.address.state} </p>
                    {animal.distance ? (
                    <p className="text-sm">
                      {animal.distance.toFixed(1) === 1
                        ? "mile away"
                        : animal.distance.toFixed(1) + " miles away"}
                    </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
      </div>
    )
}

