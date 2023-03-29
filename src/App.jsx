import React, { useEffect, createContext, useState, useContext } from "react";
import {createBrowserRouter, RouterProvider, Route, Routes, Link, createRoutesFromElements, useParams} from "react-router-dom"
import Landing from "./components/Landing";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Layout from "./components/Layout"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Birds from "./pages/Birds"
import Horses from "./pages/Horses"
import SearchResults from "./pages/SearchResults";
import Location from "./apis/Location"
// export const apiKey = "op6A9muTJtyZ46FXgiji8TTFXZAfC9KxMWKswrW7fkLWo6oiJV"
// export const apiSecret = "rIOVTAOjW46EZN52E8GcLNR4h9wBPWVYkyFp8AL4"
export const apiKey = "hIZLptHNbS2CL9HzCkMRWZ3ATzJYwIa6r3oEfIoKJXgo14GGyq"
export const apiSecret = "6J9hpXiKvOI69tDqVMo4fUz5Sk9Xjmkl31ZnHUf0"
export const AuthContext = createContext();

const onLocationReceived = (location) => {
  setLocationPermission(location);
};

function App() {
  const  params = useParams()
  const [locationPermisson, setLocationPermission] = useState(null)
  const [accessToken, setAccessToken] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
      });
      const json = await res.json();
      console.log(json);
      setAccessToken(json.access_token);
    };
    fetchAccessToken();
  }, []);

  
  useEffect(() => {
    
    const fetchPets = async () => {
      if (accessToken === null) return;
      let endpoint = (`https://api.petfinder.com/v2/animals/?limit=30`)
      if (locationPermisson){
        endpoint += `&location=${locationPermisson.lat},${locationPermisson.lng}`
      }
      const petResults = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const json = await petResults.json();
      
      setResults(json.animals);
      
      
    };
    fetchPets();
  }, [accessToken, locationPermisson]);

  if (results === null) return <Location onLocationReceived={onLocationReceived} />;;

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />}/>
      <Route path="dogs" element={<Dogs />}/>
      <Route path="cats" element={<Cats />}/>
      <Route path="birds" element={<Birds />}/>
      <Route path="horses" element={<Horses />}/>
      <Route 
        path="search/:query" 
        element={<SearchResults search={params.query} />} 
      />
    </Route>
    
    
  ))
  return (
    <AuthContext.Provider value={{ results, setResults, accessToken }}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  );
}

export default App;