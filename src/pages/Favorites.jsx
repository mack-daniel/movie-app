import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import { AppContext } from "../App";

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <>
      <MovieList heading={"Movies"} movies={favorites} />
    </>
  );
};

export default Favorites;
