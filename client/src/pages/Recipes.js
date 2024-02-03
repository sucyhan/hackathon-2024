import React, { useState } from 'react';

const RecipeGenerator = () => {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    };

    const generateRecipes = () => {
        // Here you can write the logic to generate recipes based on the user inputted ingredients
        // You can make an API call to a recipe database or use a local data source

        // For now, let's just split the ingredients by comma and create a recipe for each ingredient
        const ingredientList = ingredients.split(',');

        const generatedRecipes = ingredientList.map((ingredient, index) => ({
            id: index,
            name: `Recipe with ${ingredient}`,
            ingredients: [ingredient],
        }));

        setRecipes(generatedRecipes);
    };

    return (
        <div>
            <input type="text" value={ingredients} onChange={handleInputChange} />
            <button onClick={generateRecipes}>Generate Recipes</button>

            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeGenerator;