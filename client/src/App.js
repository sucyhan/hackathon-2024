import './App.css';
import Homepage from './pages/Home-page';
import './components/Navbar.js'
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
    <div className="App">
    <Navbar />
    <Homepage />
    </div>
    </>
  );
}

export default App;
