import React, { createContext, useContext, useMemo, useState } from 'react';
import { clampQty, getTotal, getUnitPrice } from '../utils/pricing';

export type CartItem = {
  id: number;
  nombre: string;
  imagen: string;
  tipo: 'Pin' | 'PisaCorbata';
};

type CartContextType = {
  items: CartItem[];
  qty: number;
  unitPrice: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeOne: (index: number) => void;
  clear: () => void;
  buildWhatsappText: () => string;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const qtyReal = items.length;
  const qtyPromo = clampQty(qtyReal || 1);

  const unitPrice = getUnitPrice(qtyReal || 1);
  const total = getTotal(qtyReal || 1);

  const addItem = (item: CartItem) => {
    // ✅ Limitamos a 4 porque tu promo es hasta 4
    setItems(prev => (prev.length >= 4 ? prev : [...prev, item]));
  };

  const removeOne = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const clear = () => setItems([]);

  const buildWhatsappText = () => {
    if (items.length === 0) return 'Hola! Quiero información sobre los combos.';

    const lines = [
      'Hola! Quiero pedir este combo:',
      ...items.map((it, i) => `• ${i + 1}. ${it.tipo}: ${it.nombre}`),
      '',
      `Cantidad: ${qtyPromo}`,
      `Precio unitario (promo): $${unitPrice.toLocaleString('es-CO')}`,
      `Total: $${total.toLocaleString('es-CO')}`,
    ];

    return lines.join('\n');
  };

  const value = useMemo(
    () => ({
      items,
      qty: qtyPromo,
      unitPrice,
      total,
      addItem,
      removeOne,
      clear,
      buildWhatsappText,
    }),
    [items, qtyPromo, unitPrice, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}