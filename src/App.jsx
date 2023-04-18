import React, { useEffect, createContext, useState} from "react";
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom"
import Landing from "./components/Landing";
import Layout from "./components/Layout"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Birds from "./pages/Birds"
import Horses from "./pages/Horses"
import SearchResults from "./pages/SearchResults";
import PetSearch from "./apis/PetSearch";
import Animal from "./pages/Animal";
import Favorites from "./pages/Favorites";
// export const apiKey = "op6A9muTJtyZ46FXgiji8TTFXZAfC9KxMWKswrW7fkLWo6oiJV"
// export const apiSecret = "rIOVTAOjW46EZN52E8GcLNR4h9wBPWVYkyFp8AL4"
// export const apiKey = "hIZLptHNbS2CL9HzCkMRWZ3ATzJYwIa6r3oEfIoKJXgo14GGyq"
// export const apiSecret = "6J9hpXiKvOI69tDqVMo4fUz5Sk9Xjmkl31ZnHUf0"
export const apiKey = "7Yoy9ZMXGs8Le0BSMMlqvKAAm3DCYT5w2efkWSa925DRQjldeY"
export const apiSecret = "4p4kTl0gDUAqR1HPFvnDQ8bYTGVESjfGgcF56GFI"
export const AuthContext = createContext();



function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [results, setResults] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [zipCode, setZipCode] = useState("")
  

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


  
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route  path={"/"} element={<Layout />}>
      <Route index element={<Landing />}/>
      <Route path="dogs" element={<Dogs />}/>
      <Route path="cats" element={<Cats />}/>
      <Route path="birds" element={<Birds />}/>
      <Route path="horses" element={<Horses />}/>
      <Route path="search/:query" element={<SearchResults/>} />
      <Route path="animal/:id" element={<Animal />} />
      <Route path="favorites" element={<Favorites />} />
      
    </Route>

    

    
  ))

  return (
    <AuthContext.Provider value={{ zipCode, setZipCode, filteredResults, setFilteredResults ,results, setResults, accessToken}}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  );
}

export default App;