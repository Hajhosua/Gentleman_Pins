/* ================= IMPORTS ================= */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Pines from './pages/Pines';
import PisaCorbatas from './pages/PisaCorbatas';

import logo from './imagenes/logo/pi.png';

import './App.css';

/* ================= COMPONENT ================= */
function App() {
  return (
    <div className="container">

      {/* ================= HEADER ================= */}
      <header className="header">
        <img
          src={logo}
          alt="Gentleman Pins Logo"
          className="logo"
        />

        <div className="header-texto">
          <h1 className="titulo">Mi Tienda Online Musical</h1>

          <p className="descripcion">
            Detalles musicales para regalar o usar todos los días<br />
            Pide tus pines y pisa corbatas fácilmente por WhatsApp.
          </p>
        </div>
      </header>

      {/* ================= NAVEGACIÓN ================= */}
      <nav className="nav">
        <NavLink to="/pines" className="nav-btn">
          Pines
        </NavLink>

        <NavLink to="/pisacorbat" className="nav-btn">
          Pisa Corbatas
        </NavLink>
      </nav>

      {/* ================= RUTAS ================= */}
      <Routes>
        <Route path="/" element={<Navigate to="/pines" replace />} />
        <Route path="/pines" element={<Pines />} />
        <Route path="/pisacorbat" element={<PisaCorbatas />} />
      </Routes>

    </div>
  );
}

export default App;
