import { useState } from 'react';
import wppIcon from '../imagenes/whppp.svg';

import pinBateria from '../imagenes/pin_alas.webp';
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
  precio: string;
  imagen: string;
  mensajeWpp: string; // ✅ guardamos SOLO el mensaje, no el link completo
}

const WPP_PHONE = '573218275703';

const buildWppLink = (mensaje: string) => {
  return `https://wa.me/${WPP_PHONE}?text=${encodeURIComponent(mensaje)}`;
};

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pin de batería metálico',
    precio: '15.000',
    imagen: pinBateria,
    mensajeWpp: 'Hola, estoy interesado en el pin de batería',
  },
  {
    id: 2,
    nombre: 'Pin reloj metálico',
    precio: '15.000',
    imagen: relojPin,
    mensajeWpp: 'Hola, estoy interesado en el pin reloj',
  },
  {
    id: 3,
    nombre: 'Pin de platillos metálico',
    precio: '15.000',
    imagen: pinPlatillo,
    mensajeWpp: 'Hola, estoy interesado en el pin de platillos',
  },
  {
    id: 4,
    nombre: 'Pin avión metálico',
    precio: '15.000',
    imagen: pinAvion,
    mensajeWpp: 'Hola, estoy interesado en el pin avión',
  },
  {
    id: 5,
    nombre: 'Pin platillo Zildjian metálico',
    precio: '15.000',
    imagen: platilloZil,
    mensajeWpp: 'Hola, estoy interesado en el pin platillo Zildjian',
  },
  {
    id: 6,
    nombre: 'Pin gafas negras metálico',
    precio: '15.000',
    imagen: gafasNegrasPin,
    mensajeWpp: 'Hola, estoy interesado en el pin de gafas negras',
  },
  {
    id: 7,
    nombre: 'Pin clave de sol metálico',
    precio: '15.000',
    imagen: claveDeSol,
    mensajeWpp: 'Hola, estoy interesado en el pin clave de sol',
  },
  {
    id: 8,
    nombre: 'Pin piano metálico',
    precio: '15.000',
    imagen: pianoPin,
    mensajeWpp: 'Hola, estoy interesado en el pin de piano',
  },
  {
    id: 9,
    nombre: 'Pin piano clásico metálico',
    precio: '15.000',
    imagen: otroPiano,
    mensajeWpp: 'Hola, estoy interesado en el pin de piano clásico',
  },
  {
    id: 10,
    nombre: 'Pin guitarra metálico',
    precio: '15.000',
    imagen: guitarraPin,
    mensajeWpp: 'Hola, estoy interesado en el pin de guitarra',
  },
  {
    id: 11,
    nombre: 'Pin micrófono metálico',
    precio: '15.000',
    imagen: microfono,
    mensajeWpp: 'Hola, estoy interesado en el pin de micrófono',
  },
  {
    id: 12,
    nombre: 'Pin gafas negras clásicas',
    precio: '15.000',
    imagen: gafasNegras,
    mensajeWpp: 'Hola, estoy interesado en el pin de gafas negras clásicas',
  },
];

export default function Pines() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState('');

  const abrirModal = (imagen: string) => {
    setImagenSeleccionada(imagen);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setImagenSeleccionada('');
  };

  return (
    <div className="productos">
      <h2>Pines Disponibles 📌</h2>

      <div className="grid-productos">
        {productos.map((prod) => {
          const wppLink = buildWppLink(prod.mensajeWpp);

          return (
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