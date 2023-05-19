import React, { useEffect, createContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Birds from "./pages/Birds";
import Horses from "./pages/Horses";
import Rabbits from "./pages/Rabbits";
import SearchResults from "./pages/SearchResults";
import Animal from "./pages/Animal";
import Favorites from "./pages/Favorites";
import LoadingScreen from "./components/LoadingScreen";

export const AuthContext = createContext();

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [results, setResults] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("https://attractive-mixed-apricot.glitch.m/");
        const data = await response.json();
        setAccessToken(data.access_token);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
      
        
      
    };

    fetchToken();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Layout />}>
        <Route index element={isLoading ? <LoadingScreen /> : <Landing />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="cats" element={<Cats />} />
        <Route path="birds" element={<Birds />} />
        <Route path="horses" element={<Horses />} />
        <Route path="rabbits" element={<Rabbits />} />
        <Route path="search/:query" element={<SearchResults />} />
        <Route path="animal/:id" element={<Animal />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    )
  );

  return (
    <AuthContext.Provider value={{ zipCode, setZipCode, filteredResults, setFilteredResults, results, setResults, accessToken }}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  );
}

export default App;
