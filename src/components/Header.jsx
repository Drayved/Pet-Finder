import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
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
        <h4 className="app-name">
          <Link to="/">PetFinder</Link>
        </h4>
        <h4 className="favorites-btn">
          <Link to="/favorites">Favorites</Link>
        </h4>
        <form className="search-bars" onSubmit={handleFormSubmit}>
          <div className="search-animal-container">
            <input
              className="search-animal"
              type="text"
              placeholder="Search pets"
              value={search}
              onChange={handleSearch}
              onKeyUp={handleSearch}
            />
          </div>
          <div className="search-zip-container">
            <input
              className="search-zip"
              type="text"
              placeholder="Zip code"
              value={zipCode || ""}
              onChange={handleZipCodeChange}
            />
            
            
          </div>
          <button className="search-btn" type="submit"><i class="fa fa-search fa-lg" aria-hidden="true"></i></button>
          
          
        </form>
      </div>
      {renderSearch && <SearchResults search={search} />}
      
    </div>
  );
}
