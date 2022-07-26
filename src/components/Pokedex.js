import React from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const Pokedex = ({ pokemons, page, setPage, total, loading }) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Cargando pokemons....</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
