import { useState } from 'react';

import wppIcon from '../imagenes/whppp.svg';

import pinBateria from '../imagenes/pisacorbatarayo.webp';
import pisaPiano from '../imagenes/pisapiano.webp';
import pisaCorne from '../imagenes/pisacorne.webp';
import pisaCorbataGris from '../imagenes/pisacorbaragris.webp';
import pisaRayo from '../imagenes/pisacorrr.webp';

import './css/Baquetas.css';

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  imagenes: string[];
  wpp: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pisacorbata batería metálico',
    precio: '15.000',
    imagenes: [pinBateria],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20batería',
  },
  {
    id: 2,
    nombre: 'Pisacorbata piano metálico',
    precio: '15.000',
    imagenes: [pisaPiano],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20piano',
  },
  {
    id: 3,
    nombre: 'Pisacorbata corno metálico',
    precio: '15.000',
    imagenes: [pisaCorne],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20corno',
  },
  {
    id: 4,
    nombre: 'Pisacorbata gris metálico',
    precio: '15.000',
    imagenes: [pisaCorbataGris],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20gris',
  },
  {
    id: 5,
    nombre: 'Pisacorbata rayo metálico',
    precio: '15.000',
    imagenes: [pisaRayo],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20rayo',
  },
];

export default function PisaCorbatas() {
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
            <p className="precio">${prod.precio}</p>

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