import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import { AppContext } from "../App";

const Home = () => {
  const { search, setMovies } = useContext(AppContext);

  const getApi = async (search) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&ie&apikey=98664472`
      );
      if (response.data.Search) {
        setMovies(response.data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search === "") {
      getApi("guardians");
    } else {
      getApi(search);
    }
  }, [search]);

  return (
    <>
      <MovieList heading={"Movies"} />
    </>
  );
};

export default Home;
