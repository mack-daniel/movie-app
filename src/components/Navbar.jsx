import React, { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Navbar = () => {
  const { favorites, search, setSearch } = useContext(AppContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="./movie-film-roll-for-movie-svgrepo-com.svg"
          alt=""
          className="logo"
        />
      </Link>
      <Search search={search} setSearch={setSearch} />
      <button className="btn">
        <Link to="/favorites">Favorites ({favorites.length})</Link>
      </button>
    </div>
  );
};

export default Navbar;
