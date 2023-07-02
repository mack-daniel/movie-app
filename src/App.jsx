import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Favorites from "./pages/Favorites";

export const AppContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <AppContext.Provider
        value={{
          search,
          setSearch,
          movies,
          setMovies,
          favorites,
          setFavorites,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
