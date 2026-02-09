import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/pricing';
import './ComboBar.css';

export default function ComboBar() {
  const { items, unitPrice, total, clear, removeOne, buildWhatsappText } = useCart();

  const phone = '573218275703'; // tu número sin +

  const link =
    items.length === 0
      ? '#'
      : `https://wa.me/${phone}?text=${encodeURIComponent(buildWhatsappText())}`;

  return (
    <div className="comboBar">
      <div className="comboTop">
        <div className="comboInfo">
          <strong>Combo:</strong> {items.length}/4
          <span className="comboSep">•</span>
          <span className="comboPrice">
            ${formatCOP(unitPrice)} c/u — <b>Total:</b> ${formatCOP(total)}
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

      {items.length > 0 && (
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
      )}

      <div className="comboHint">
      Promo: 1=$16.000 • 2=$14.000 c/u • 3=$12.000 c/u • 4=$10.000 c/u
      </div>
    </div>
  );
}