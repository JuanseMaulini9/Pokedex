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
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search Pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
