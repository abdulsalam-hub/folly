import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingBasket, Heart } from "lucide-react";
import { ProductContext } from "./SharedContext";

const ProductBox = ({ id, image, product, price, isStocked, pro, color, wish = () => {} }) => {
  const { addCart } = useContext(ProductContext);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/folly/${id}`} className="relative block overflow-hidden bg-slate-50">
        <img
          src={image}
          alt={product}
          loading="lazy"
          decoding="async"
          className="h-44 w-full object-contain p-3 transition duration-500 group-hover:scale-105 sm:h-56"
        />
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${isStocked ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
          {isStocked ? "Available" : "Out of stock"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/folly/${id}`} className="line-clamp-2 min-h-10 flex-1 text-sm font-bold capitalize text-slate-900 hover:text-purple-700 sm:text-base">
            {product}
          </Link>
          <button type="button" onClick={() => wish(id)} aria-label={color ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={Boolean(color)} className="rounded-full p-1.5 text-rose-500 transition hover:bg-rose-50">
            <Heart className={`h-5 w-5 ${color ? "fill-rose-500" : ""}`} />
          </button>
        </div>
        <strong className="mt-2 text-base font-extrabold text-slate-900">${Number(price).toFixed(2)}</strong>
        <button
          type="button"
          disabled={!isStocked}
          onClick={() => addCart(pro, id)}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
        >
          <ShoppingBasket className="h-4 w-4" />
          {isStocked ? "Add to cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
};

export default ProductBox;
