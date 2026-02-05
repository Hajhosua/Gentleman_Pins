import { useState } from 'react';
import { useCart } from './context/CartContext';

import wppIcon from '../imagenes/whppp.svg';

import pinAlas from '../imagenes/pin_alas.webp';
import relojPin from '../imagenes/relojpin.webp';
import pinPlatillo from '../imagenes/pin_platillo.webp';
import pinAvion from '../imagenes/pinavion.webp';
import platilloZil from '../imagenes/platillozil.webp';
import gafasNegrasPin from '../imagenes/gafasnegraspin.webp';
import claveDeSol from '../imagenes/clavedesol.webp';
import pianoPin from '../imagenes/pianopin.webp';
import otroPiano from '../imagenes/otropiano.webp';
import guitarraPin from '../imagenes/guitarrapin.webp';
import microfono from '../imagenes/microfono.webp';
import gafasNegras from '../imagenes/gafasnegras.webp';

import './css/Baquetas.css';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  wpp: string;
}

/**
 * ✅ Nota: ya no dependemos del precio fijo aquí,
 * porque el precio final lo calcula el combo por cantidad.
 * Si quieres mostrar algo, ponemos "Promo por combo".
 */
const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pin de Alas',
    imagen: pinAlas,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20Alas',
  },
  {
    id: 2,
    nombre: 'Pin reloj',
    imagen: relojPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20reloj',
  },
  {
    id: 3,
    nombre: 'Pin de platillos',
    imagen: pinPlatillo,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20platillos',
  },
  {
    id: 4,
    nombre: 'Pin avión',
    imagen: pinAvion,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20avión',
  },
  {
    id: 5,
    nombre: 'Pin platillo Zildjian',
    imagen: platilloZil,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20platillo%20Zildjian',
  },
  {
    id: 6,
    nombre: 'Pin gafas negras',
    imagen: gafasNegrasPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20gafas%20negras',
  },
  {
    id: 7,
    nombre: 'Pin clave de sol',
    imagen: claveDeSol,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20clave%20de%20sol',
  },
  {
    id: 8,
    nombre: 'Pin piano',
    imagen: pianoPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20piano',
  },
  {
    id: 9,
    nombre: 'Pin piano clásico',
    imagen: otroPiano,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20piano%20clásico',
  },
  {
    id: 10,
    nombre: 'Pin guitarra',
    imagen: guitarraPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20guitarra',
  },
  {
    id: 11,
    nombre: 'Pin micrófono',
    imagen: microfono,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20micrófono',
  },
  {
    id: 12,
    nombre: 'Pin gafas negras clásicas',
    imagen: gafasNegras,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20gafas%20negras%20clásicas',
  },
];

export default function Pines() {
  const { addItem, items } = useCart();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string>('');

  const abrirModal = (imagen: string): void => {
    setImagenSeleccionada(imagen);
    setModalOpen(true);
  };

  const cerrarModal = (): void => {
    setModalOpen(false);
    setImagenSeleccionada('');
  };

  return (
    <div className="productos">
      <h2>Pines Disponible 📌</h2>

      <div className="grid-productos">
        {productos.map((prod) => (
          <div
            key={prod.id}
            className="producto"
            onClick={() => abrirModal(prod.imagen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') abrirModal(prod.imagen);
            }}
          >
            <img src={prod.imagen} alt={prod.nombre} />

            <p>{prod.nombre}</p>

            {/* ✅ Ya no precio fijo por producto: se calcula por cantidad */}
            <p className="precio">Promo por combo (1 a 4)</p>

            {/* ✅ BOTÓN: Agregar al combo */}
            <button
              className="btn-combo"
              disabled={items.length >= 4}
              onClick={(e) => {
                e.stopPropagation(); // ✅ no abre modal
                addItem({
                  id: prod.id,
                  nombre: prod.nombre,
                  imagen: prod.imagen,
                  tipo: 'Pin',
                });
              }}
            >
              {items.length >= 4 ? 'Combo lleno (4)' : 'Agregar al combo'}
            </button>

            {/* ✅ WhatsApp individual (se mantiene) */}
            <a
              href={prod.wpp}
              target="_blank"
              rel="noopener noreferrer"
              className="wpp-btn"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Pedir por WhatsApp: ${prod.nombre}`}
              title="Pedir por WhatsApp"
            >
              <img src={wppIcon} alt="WhatsApp" className="wpp-icon" />
              <span className="wpp-text">Pedir por WhatsApp</span>
            </a>
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {modalOpen && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar" onClick={cerrarModal}>
            &times;
          </span>

          <img
            src={imagenSeleccionada}
            alt="Producto"
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}