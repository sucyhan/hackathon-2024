import './App.css';
import Homepage from './pages/Home-page';
import './components/Navbar.js'
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeGenerator from './pages/Recipes.js';
import InventoryForm from './pages/Inventory.jsx';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Homepage />
    <Routes>
      <Route path="/inventaire" component={InventoryForm} />
      <Route path="/recettes" component={RecipeGenerator} />
      <Route path="/" component={Homepage} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
