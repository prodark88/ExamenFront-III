import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state || {};
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    // Leer los favoritos del localStorage
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []); 
  return (
    <>
      <div className="container">
        <h1>Dentists Favs</h1>
        <div
          className={`card-grid ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
        >
          {/* Renderiza una Card por cada favorito */}
          {favorites.map((fav, index) => (
            <Card
              key={index}
              id={fav.id}
              name={fav.name}
              username={fav.username}
              isFavPage={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
