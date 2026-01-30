import { Routes, Route, NavLink } from 'react-router-dom';
import Pines from './pages/Pines';
import PisaCorbatas from './pages/PisaCorbatas';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="titulo">🎵 Mi Tienda Online Musical</h1>

      <nav className="nav">
        <NavLink to="/pines" className="nav-btn">
          Pines
        </NavLink>

        <NavLink to="/pisacorbat" className="nav-btn">
          Pisa Corbatas
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Bienvenido</h2>} />
        <Route path="/pines" element={<Pines />} />
        <Route path="/pisacorbat" element={<PisaCorbatas />} />
      </Routes>
    </div>
  );
}

export default App;
