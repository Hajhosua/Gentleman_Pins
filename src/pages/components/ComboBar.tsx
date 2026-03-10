// src/pages/components/ComboBar.tsx

import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/pricing'; // 👈 RUTA CORRECTA
import './ComboBar.css';

export default function ComboBar() {
  const { items, totals, clear, removeOne, buildWhatsappText } = useCart();

  const phone = '573218275703';

  const link =
    items.length === 0
      ? '#'
      : `https://wa.me/${phone}?text=${encodeURIComponent(
          buildWhatsappText()
        )}`;

  return (
    <div className="comboBar">
      {/* ---------------- TOP ---------------- */}
      <div className="comboTop">
        <div className="comboInfo">
          <strong>Combo:</strong> {items.length}/4
          <span className="comboSep">•</span>

          <span className="comboPrice">
            <b>Total:</b> ${formatCOP(totals.general.total)}
          </span>
        </div>

        <div className="comboActions">
          <a
            className={`comboWpp ${items.length === 0 ? 'disabled' : ''}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => items.length === 0 && e.preventDefault()}
          >
            Pedir por WhatsApp
          </a>

          <button
            className="comboClear"
            onClick={clear}
            disabled={items.length === 0}
          >
            Vaciar
          </button>
        </div>
      </div>

      {/* ---------------- LISTA ---------------- */}
      {items.length > 0 && (
        <>
          <div className="comboList">
            {items.map((it, idx) => (
              <button
                key={`${it.tipo}-${it.id}-${idx}`}
                className="comboChip"
                title="Quitar 1"
                onClick={() => removeOne(idx)}
              >
                {it.tipo}: {it.nombre} ✕
              </button>
            ))}
          </div>

          {/* ---------------- DETALLES ---------------- */}
          <div className="comboHint">
            Pins: {totals.pins.qty}
            {totals.pins.qty > 0
              ? ` — Base: $${formatCOP(
                  totals.pins.subtotalBase
                )} — Descuento: -$${formatCOP(
                  totals.pins.descuento
                )} — Subtotal: $${formatCOP(totals.pins.total)}`
              : ''}

            {' • '}

            Pisa Corbatas: {totals.pisas.qty}
            {totals.pisas.qty > 0
              ? ` — Base: $${formatCOP(
                  totals.pisas.subtotalBase
                )} — Descuento: -$${formatCOP(
                  totals.pisas.descuento
                )} — Subtotal: $${formatCOP(totals.pisas.total)}`
              : ''}
          </div>
        </>
      )}

      {/* ---------------- NOTA ---------------- */}
      <div className="comboHint">
        Descuento global: por cada unidad adicional (hasta 4) se descuenta{' '}
        <b>$2.000</b> del subtotal.
      </div>
    </div>
  );
}