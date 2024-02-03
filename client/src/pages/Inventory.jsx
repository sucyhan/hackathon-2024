import React, { useState } from 'react';
import './Inventory.css';

const InventoryForm = () => {
  const [ingredient, setIngredient] = useState('');
  const [foodType, setFoodType] = useState('Autre');
  const [expirationDate, setExpirationDate] = useState('');
  const [inventoryList, setInventoryList] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (!ingredient || !foodType || !expirationDate) {
    //   alert('Veuillez remplir tous les champs.');
    //   return;
    // }

    const newIngredient = {
      ingredient,
      foodType,
      expirationDate,
    };

    setInventoryList([...inventoryList, newIngredient]);

    setIngredient('');
    setFoodType('');
    setExpirationDate('');
  };

  return (
    <div>
      <h2>Ajouter un aliment</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Aliment:
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label>
          Catégorie Alimentaire:
          <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
            <option value="Fruit">Fruit</option>
            <option value="Légume">Légume</option>
            <option value="Produit Laitier">Produit Laitier</option>
            <option value="Viande">Viande</option>
            <option value="Boisson">Boisson</option>
            <option value="Céréales">Céréale</option>
            <option value="Légumineuses">Légumineuse</option>
            <option value="Autre">Autre</option>
          </select>
        </label>
        <label>
          Date d'expiration:
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>

      <h2>Mes aliments</h2>
      <div className="card-container">
      {inventoryList.map((item, index) => (
          <div className={"card"} key={index}>
            <div className="table-row">
              <div className="table-title">{item.ingredient}</div>
              <div className="table-type">{item.foodType}</div>
              <div className="table-date">{item.expirationDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryForm;