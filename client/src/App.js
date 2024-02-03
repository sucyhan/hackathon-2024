import React from 'react';
import './App.css';
import Homepage from './pages/Home-page';
import LoginPage from './pages/Login-page.jsx';
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
          <Route path="/home" element={<Homepage />} />
          <Route path='/' element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
