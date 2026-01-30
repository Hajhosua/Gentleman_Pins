import { useState } from 'react';
import pinBateria from '../imagenes/pisacorbatarayo.webp';
  import pisapiano from '../imagenes/pisapiano.webp';
  import pisacorne from '../imagenes/pisacorne.webp';
  import pisacorbatagris from '../imagenes/pisacorbaragris.webp';
  import pisacorrr from '../imagenes/pisacorrr.webp';


import './css/Baquetas.css';

/* =====================
   Tipos e interfaces
===================== */

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  imagenes: string[];
  wpp: string;
}

/* =====================
   Datos
===================== */

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
    imagenes: [pisapiano],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20piano',
  },
  {
    id: 3,
    nombre: 'Pisacorbata corno metálico',
    precio: '15.000',
    imagenes: [pisacorne],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20de%20corno',
  },
  {
    id: 4,
    nombre: 'Pisacorbata gris metálico',
    precio: '15.000',
    imagenes: [pisacorbatagris],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20gris',
  },
  
  {
    id: 5,
    nombre: 'Pisacorbata rayo metálico',
    precio: '15.000',
    imagenes: [pisacorrr],
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pisacorbata%20rayo',
  },
];

/* =====================
   Componente
===================== */

export default function PisaCorbatas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<string[]>([]);

  /* =====================
     Funciones
  ===================== */

  const abrirModal = (imagenes: string[]) => {
    setImagenesSeleccionadas(imagenes);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setImagenesSeleccionadas([]);
  };

  /* =====================
     Render
  ===================== */

  return (
    <div className="productos">
      <h2>Pines Disponibles</h2>

      <div className="grid-productos">
        {productos.map((prod) => (
          <div
            key={prod.id}
            className="producto"
            onClick={() => abrirModal(prod.imagenes)}
          >
            {/* Imagen principal */}
            <img src={prod.imagenes[0]} alt={prod.nombre} />

            <p>{prod.nombre}</p>
            <p className="precio">${prod.precio}</p>

            <a
              href={prod.wpp}
              target="_blank"
              rel="noopener noreferrer"
              className="wpp-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Preguntar por WhatsApp y por domisilio
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar">&times;</span>

          <div className="modal-galeria">
            {imagenesSeleccionadas.map((img, index) => (
              <img key={index} src={img} alt="Producto" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
