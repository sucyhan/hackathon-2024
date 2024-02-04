import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="card-container">
      {recipes.map((recipe, index) => (
        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" key={index}>
        <div className="recipe-card" key={index}>
          <img className='recipe-img' src={recipe.recipe.image} alt={recipe.recipe.label} />
          <div className="table-row">
            <div className="recipe-name">{recipe.recipe.label}</div>
            <div className="recipe-diet">{recipe.recipe.dietLabels[0]}</div>
          </div>
        </div>
        </a>
      ))}
    </div>
  );
};

export default RecipeList;