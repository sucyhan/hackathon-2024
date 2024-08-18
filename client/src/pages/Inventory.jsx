import React, { useEffect, useState } from 'react';
import './Inventory.css';
import fruitsImage from '../assets/fruits.jpg';
import vegetablesImage from '../assets/vegetables.jpg';
import dairyImage from '../assets/dairy.jpg';
import meatImage from '../assets/meat.jpg';
import cerealsImage from '../assets/cereals.jpg';
import foodImage from '../assets/food.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import { addData, getData } from '../services/inventory.service';
import { useMutation, useQuery, useQueryClient } from "react-query";

const InventoryForm = () => {
  const queryClient = useQueryClient();
  
  const [ingredient, setIngredient] = useState('');
  const [foodType, setFoodType] = useState("Autre");
  const [expirationDate, setExpirationDate] = useState('');
  const [inventoryList, setInventoryList] = useState([]);
  const { user } = useAuth0();

  const mutation = useMutation(addData, {
    onSuccess: () => {
      console.log('invalidate query called');
      queryClient.invalidateQueries('inventory');
    }
  });

  useEffect(() => {
    const storedList = localStorage.getItem('inventoryList');
    if (storedList) {
      setInventoryList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inventoryList', JSON.stringify(inventoryList));
  }, [inventoryList]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newIngredient = {
      ingredient,
      foodType,
      expirationDate,
    };

    setInventoryList([...inventoryList, newIngredient]);

    setIngredient('');
    setFoodType('Other');
    setExpirationDate('');
  };

  const getCardBackground = (foodType) => {
    switch(foodType) {
      case 'Fruit':
        return fruitsImage;
      case 'Vegetable':
        return vegetablesImage;
      case 'Dairy':
        return dairyImage;
      case 'Meat':
        return meatImage;
      case 'Cereals':
        return cerealsImage;
      case 'Other':
        return foodImage;
      default:
        return foodImage;
    }
  }

  return (
    <div>
      <h2>Add food</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Food:
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label>
          Food Category:
          <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Cereal">Cereal</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
        Expiration date:
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>
        <button className='button' type="submit">Add</button>
      </form>

      <h2>My food</h2>
      <div className="card-container">
        {inventoryList.map((item, index) => (
          <div className="card" key={index} style={{ 
            backgroundImage: `url(${getCardBackground(item.foodType)})`
          }}>
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
