import React from "react";
import "./Search.css";
const Search = ({ value, heandelsearch, clearSearch, fromSubmit }) => {
  return (
    <div className="searchBar-wrap">
      <form onSubmit={fromSubmit}>
        <input
          type="text"
          onChange={heandelsearch}
          placeholder="Search Blog"
          value={value}
        />
        {value && <span onClick={clearSearch}>x</span>}
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
