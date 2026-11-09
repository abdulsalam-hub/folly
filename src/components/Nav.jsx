import { Link } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useContext } from "react";
import { ProductContext } from "./SharedContext";

const Nav = ({ openMenu, setOpenMenu }) => {
  const { quantity } = useContext(ProductContext);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 px-3 py-3 shadow-sm backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-black tracking-tight text-purple-800 md:text-3xl">FOLLY<span className="text-amber-500">.</span></Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["/", "Home"],
            ["/products", "Shop"],
            ["/about", "About"],
            ["/contact", "Contact"]
          ].map(([path, label]) => (
            <Link key={path} to={path} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-purple-50 hover:text-purple-800">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" aria-label={`Shopping cart with ${quantity} items`} className="relative grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-purple-100 hover:text-purple-800">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-amber-400 px-1 text-[10px] font-extrabold text-slate-900">{quantity}</span>
          </Link>
          <button type="button" onClick={() => setOpenMenu((current) => !current)} aria-label={openMenu ? "Close navigation menu" : "Open navigation menu"} aria-expanded={openMenu} className="grid h-10 w-10 place-items-center rounded-full bg-purple-50 text-purple-800 md:hidden">
            {openMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
