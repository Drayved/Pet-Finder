import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import PetCards from "../components/PetCards";
import PetSearch from "../apis/PetSearch";

export default function SearchResults({ search }) {
  const { results, filteredResults, setFilteredResults } = useContext(AuthContext);
 
  console.log(search)
  
  useEffect(() => {
    if (results) {
      // Filter the results based on the search term
      const filtered = results.filter(
        (animal) =>
          animal.name.toLowerCase().includes(search) ||
          animal.breeds.primary.toLowerCase().includes(search) ||
          animal.type.toLowerCase().includes(search) ||
          animal.age.toLowerCase().includes(search)
      );
        
      setFilteredResults(filtered);
    }
  }, [search]);

  console.log(filteredResults)
  
  return (
    <>
      <PetSearch />
      <PetCards data={filteredResults} />
      
      
    </>
  );
}
