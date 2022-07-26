import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./api";

function App() {
  
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setloading] = useState(true)

  const fetchPokemons = async () => {
    try {
      setloading(true)
      const data = await getPokemons(25, 25*page);
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      console.log(results)
      setPokemons(results);
      setloading(false)
      setTotal(Math.ceil(data.count / 25))
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex
        loading={loading}
        pokemons={pokemons} 
        page = {page}
        setPage = {setPage}
        total = {total}
        />
      </div>
    </div>
  );
}

export default App;
