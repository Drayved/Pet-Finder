import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import SearchResults from "../pages/SearchResults";
import { AuthContext } from "../App";

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [renderSearch, setRenderSearch] = useState(false);
  const params = useParams();
  const location = useLocation();

  const {zipCode, setZipCode } = useContext(AuthContext);


  useEffect(() => {
    if (location.pathname !== `/search/${params.query}`) {
      setRenderSearch(false);
    }
    if(location.pathname === `/`){
      setZipCode("")
      setSearch("")
    }
  }, [location, params.query]);

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
    if (e.keyCode === 13) {
      setRenderSearch(false);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
      if (zipCode && zipCode.length === 5) {
        navigate(`/search/${search} || ?location=${zipCode}`);
        
      } else {
        navigate(`/search/${search}`);
      }
      setRenderSearch(true);
    }
  

  function handleZipCodeChange(e) {
    setZipCode(e.target.value);
  }

  return (
    <div className="header">
      <div className="top-info">
        <div className="title-info">
          <h1 className="title">Find your new best friend today</h1>
          <h3 className="sub-title">
            We have over 11,500 pets from shelters and rescues
          </h3>
        </div>
        <form className="search-bars" onSubmit={handleFormSubmit}>
          <input
            className="search-animal"
            type="text"
            placeholder="Search dog breed, cat, etc."
            value={search}
            onChange={handleSearch}
            onKeyUp={handleSearch}
          />
          <input
            className="search-zip"
            type="text"
            placeholder="Zip code"
            value={zipCode || ""}
            onChange={handleZipCodeChange}
            
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {renderSearch && <SearchResults search={search} />}
      
    </div>
  );
}
