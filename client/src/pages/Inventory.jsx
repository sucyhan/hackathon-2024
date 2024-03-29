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
  const { data, isFetched } = useQuery("inventory", async () => await getData(user.email), {
    onSuccess: (data) => {
      console.log(data);
      return data;
    }
  });

  const mutation = useMutation(addData, {
    onSuccess: () => {
      console.log('invalidate query called');
      queryClient.invalidateQueries('inventory');
    }
  })

  useEffect(() =>{
    if(isFetched && data) {
      setInventoryList([...data]);
    }
  }, [data, isFetched]);


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
    console.log(process.env.MY_SECRET);

    setInventoryList([...inventoryList, newIngredient]);

    setIngredient('');
    setFoodType('Autre');
    setExpirationDate('');
    mutation.mutate({user: user.email, ingredient: newIngredient});
  };

  const getCardBackground = (foodType) => {
    switch(foodType) {
      case 'Fruit':
        return fruitsImage;
      case 'Légume':
        return vegetablesImage;
      case 'Produit Laitier':
        return dairyImage;
      case 'Viande':
        return meatImage;
      case 'Céréales':
        return cerealsImage;
      case 'Autre':
        return foodImage;
      default:
        return foodImage;
    }
  }
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
            <option value="Céréales">Céréale</option>
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
        <button className='button' type="submit">Ajouter</button>
      </form>

      <h2>Mes aliments</h2>
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