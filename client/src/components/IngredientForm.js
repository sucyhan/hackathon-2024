import React, { useState } from 'react';
import './IngredientForm.css';
const IngredientForm = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredient);
  };

  return (
    <form className='ingredient-form' onSubmit={handleSubmit}>
      <input className='ingredient-input'
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Entrer un ingrédient..."
      />
      <button className="search" type="submit">Search</button>
    </form>
  );
};

export default IngredientForm;
