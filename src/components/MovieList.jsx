import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";

const MovieList = ({ heading }) => {
  const { movies } = useContext(AppContext);

  return (
    <div className="movie-container">
      <h1>{heading}</h1>
      <div className="movie-list">
        {movies.map((movie) => {
          return (
            <>
              <div className="image-container">
                <img src={movie.Poster} key={movie.imdbID} alt="movie" />
                <div
                  // onClick={() => props.handleFavouritesClick(movie)}
                  className="overlay"
                >
                  Add to Favorites
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
