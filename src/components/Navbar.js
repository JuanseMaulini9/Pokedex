import React from "react";

const Navbar = () => {
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={imageURL} alt="logo-pokiapi" className="navbar-image" />
      </div>
      <div>❤</div>
    </nav>
  );
};

export default Navbar;
