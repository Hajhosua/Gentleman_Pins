import { useState } from 'react';
import wppIcon from '../imagenes/whppp.svg';

import pisaBateria from '../imagenes/pisacorbatarayo.webp';
import pisaPiano from '../imagenes/pisapiano.webp';
import pisaCorno from '../imagenes/pisacorne.webp';
import pisaGris from '../imagenes/pisacorbaragris.webp';
import pisaRayo from '../imagenes/pisacorrr.webp';

import './css/Baquetas.css';

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  imagenes: string[];
  mensajeWpp: string; // ✅ Guardamos el mensaje, no el link
}

const WPP_PHONE = '573218275703';

const buildWppLink = (mensaje: string) => {
  return `https://wa.me/${WPP_PHONE}?text=${encodeURIComponent(mensaje)}`;
};

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pisacorbata batería metálico',
    precio: '15.000',
    imagenes: [pisaBateria],
    mensajeWpp: 'Hola, estoy interesado en el pisacorbata de batería',
  },
  {
    id: 2,
    nombre: 'Pisacorbata piano metálico',
    precio: '15.000',
    imagenes: [pisaPiano],
    mensajeWpp: 'Hola, estoy interesado en el pisacorbata de piano',
  },
  {
    id: 3,
    nombre: 'Pisacorbata corno metálico',
    precio: '15.000',
    imagenes: [pisaCorno],
    mensajeWpp: 'Hola, estoy interesado en el pisacorbata de corno',
  },
  {
    id: 4,
    nombre: 'Pisacorbata gris metálico',
    precio: '15.000',
    imagenes: [pisaGris],
    mensajeWpp: 'Hola, estoy interesado en el pisacorbata gris',
  },
  {
    id: 5,
    nombre: 'Pisacorbata rayo metálico',
    precio: '15.000',
    imagenes: [pisaRayo],
    mensajeWpp: 'Hola, estoy interesado en el pisacorbata rayo',
  },
];

export default function PisaCorbatas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<string[]>([]);

  const abrirModal = (imagenes: string[]) => {
    setImagenesSeleccionadas(imagenes);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setImagenesSeleccionadas([]);
  };

  return (
    <div className="productos">
      <h2>Pisa Corbatas Disponibles 📌</h2>

      <div className="grid-productos">
        {productos.map((prod) => {
          const wppLink = buildWppLink(prod.mensajeWpp);

          return (
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
              <p className="precio">${prod.precio}</p>

              <a
                href={wppLink}
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
          );
        })}
      </div>

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