import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { SearchSharp } from "@mui/icons-material";

const Search = () => {
  const { search, setSearch } = useContext(AppContext);

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
