import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { Favorite } from "@mui/icons-material";

const MovieList = ({ heading, movies }) => {
  const { favorites, setFavorites } = useContext(AppContext);

  const saveToLocalStorage = (item) => {
    localStorage.setItem("movie-app-favorites", JSON.stringify(item));
  };

  const addToFavorites = (movie) => {
    if (!favorites.includes(movie)) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  };

  const removeFromFavorites = (movie) => {
    const newFavoriteList = favorites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="movie-container">
      <h1>{heading}</h1>
      <div className="movie-list">
        {movies.map((movie, idx) => {
          return (
            <div className="image-container" key={idx}>
              <img src={movie.Poster} key={movie.imdbID} alt="movie" />
              <div
                onClick={() =>
                  favorites.includes(movie)
                    ? removeFromFavorites(movie)
                    : addToFavorites(movie)
                }
                className="overlay"
              >
                <p>
                  {favorites.includes(movie)
                    ? "Remove to Favorites"
                    : " Add to Favorites"}
                  <Favorite
                    sx={{
                      color: "red",
                    }}
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
