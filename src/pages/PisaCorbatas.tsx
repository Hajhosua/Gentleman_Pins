import { useState } from 'react';
import { useCart } from './context/CartContext';

import wppIcon from '../imagenes/whppp.svg';

import pisaRayoMetalico from '../imagenes/pisacorbatarayo.webp';
import pisaPiano from '../imagenes/pisapiano.webp';
import pisaGris from '../imagenes/pisacorbaragris.webp';
import pisaDorado from '../imagenes/pisacorrr.webp';
import pisacorbatatrianguladoo from '../imagenes/pisacorbatastriangulado.webp';
import pisacorbata_negro_dorado from '../imagenes/pisacorbata_negro_con_dorado.jpg';
import pisacorbatablancocompleto from '../imagenes/pisacorbata_blancocompleto.jpg';
import pisacorbataazulconblanco from '../imagenes/pisacorbata_azul_conblanco.jpg';
import pisacorbata_negroconblanco from '../imagenes/pisacorbatanegro_con_blanco.jpg';

import './css/Baquetas.css';
import { formatCOP } from './utils/pricing';

interface Producto {
  id: number;
  nombre: string;
  imagenes: string[];
  wpp: string;
  precio: number; // 👈 precio base propio
}

const productos: Producto[] = [

  /* ============================
     PRIMERO: Pisacorbata triangulado
     ============================ */

  {
    id: 6,
    nombre: 'Pisacorbata triangulado',
    imagenes: [pisacorbatatrianguladoo],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20triangulado',
    precio: 20000,
  },

  {
    id: 2,
    nombre: 'Pisacorbata piano metálico',
    imagenes: [pisaPiano],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20piano',
    precio: 19000,
  },

  {
    id: 7,
    nombre: 'Pisacorbata negro con dorado',
    imagenes: [pisacorbata_negro_dorado],
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pisacorbata%20negro%20con%20dorado',
    precio: 19000,
  },
  {
    id: 8,
    nombre: 'Pisacorbata blanco completo',
    imagenes: [pisacorbatablancocompleto],
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pisacorbata%20blanco%20completo',
    precio: 19000,
  },
  {
    id: 9,
    nombre: 'Pisacorbata azul con blanco',
    imagenes: [pisacorbataazulconblanco],
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pisacorbata%20azul%20con%20blanco',
    precio: 19000,
  },
  {
    id: 10,
    nombre: 'Pisacorbata negro con blanco',
    imagenes: [pisacorbata_negroconblanco],
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pisacorbata%20negro%20con%20blanco',
    precio: 19000,
  },

  /* ============================
     PRODUCTOS ANTERIORES
     ============================ */

  {
    id: 1,
    nombre: 'Pisacorbata de rayo metálico',
    imagenes: [pisaRayoMetalico],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20rayo',
    precio: 16000,
  },
 
 
  
  {
    id: 4,
    nombre: 'Pisacorbata gris metálico',
    imagenes: [pisaGris],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20gris',
    precio: 17000,
  },
  {
    id: 5,
    nombre: 'Pisacorbata dorado metálico',
    imagenes: [pisaDorado],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20dorado',
    precio: 16000,
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

            {/* Mostramos el precio base */}
            <p className="precio">Precio: ${formatCOP(prod.precio)}</p>

            {/* BOTÓN: Agregar al combo */}
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
                  precioBase: prod.precio, // 👈 CLAVE
                });
              }}
            >
              {items.length >= 4 ? 'Combo lleno (4)' : 'Agregar al combo'}
            </button>

            {/* WhatsApp individual */}
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

      {/* Modal galería */}
      {modalOpen && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar" onClick={cerrarModal}>
            &times;
          </span>

          <div className="modal-galeria" onClick={(e) => e.stopPropagation()}>
            {imagenesSeleccionadas.map((img, index) => (
              <img key={index} src={img} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
