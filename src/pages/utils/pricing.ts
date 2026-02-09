export const TIER_UNIT_PRICE: Record<number, number> = {
  1: 16000,
  2: 14000,
  3: 12000,
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