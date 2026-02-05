import { useState } from 'react';
import { useCart } from './context/CartContext';

import wppIcon from '../imagenes/whppp.svg';

import pisaRayoMetalico from '../imagenes/pisacorbatarayo.webp';
import pisaPiano from '../imagenes/pisapiano.webp';
import pisaCorne from '../imagenes/pisacorne.webp';
import pisaGris from '../imagenes/pisacorbaragris.webp';
import pisaDorado from '../imagenes/pisacorrr.webp';

import './css/Baquetas.css';

interface Producto {
  id: number;
  nombre: string;
  imagenes: string[];
  wpp: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pisacorbata de rayo metálico',
    imagenes: [pisaRayoMetalico],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20rayo',
  },
  {
    id: 2,
    nombre: 'Pisacorbata piano metálico',
    imagenes: [pisaPiano],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20piano',
  },
  {
    id: 3,
    nombre: 'Pisacorbata corno metálico',
    imagenes: [pisaCorne],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20corno',
  },
  {
    id: 4,
    nombre: 'Pisacorbata gris metálico',
    imagenes: [pisaGris],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20gris',
  },
  {
    id: 5,
    nombre: 'Pisacorbata dorado metálico',
    imagenes: [pisaDorado],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20dorado',
  },
];

export default function PisaCorbatas() {
  const { addItem, items } = useCart();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<string[]>([]);

  const abrirModal = (imagenes: string[]): void => {
    setImagenesSeleccionadas(imagenes);
    setModalOpen(true);
  };

  const cerrarModal = (): void => {
    setModalOpen(false);
    setImagenesSeleccionadas([]);
  };

  return (
    <div className="productos">
      <h2>Pisa Corbatas Disponibles 📌</h2>

      <div className="grid-productos">
        {productos.map((prod) => (
          <div
            key={prod.id}
            className="producto"
            onClick={() => abrirModal(prod.imagenes)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') abrirModal(prod.imagenes);
            }}
          >
            <img src={prod.imagenes[0]} alt={prod.nombre} />

            <p>{prod.nombre}</p>

            {/* ✅ Precio lo maneja el combo */}
            <p className="precio">Promo por combo (1 a 4)</p>

            {/* ✅ Botón Agregar al combo */}
            <button
              className="btn-combo"
              disabled={items.length >= 4}
              onClick={(e) => {
                e.stopPropagation();
                addItem({
                  id: prod.id,
                  nombre: prod.nombre,
                  imagen: prod.imagenes[0],
                  tipo: 'PisaCorbata',
                });
              }}
            >
              {items.length >= 4 ? 'Combo lleno (4)' : 'Agregar al combo'}
            </button>

            {/* ✅ WhatsApp individual */}
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

      {/* ✅ Modal galería */}
      {modalOpen && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar" onClick={cerrarModal}>
            &times;
          </span>

          <div className="modal-galeria" onClick={(e) => e.stopPropagation()}>
            {imagenesSeleccionadas.map((img, index) => (
              <img key={index} src={img} alt={`Producto ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}