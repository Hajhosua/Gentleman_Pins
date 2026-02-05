export const TIER_UNIT_PRICE: Record<number, number> = {
  1: 18000,
  2: 16000,
  3: 13000,
  4: 10000,
};

export function clampQty(qty: number) {
  return Math.max(1, Math.min(4, qty));
}

export function getUnitPrice(qty: number) {
  return TIER_UNIT_PRICE[clampQty(qty)];
}

export function getTotal(qty: number) {
  const q = clampQty(qty);
  return getUnitPrice(q) * q;
}

export function formatCOP(value: number) {
  return value.toLocaleString('es-CO');
}
