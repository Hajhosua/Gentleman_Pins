  import { useState } from 'react';
  import pinBateria from '../imagenes/pin_alas.webp';
  import relojPin from '../imagenes/relojpin.webp';
  import pin_platillo from '../imagenes/pin_platillo.webp';
  import pinavion from '../imagenes/pinavion.webp';
  import platillozil from '../imagenes/platillozil.webp';
  import gafasnegraspin from '../imagenes/gafasnegraspin.webp';
  import clavedesol from '../imagenes/clavedesol.webp';
  import pianopin from '../imagenes/pianopin.webp';
  import otropiano from '../imagenes/otropiano.webp';
  import guitarrapin from '../imagenes/guitarrapin.webp';
  import microfono from '../imagenes/microfono.webp';
  import gafasnegras from '../imagenes/gafasnegras.webp';


   import './css/Baquetas.css';

  /* =====================
    Tipos e interfaces
  ===================== */

  interface Producto {
    id: number;
    nombre: string;
    precio: string;
    imagen: string;
    wpp: string;
  }

  /* =====================
    Datos
  ===================== */

  const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Pin de batería metálico',
    precio: '15.000',
    imagen: pinBateria,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20batería',
  },
  {
    id: 2,
    nombre: 'Pin reloj metálico',
    precio: '15.000',
    imagen: relojPin,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20reloj',
  },
  {
    id: 3,
    nombre: 'Pin de platillos metálico',
    precio: '15.000',
    imagen: pin_platillo,
    wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20platillos',
  },
  {
  id: 4,
  nombre: 'Pin avión metálico',
  precio: '15.000',
  imagen: pinavion,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20avión',
},
{
  id: 5,
  nombre: 'Pin platillo Zildjian metálico',
  precio: '15.000',
  imagen: platillozil,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20platillo%20Zildjian',
},

{
  id: 6,
  nombre: 'Pin gafas negras metálico',
  precio: '15.000',
  imagen: gafasnegraspin,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20gafas%20negras',
},
{
  id: 7,
  nombre: 'Pin clave de sol metálico',
  precio: '15.000',
  imagen: clavedesol,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20clave%20de%20sol',
},
{
  id: 8,
  nombre: 'Pin piano metálico',
  precio: '15.000',
  imagen: pianopin,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20piano',
},
{
  id: 9,
  nombre: 'Pin piano clásico metálico',
  precio: '15.000',
  imagen: otropiano,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20piano%20clásico',
},
{
  id: 10,
  nombre: 'Pin guitarra metálico',
  precio: '15.000',
  imagen: guitarrapin,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20guitarra',
},
{
  id: 11,
  nombre: 'Pin micrófono metálico',
  precio: '15.000',
  imagen: microfono,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20micrófono',
},
{
  id: 12,
  nombre: 'Pin gafas negras clásicas',
  precio: '15.000',
  imagen: gafasnegras,
  wpp: 'https://wa.me/573218275703?text=Hola,%20estoy%20interesado%20en%20el%20pin%20de%20gafas%20negras%20clásicas',
},



];


  /* =====================
    Componente
  ===================== */

  export default function Pines() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState<string>('');

    /* =====================
      Funciones
    ===================== */

    const abrirModal = (imagen: string): void => {
      setImagenSeleccionada(imagen);
      setModalOpen(true);
    };

    const cerrarModal = (): void => {
      setModalOpen(false);
      setImagenSeleccionada('');
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
              onClick={() => abrirModal(prod.imagen)}
            >
              <img src={prod.imagen} alt={prod.nombre} />
              <p>{prod.nombre}</p>
              <p className="precio">${prod.precio}</p>

              <a
                href={prod.wpp}
                target="_blank"
                rel="noopener noreferrer"
                className="wpp-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Preguntar por WhatsApp y domisilio
              </a>
            </div>
          ))}
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
            />
          </div>
        )}
      </div>
    );
  }
