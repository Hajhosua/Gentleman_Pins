// src/utils/pricing.ts

/** -------------------------
 *  Configuración general
 *  -------------------------
 */
export const MAX_QTY_COMBO = 4; // Límite de ítems en el combo
export const MIN_QTY = 1;

/**
 * Descuento global:
 * Por cada unidad adicional (hasta 4), se descuenta $2.000 del subtotal.
 * 1 unidad  -> $0
 * 2 unidades -> $2.000
 * 3 unidades -> $4.000
 * 4 unidades -> $6.000
 */
export const DESCUENTO_GLOBAL_POR_UNIDAD_ADICIONAL = 2000;

/** Asegura que la cantidad esté dentro de [1, 4] */
export function clampQty(qty: number): number {
  return Math.max(MIN_QTY, Math.min(MAX_QTY_COMBO, qty));
}

/** Formatea a pesos colombianos */
export function formatCOP(value: number): string {
  return value.toLocaleString('es-CO');
}

/** -------------------------
 *  DESCUENTO GLOBAL
 *  -------------------------
 */

/**
 * Devuelve el DESCUENTO TOTAL según la cantidad.
 * No es por unidad: se descuenta una sola vez al subtotal.
 */
export function descuentoGlobal(qty: number): number {
  const q = clampQty(qty);
  const unidadesAdicionales = Math.max(0, q - 1); // 0, 1, 2 o 3
  return DESCUENTO_GLOBAL_POR_UNIDAD_ADICIONAL * unidadesAdicionales;
}

/**
 * Calcula la suma de precios menos el descuento global.
 * Funciona tanto para PINS como para PISA CORBATAS.
 */
export function subtotalConDescuentoGlobal(
  preciosBase: number[],
  qty: number
): number {
  const sumaBase = preciosBase.reduce((sum, v) => sum + v, 0);
  const descuento = descuentoGlobal(qty);
  return Math.max(0, sumaBase - descuento);
}

/** -------------------------
 *  Totales sin descuento
 *  -------------------------
 */
export function subtotalSinDescuento(preciosBase: number[]): number {
  return preciosBase.reduce((sum, v) => sum + v, 0);
}

export function totalGeneral(...subtotales: number[]): number {
  return subtotales.reduce((sum, v) => sum + v, 0);
}