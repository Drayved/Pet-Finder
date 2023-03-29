import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import NotFound from "./NotFound"

export default function Cats(){
    const {results, setResults, accessToken} = useContext(AuthContext)
    const cats = results.filter((animal) => animal.type === "Cat" && animal.photos.length > 0)
    
    useEffect(() => {
      const fetchPets = async () => {
        if (accessToken === null) return;
        let endpoint = `https://api.petfinder.com/v2/animals/?limit=20&type=cat`;
        const petResults = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const json = await petResults.json();
        
        setResults(json.animals);
      };
      fetchPets();
    }, [accessToken, results]);

    return(
        <div>
            {cats.length > 0 ? cats.map((animal) => (
                <div className="animal-cards" key={animal.id}>
                  <img
                    className="animal-img"
                    src={animal.photos[0].medium}
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
            )) : <NotFound />}
        </div>
    )
}