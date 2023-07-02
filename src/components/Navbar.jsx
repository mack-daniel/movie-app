import React, { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Navbar = () => {
  const { search, setSearch } = useContext(AppContext);

  return (
    <div className="navbar">
      <Search search={search} setSearch={setSearch} />
      {/* <Link to="/favorites">Favorites</Link> */}
    </div>
  );
};

export default Navbar;
