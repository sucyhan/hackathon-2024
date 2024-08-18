import React, { useState } from 'react';
import axios from 'axios';
import IngredientForm from '../components/IngredientForm';
import RecipeList from '../components/RecipeList';

const RecipeGenerator = () => {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredient) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${ingredient}&app_id=4afc2c74&app_key=
        220de446133c2e3ee20c3d60409eabf5`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
        <h1>Search recipes</h1>
      <IngredientForm onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipeGenerator;
