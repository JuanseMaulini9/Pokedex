import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
    console.log(pokemon);
  };

  return (
    <div>
      <div>
        <input placeholder="Search Pokemon..." onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Search</button>
      </div>
      <div>
        <div>Nombre: {pokemon.name}</div>
        <div>Peso: {pokemon.weight}</div>
        <img src={pokemon.sprites.front_default}/>
      </div>
    </div>
  );
};

export default Searchbar;
