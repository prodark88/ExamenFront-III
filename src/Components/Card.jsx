import React, { useContext } from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";



const Card = ({ name, username, id, isFavPage}) => {


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
     const favItem = { id, name, username };
     const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
     const updatedFavs = storedFavs.some((fav) => fav.id === id)
       ? storedFavs
       : [...storedFavs, favItem];
     localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <div className="card-container">
          <img src="/images/doctor.jpg" alt="imagen" />
        </div>

        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>ID: {id}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      {!isFavPage && (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;
