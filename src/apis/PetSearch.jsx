import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import Location from "./Location"
import PetCards from "../components/PetCards";
import NotFound from "../pages/NotFound";
import Header from "../components/Header"


export default function PetSearch({type}) {
  const { results, setResults, accessToken, zipCode, setZipCode} = useContext(AuthContext);
  const [locationPermission, setLocationPermission] = useState(null)
  
  const [isLoading, setIsLoading] = useState(false);
  

  const onLocationReceived = (location) => {
    setLocationPermission(location);
    localStorage.setItem("location", JSON.stringify(location))
  };  
  

  

  useEffect(() => {

    const fetchPets = async () => {
      if (accessToken === null) return;
      setIsLoading(true)
      let endpoint = `https://api.petfinder.com/v2/animals/?limit=50${type ? `&type=${type}` : ""}`;
      if (locationPermission) {
        if (zipCode) {
          endpoint += `&location=${zipCode}`;
        } else {
          endpoint += `&location=${locationPermission.lat},${locationPermission.lng}`;
        }
      }
      if (zipCode) {
        endpoint += `&location=${zipCode}`;
      }
      const petResults = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (petResults.status === 429) {
        throw new Error("You're at your rate limit for this API.");
      }

      const json = await petResults.json();
      
      setResults(json.animals);
      setIsLoading(false)
      
      localStorage.setItem("results", JSON.stringify(json.animals));
    };
    fetchPets();
  }, [accessToken, locationPermission, type, zipCode]);

  if (results === null) return <Location onLocationReceived={onLocationReceived} locationPermission={locationPermission} zipCode={zipCode}/>

  return null
}