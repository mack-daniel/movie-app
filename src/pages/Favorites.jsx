import React, { useContext, useEffect } from "react";
import MovieList from "../components/MovieList";
import { AppContext } from "../App";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(AppContext);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("movie-app-favorites")
    );
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  return (
    <>
      <MovieList heading={"Movies"} movies={favorites} />
    </>
  );
};

export default Favorites;
