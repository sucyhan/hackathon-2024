import React, { useState } from 'react';

const InventoryForm = () => {
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleExpirationDateChange = (e) => {
        setExpirationDate(e.target.value);
    };

    const handleAddIngredient = () => {
        if (name && expirationDate) {
            const newIngredient = {
                name,
                expirationDate
            };

            setIngredients([...ingredients, newIngredient]);
            setName('');
            setExpirationDate('');
        }
    };

    return (
        <div>
            <h2>Add Ingredients</h2>
            <input
                type="text"
                placeholder="Ingredient name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="date"
                placeholder="Expiration date"
                value={expirationDate}
                onChange={handleExpirationDateChange}
            />
            <button onClick={handleAddIngredient}>Add</button>

            <h2>Ingredients List</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} - {ingredient.expirationDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryForm;