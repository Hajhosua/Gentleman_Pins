/* ================= IMPORTS ================= */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Pines from './pages/Pines';
import PisaCorbatas from './pages/PisaCorbatas';

import logo from './imagenes/logo/pinn.jpg';
import './App.css';

/* ✅ Context (Combo/Carrito) */
import { CartProvider } from './pages/context/CartContext';

/* ✅ Barra del combo */
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
            <h1 className="titulo"> Tienda Online Musical</h1>

            <p className="descripcion">
              Detalles para regalar o usar con trajes.<br />
              Arma tu combo y obtén descuentos automáticos.
            </p>

            {/* ================= TABLA PSICOLÓGICA ================= */}
            <div className="promo-table">
              <div className="promo-row header">
                <span>Cantidad</span>
                <span>Beneficio</span>
                <span>Ahorro</span>
              </div>

              <div className="promo-row">
                <span>1 unidad</span>
                <span>Precio normal</span>
                <span>—</span>
              </div>

              <div className="promo-row destacado">
                <span>2 unidades</span>
                <span style={{ color: '#0a0' }}>Descuento activado</span>
                <span style={{ color: '#0a0' }}>- $2.000</span>
              </div>

              <div className="promo-row">
                <span>3 unidades</span>
                <span style={{ color: '#0a0' }}>Mayor ahorro</span>
                <span style={{ color: '#0a0' }}>- $4.000</span>
              </div>

              <div className="promo-row recomendado">
                <span>4 unidades</span>
                <span style={{ color: '#d29d00' }}><b>Mejor precio 🔥</b></span>
                <span style={{ color: '#d29d00' }}><b>- $6.000</b></span>
              </div>
            </div>

            <p className="promo-texto">
              Entre más llevas, <b>más ahorras</b>.  
              El descuento se aplica automáticamente al total.
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

        {/* ================= COMBO BAR ================= */}
        <ComboBar />

      </div>
    </CartProvider>
  );
}

export default App;