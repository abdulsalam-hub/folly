import { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ProductContext } from "./SharedContext";

const CartBox = ({ item }) => {
  const { del, increaseQuantity, decreaseQuantity } = useContext(ProductContext);
  const { id, image, product, price, amount } = item;

  return (
    <article className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b border-slate-100 py-4 text-left sm:grid-cols-[minmax(0,1fr)_auto_auto_auto]">
      <div className="flex min-w-0 items-center gap-3">
        <button type="button" onClick={() => del(id)} aria-label={`Remove ${product} from cart`} className="rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-600">
          <Trash2 className="h-4 w-4" />
        </button>
        <img src={image} alt={product} loading="lazy" className="h-14 w-14 rounded-lg bg-slate-100 object-contain" />
        <p className="truncate text-sm font-semibold text-slate-800">{product}</p>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => decreaseQuantity(id)} aria-label={`Decrease ${product} quantity`} className="rounded-full bg-slate-100 p-1.5 hover:bg-slate-200"><Minus className="h-4 w-4" /></button>
        <span className="min-w-5 text-center text-sm font-semibold tabular-nums">{amount}</span>
        <button type="button" onClick={() => increaseQuantity(id)} aria-label={`Increase ${product} quantity`} className="rounded-full bg-slate-100 p-1.5 hover:bg-slate-200"><Plus className="h-4 w-4" /></button>
      </div>
      <span className="text-sm text-slate-600">${Number(price).toFixed(2)}</span>
      <strong className="hidden text-sm text-slate-900 sm:block">${(Number(price) * Number(amount)).toFixed(2)}</strong>
    </article>
  );
};

export default CartBox;
