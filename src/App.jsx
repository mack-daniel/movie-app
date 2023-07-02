import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <>
      <AppContext.Provider
        value={{
          search,
          setSearch,
          movies,
          setMovies,
        }}
      >
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
