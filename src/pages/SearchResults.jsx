import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import NotFound from "./NotFound"
import { useParams }from "react-router-dom"

export default function SearchResults({ search }) {
  const { results } = useContext(AuthContext);
  const [filteredResults, setFilteredResults] = useState([]);
  const searchResults = useParams()

  useEffect(() => {
    // Filter the results based on the search term
    const filtered = results.filter(
      (animal) =>
        animal.name.toLowerCase().includes(search) ||
        animal.breeds.primary.toLowerCase().includes(search) ||
        animal.type.toLowerCase().includes(search) ||
        animal.age.toLowerCase().includes(search)
    );

    setFilteredResults(filtered);
  }, [results]);

  return (
    <div className="animal-list">
      {search && filteredResults.length === 0 ? (
        <NotFound />
      ) : (
        filteredResults.map((animal) => (
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
        ))
      )}
    </div>
  );
}
