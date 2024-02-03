import React from 'react';
import './App.css';
import Homepage from './pages/Home-page';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeGenerator from './pages/Recipes.js';
import InventoryForm from './pages/Inventory.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/inventory" element={<InventoryForm />} />
          <Route path="/recipes" element={<RecipeGenerator />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
