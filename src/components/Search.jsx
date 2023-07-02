import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { SearchSharp } from "@mui/icons-material";

const Search = () => {
  const { search, setSearch, movies, setMovies } = useContext(AppContext);

  const filteredMovies = (search) => {
    const newMovies = movies.filter((movie) =>
      search.toLowerCase().includes(movie)
    );
    setMovies(newMovies);
    console.log(search);
  };

  // console.log(search);
  return (
    <div className="search-container">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchSharp
        sx={{
          color: "#aaa",
        }}
      />
    </div>
  );
};

export default Search;
