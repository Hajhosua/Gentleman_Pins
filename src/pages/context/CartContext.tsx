import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  subtotalConDescuentoGlobal,
  subtotalSinDescuento,
  totalGeneral,
  descuentoGlobal,
  formatCOP,
} from '../utils/pricing'; // 👈 ruta correcta (sube 2 niveles)

/** ===== Tipos ===== */
export type CartItem = {
  id: number;
  nombre: string;
  imagen: string;
  tipo: 'Pin' | 'PisaCorbata';
  precioBase: number;
};

type CartContextType = {
  items: CartItem[];
  qty: number;
  totals: {
    pins: {
      qty: number;
      subtotalBase: number;
      descuento: number;
      total: number;
    };
    pisas: {
      qty: number;
      subtotalBase: number;
      descuento: number;
      total: number;
    };
    general: {
      total: number;
    };
  };
  addItem: (item: CartItem) => void;
  removeOne: (index: number) => void;
  clear: () => void;
  buildWhatsappText: () => string;
};

/** ===== Context ===== */
const CartContext = createContext<CartContextType | null>(null);

/** ===== Provider ===== */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    // Límite a 4 ítems totales
    setItems(prev => (prev.length >= 4 ? prev : [...prev, item]));
  };

  const removeOne = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const clear = () => setItems([]);

  /** ===== Cálculo de totales ===== */
  /** ===== Cálculo de totales ===== */
const totals = useMemo(() => {
  const pins = items.filter(i => i.tipo === 'Pin');
  const pisas = items.filter(i => i.tipo === 'PisaCorbata');

  // Cantidades por grupo
  const qtyPins = pins.length;
  const qtyPisas = pisas.length;

  // Precios base por grupo
  const preciosPins = pins.map(p => p.precioBase);
  const preciosPisas = pisas.map(p => p.precioBase);

  // Subtotales base (sin descuento)
  const subtotalBasePins = subtotalSinDescuento(preciosPins);
  const subtotalBasePisas = subtotalSinDescuento(preciosPisas);
  const subtotalBaseTotal = subtotalBasePins + subtotalBasePisas;

  // ====== DESCUENTO GLOBAL por TOTAL de ítems (mezclado) ======
  const qtyTotal = items.length;
  const descuentoTotal = descuentoGlobal(qtyTotal);

  // Si quieres aplicar el descuento solo al total sin repartir por grupo:
  // const total = Math.max(0, subtotalBaseTotal - descuentoTotal);
  // y dejar los "descuento pins/pisas" en 0. Pero como tu UI muestra
  // los descuentos por grupo, prorrateamos:

  // Prorrateo proporcional al peso de cada grupo en el subtotal base
  let descuentoPins = 0;
  let descuentoPisas = 0;

  if (subtotalBaseTotal > 0 && descuentoTotal > 0) {
    descuentoPins = Math.round((subtotalBasePins / subtotalBaseTotal) * descuentoTotal);
    // Para evitar errores de redondeo, lo que falte se lo das a Pisas
    descuentoPisas = descuentoTotal - descuentoPins;
  }

  // Totales por grupo con su parte del descuento
  const totalPins = Math.max(0, subtotalBasePins - descuentoPins);
  const totalPisas = Math.max(0, subtotalBasePisas - descuentoPisas);

  // Total general (suma de ambos)
  const total = totalPins + totalPisas;

  return {
    pins: {
      qty: qtyPins,
      subtotalBase: subtotalBasePins,
      descuento: descuentoPins,
      total: totalPins,
    },
    pisas: {
      qty: qtyPisas,
      subtotalBase: subtotalBasePisas,
      descuento: descuentoPisas,
      total: totalPisas,
    },
    general: { total },
  };
}, [items]);

/** ===== WhatsApp ===== */
const buildWhatsappText = () => {
  if (items.length === 0) return 'Hola! Quiero información sobre los productos.';

  const lines = [
    'Hola! Quiero pedir este combo:',
    ...items.map(
      (it, i) => `• ${i + 1}. ${it.tipo}: ${it.nombre} — $${formatCOP(it.precioBase)}`
    ),
    '',
    `Pines: ${totals.pins.qty} — Subtotal base: $${formatCOP(totals.pins.subtotalBase)}`,
    `Descuento pins (prorrateo): -$${formatCOP(totals.pins.descuento)}`,
    `Subtotal pins: $${formatCOP(totals.pins.total)}`,
    `Pisa Corbatas: ${totals.pisas.qty} — Subtotal base: $${formatCOP(totals.pisas.subtotalBase)}`,
    `Descuento pisas (prorrateo): -$${formatCOP(totals.pisas.descuento)}`,
    `Subtotal pisas: $${formatCOP(totals.pisas.total)}`,
    '',
    `TOTAL: $${formatCOP(totals.general.total)}`,
  ];

  return lines.join('\n');
};
  const value: CartContextType = useMemo(
    () => ({
      items,
      qty: items.length,
      totals,
      addItem,
      removeOne,
      clear,
      buildWhatsappText,
    }),
    [items, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/** ===== Hook ===== */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}