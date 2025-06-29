import React, { createContext, useReducer, useEffect } from "react";

const FavoritesContext = createContext();

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((recipe) => recipe.idMeal !== action.payload);
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state));
  }, [state]);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
