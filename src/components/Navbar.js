import React from "react";
import { useContext } from "react";
import favoriteContext from "../context/favoriteContext";

const Navbar = () => {
  const { favoritePokemon } = useContext(favoriteContext);

  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={imageURL} alt="logo-pokiapi" className="navbar-image" />
      </div>
      <div>&#10084;&#65039; {favoritePokemon.length}</div>
    </nav>
  );
};

export default Navbar;
