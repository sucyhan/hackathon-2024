import React, { useEffect } from 'react';
import './App.css';
import Homepage from './pages/Home-page';
import LoginPage from './pages/Login-page.jsx';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeGenerator from './pages/Recipes.js';
import InventoryForm from './pages/Inventory.jsx';

const API_KEY = "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";

const APIBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You will be provided with a product description and seed words, and your task is to generate product names."
      },
      {
        "role": "user",
        "content": "Product description: A home milkshake maker\n    Seed words: fast, healthy, compact."
      }
    ],
    "temperature": 0.8,
    "max_tokens": 64,
    "top_p": 1
  };

async function callOpenAIAPI() {
  console.log("Calling OpenAI API...");
  await fetch("https://api.openai.com/v1/chat/completions", {
    method:"POST",
    headers : {
      "Content-Type": "application/json",
      "Autorization": "Bearer" + API_KEY
    },
    body: JSON.stringify(APIBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/inventory" element={<InventoryForm />} />
          <Route path="/recipes" element={<RecipeGenerator />} />
          <Route path="/home" element={<Homepage />} />
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
