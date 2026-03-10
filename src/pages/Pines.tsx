import { useState } from 'react';
import { useCart } from './context/CartContext';

import wppIcon from '../imagenes/whppp.svg';

import relojPin from '../imagenes/relojpin.webp';
import pinPlatillo from '../imagenes/pinplatillosabian.png';
import pinAvion from '../imagenes/pinavionn.png';
import platilloZil from '../imagenes/platillozil.webp';
import gafasNegrasPin from '../imagenes/gafasnegraspin.webp';
import claveDeSol from '../imagenes/clavedesol.webp';
import pianoPin from '../imagenes/pianopin.webp';
import otroPiano from '../imagenes/otropiano.webp';
import guitarraPin from '../imagenes/guitarrapin.webp';
import microfono from '../imagenes/microfono.webp';
import gafasNegras from '../imagenes/gafasnegras.webp';
import pinsaxofon from '../imagenes/pinsaxofon.png';
import pin_guitarra from '../imagenes/pin_de_guitarra.png';
import bandera_republica from '../imagenes/pin_bandera_de_republica_dominicana.jpg';
import pinbanderadecolombia from '../imagenes/pin_colombia.jpg';
import pinbandera_eeuu from '../imagenes/pin_de_bandera_estados_unidos.jpg';
import pingafasdorado from '../imagenes/pin_gafas_dorado.jpg';
import pinpianoconpartitura from '../imagenes/pin_piano_partitura.jpg';
import pinpiano_otro_partitura from '../imagenes/pin_piano_partituras_.jpg';
import pindealas from '../imagenes/pindealas.png';
import banderadejapon from '../imagenes/pin_banderade_japon.jpg';
import pindemicrofonogris from '../imagenes/pindemicrofonogis.avif';
import pinbanderaitalia from '../imagenes/pinbanderaitalia.avif';

import './css/Baquetas.css';
import { formatCOP } from './utils/pricing';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  wpp: string;
  precio: number; // 👈 precio base por producto
}

/**
 * Ajusta estos precios a tus valores reales.
 * El descuento de Pins se aplica sobre este precio base:
 * - 2 pins: -$1.000 c/u
 * - 3 pins: -$2.000 c/u
 * - 4 pins: -$3.000 c/u
 */
const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pin de Alas',
    imagen: pindealas,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20Alas',
    precio: 15000,
  },
  {
    id: 2,
    nombre: 'Pin reloj',
    imagen: relojPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20reloj',
    precio: 18000,
  },
  {
    id: 3,
    nombre: 'Pin de platillos',
    imagen: pinPlatillo,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20platillos',
    precio: 17000,
  },
  {
    id: 4,
    nombre: 'Pin avión',
    imagen: pinAvion,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20avión',
    precio: 16000,
  },
  {
    id: 13,
    nombre: 'Pin saxofón',
    imagen: pinsaxofon,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20saxofón',
    precio: 19000,
  },
  {
    id: 14,
    nombre: 'Pin guitarra electrica negra',
    imagen: pin_guitarra,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20guitarra%20electrica',
    precio: 18000,
  },
  {
    id: 5,
    nombre: 'Pin platillo Zildjian',
    imagen: platilloZil,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20platillo%20Zildjian',
    precio: 17000,
  },
  {
    id: 6,
    nombre: 'Pin gafas negras',
    imagen: gafasNegrasPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20gafas%20negras',
    precio: 16000,
  },
  {
    id: 7,
    nombre: 'Pin clave de sol',
    imagen: claveDeSol,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20clave%20de%20sol',
    precio: 18000,
  },
  {
    id: 8,
    nombre: 'Pin piano',
    imagen: pianoPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20piano',
    precio: 17000,
  },
  {
  id: 23,
  nombre: 'Pin micrófono gris',
  imagen: pindemicrofonogris,
  wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20micr%C3%B3fono%20gris',
  precio: 18000, // ajusta el precio si lo deseas
},
  {
    id: 9,
    nombre: 'Pin piano clásico',
    imagen: otroPiano,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20piano%20clásico',
    precio: 17000,
  },
  {
    id: 10,
    nombre: 'Pin guitarra',
    imagen: guitarraPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20guitarra',
    precio: 17000,
  },
  {
    id: 11,
    nombre: 'Pin micrófono',
    imagen: microfono,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20micr%C3%B3fono',
    precio: 15000,
  },
  {
    id: 12,
    nombre: 'Pin gafas negras clásicas',
    imagen: gafasNegras,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20gafas%20negras%20cl%C3%A1sicas',
    precio: 16000,
  },

  /* =========================================
     NUEVOS PRODUCTOS (los que pediste meter)
     ========================================= */

  
  {
    id: 15,
    nombre: 'Pin bandera República Dominicana',
    imagen: bandera_republica,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20la%20bandera%20de%20República%20Dominicana',
    precio: 15000,
  },
  {
  id: 19,
  nombre: 'Pin bandera Japón',
  imagen: banderadejapon,
  wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20la%20bandera%20de%20Jap%C3%B3n',
  precio: 15000, // ajusta si quieres otro precio
},

{
  id: 24,
  nombre: 'Pin bandera Italia',
  imagen: pinbanderaitalia,
  wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20la%20bandera%20de%20Italia',
  precio: 16000, // ✅ ajusta si manejas otro precio
},
  {
    id: 16,
    nombre: 'Pin bandera Colombia',
    imagen: pinbanderadecolombia,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20la%20bandera%20de%20Colombia',
    precio: 13000,
  },
  {
    id: 17,
    nombre: 'Pin bandera Estados Unidos',
    imagen: pinbandera_eeuu,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20la%20bandera%20de%20Estados%20Unidos',
    precio: 16000,
  },
  
  
  {
    id: 20,
    nombre: 'Pin gafas doradas',
    imagen: pingafasdorado,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20gafas%20doradas',
    precio: 17000,
  },
  {
    id: 21,
    nombre: 'Pin piano con partitura',
    imagen: pinpianoconpartitura,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20pin%20de%20piano%20con%20partitura',
    precio: 17000,
  },
  {
    id: 22,
    nombre: 'Pin piano con partituras extra',
    imagen: pinpiano_otro_partitura,
    wpp: 'https://wa.me/573218275703?text=Hola,%20quiero%20el%20otro%20pin%20de%20piano%20con%20partituras',
    precio: 17000,
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

            {/* Muestra el precio base */}
            <p className="precio">Precio: ${formatCOP(prod.precio)}</p>

            {/* BOTÓN: Agregar al combo */}
            <button
              className="btn-combo"
              disabled={items.length >= 4}
              onClick={(e) => {
                e.stopPropagation(); // no abre modal
                addItem({
                  id: prod.id,
                  nombre: prod.nombre,
                  imagen: prod.imagen,
                  tipo: 'Pin',
                  precioBase: prod.precio, // 👈 requerido por el CartContext
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

      {/* Modal */}
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