import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ClipboardList, Trash2 } from "lucide-react";
import Footer from "../components/Footer";
import CartBox from "../components/CartBox";
import { ProductContext } from "../components/SharedContext";

const Cart = () => {
  const { cart, total, quantity, clearall } = useContext(ProductContext);

  return (
    <>
      <main className="min-h-screen bg-slate-50 pb-24">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 shadow-sm md:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:underline">
            <ArrowLeft className="h-5 w-5" /> Continue shopping
          </Link>
          <Link to="/" className="text-2xl font-black tracking-wide text-purple-700">FOLLY</Link>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-purple-700">
            <ClipboardList className="h-5 w-5" /> Contact
          </Link>
        </header>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[1.6fr_1fr] md:px-8">
          <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h1 className="text-xl font-bold text-slate-900 md:text-2xl">Your shopping cart</h1>
                <p className="mt-1 text-sm text-slate-500">{quantity} {quantity === 1 ? "item" : "items"}</p>
              </div>
              {cart.length > 0 && (
                <button type="button" onClick={clearall} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" /> Clear cart
                </button>
              )}
            </div>

            {cart.length > 0 ? (
              <div>
                <div className="mt-3 hidden grid-cols-[minmax(0,1fr)_auto_auto_auto] gap-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid">
                  <span>Product</span><span>Quantity</span><span>Price</span><span>Total</span>
                </div>
                {cart.map((item) => <CartBox item={item} key={item.id} />)}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-purple-50 text-purple-700"><ClipboardList className="h-7 w-7" /></div>
                <h2 className="mt-4 text-lg font-bold text-slate-900">Your cart is empty</h2>
                <p className="mt-1 text-sm text-slate-500">Find something you love and add it to your cart.</p>
                <Link to="/products" className="mt-5 inline-flex rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800">Explore products</Link>
              </div>
            )}
          </section>

          <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Order summary</h2>
            <div className="mt-5 flex justify-between text-sm text-slate-600"><span>Items</span><span>{quantity}</span></div>
            <div className="mt-3 flex justify-between text-sm text-slate-600"><span>Delivery</span><span>Calculated at checkout</span></div>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="flex justify-between text-base font-bold text-slate-900"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">Checkout and payment are not connected yet. Contact Folly to confirm product availability, delivery and payment before placing an order.</p>
            <Link to="/contact" className="mt-5 block rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-bold text-slate-900 transition hover:bg-amber-500">Contact to place an order</Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
