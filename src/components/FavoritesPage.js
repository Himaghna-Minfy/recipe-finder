import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";

function FavoritesPage() {
  const { state: favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div>
        <h2>No favorites yet!</h2>
        <Link to="/">← Back to Search</Link>
      </div>
    );
  }

  return (
    <div className="favorites-list">
        
      <h2>Your Favorites</h2>
      <div className="recipe-list">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/">← Back to Search</Link>
    </div>
  );
}

export default FavoritesPage;
