import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { state: favorites, dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
      const data = await res.json();
      setRecipe(data.meals ? data.meals[0] : null);
      setIsLoading(false);
    };
    fetchRecipe();
  }, [recipeId]);

  const isFavorited = recipe && favorites.some(r => r.idMeal === recipe.idMeal);

  const toggleFavorite = () => {
    if (!recipe) return;
    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: recipe.idMeal });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: recipe });
    }
  };

  const getIngredients = () => {
    if (!recipe) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredients.push(`${measure || ""} ${ing}`.trim());
      }
    }
    return ingredients;
  };

  if (isLoading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail">
        
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ maxWidth: "300px" }} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>

      <h3>Ingredients</h3>
      <ul>
        {getIngredients().map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>

      <button onClick={toggleFavorite}>
        {isFavorited ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
      </button>
      <br />
      <Link to="/">← Back to Search</Link>
    </div>
  );
}

export default RecipeDetail;
