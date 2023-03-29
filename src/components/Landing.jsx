import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import SearchResults from "../pages/SearchResults";

export default function Landing() {
  const { results } = useContext(AuthContext);
  
  



  function landingList(num1, num2) {
    return (
      <div className="dog-list animal-list">
        {Array.isArray(results) &&
          results
            .filter((animal) => animal.photos.length > 0)
            .slice(num1, num2)
            .map((animal) => (
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
                </div>
              </div>
            ))}
      </div>
    );
  }

  return (
    <div>
        <div>
          {landingList(0, 4)}
          <div className="mid-banner">
            <h3>
              Countless animals are in need of our help today. You can make a
              difference by adopting an animal in need. Adopt today!
            </h3>
          </div>
          {landingList(5, 9)}
        </div>
    </div>
  );
}