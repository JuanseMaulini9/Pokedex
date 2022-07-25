import React from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = ({pokemons}) => {
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className="pokedex-grid">
        {pokemons.map((pokemon, index)=>{
          return(<PokemonCard pokemon={pokemon} key={pokemon.name}/>)  
        })}
      </div>
    </div>
  );
};

export default Pokedex;
