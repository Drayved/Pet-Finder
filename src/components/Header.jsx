import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "../pages/SearchResults";

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [renderSearch, setRenderSearch] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
    if(e.keyCode === 13){
      setRenderSearch(false);
    }
    
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setRenderSearch(true);
    navigate(`/search/${search}`);
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
            onKeyDown={handleSearch}
          />
          <input className="search-zip" type="text" placeholder="Zip code" />
          <button type="submit">Search</button>
        </form>
      </div>
      {renderSearch && <SearchResults search={search} />}
    </div>
  );
}
