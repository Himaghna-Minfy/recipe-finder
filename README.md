# 🍽️ Recipe Finder App

A React-based web application where users can search for recipes, view details, and save their favorite dishes using TheMealDB API.

---

## 🚀 Features

✅ Search for recipes by name  
✅ Display recipe list with image and title  
✅ Click a recipe to view full details (category, instructions, ingredients)  
✅ Add/remove recipes to/from favorites  
✅ View and manage favorite recipes on a dedicated page  
✅ Client-side routing (SPA using React Router)  
✅ Favorites persisted with `localStorage`  
✅ Clean, responsive design  

---



## 🛠 Tech Stack

- **React** (Create React App)
- **React Router DOM**
- **Context API + useReducer**
- **CSS / CSS Modules**
- **TheMealDB API**: [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)

---

## 📂 Folder Structure

src/
├── components/
│ ├── SearchPage.js
│ ├── RecipeDetail.js
│ └── FavoritesPage.js
├── context/
│ └── FavoritesContext.js
├── App.js
├── index.js
└── App.css



---

## ⚙️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Himaghna-Minfy/recipe-finder.git
cd recipe-finder
npm install
npm start