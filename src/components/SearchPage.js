import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import { Link } from "react-router-dom";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error searching recipes:", err);
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <Link to="/favorites">⭐ View Favorites</Link>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {isLoading && <p>Searching for recipes...</p>}
      {!isLoading && searched && recipes.length === 0 && <p>No recipes found!</p>}

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default SearchPage;
