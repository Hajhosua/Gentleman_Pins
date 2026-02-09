/* ================= IMPORTS ================= */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Pines from './pages/Pines';
import PisaCorbatas from './pages/PisaCorbatas';

import logo from './imagenes/logo/pi.png';
import './App.css';

/* ✅ Context (Combo/Carrito) */
import { CartProvider } from './pages/context/CartContext';

/* ✅ Barra del combo (PASO 3B) */
import ComboBar from './pages/components/ComboBar';

/* ================= COMPONENT ================= */
function App() {
  return (
    <CartProvider>
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
<div className="promo-table">
  <div className="promo-row header">
    <span>Cantidad</span>
    <span>Precio c/u</span>
    <span>Total</span>
  </div>

  <div className="promo-row">
    <span>1 unidad</span>
    <span>$16.000</span>
    <span>$16.000</span>
  </div>

  <div className="promo-row">
    <span>2 unidades</span>
    <span>$14.000</span>
    <span>$28.000</span>
  </div>

  <div className="promo-row">
    <span>3 unidades</span>
    <span>$12.000</span>
    <span>$36.000</span>
  </div>

  <div className="promo-row">
    <span>4 unidades</span>
    <span>$10.000</span>
    <span>$40.000</span>
  </div>
</div>
           
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

        {/* ✅ BARRA DEL COMBO (siempre visible abajo) */}
        <ComboBar />

      </div>
    </CartProvider>
  );
}

export default App;
