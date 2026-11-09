import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShoppingCart, Star } from "lucide-react";
import { ProductContext } from "./SharedContext";

const API_CATEGORIES = ["mens-shirts", "womens-dresses", "tops", "womens-bags"];

const ApiProducts = () => {
  const { addCart } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const responses = await Promise.all(
          API_CATEGORIES.map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}?limit=4`, {
              signal: controller.signal
            }).then((response) => {
              if (!response.ok) throw new Error("The sample catalog is temporarily unavailable.");
              return response.json();
            })
          )
        );

        const normalized = responses.flatMap((result) =>
          (result.products || []).map((item) => ({
            id: `api-${item.id}`,
            image: item.thumbnail || item.images?.[0],
            product: item.title,
            price: String(item.price),
            category: item.category,
            isStocked: item.stock > 0,
            description: item.description,
            rating: item.rating,
            stock: item.stock
          }))
        );

        setProducts(normalized);
        setError("");
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message || "Could not load sample products.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadProducts();
    return () => controller.abort();
  }, []);

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">Live API demo</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">Explore more styles</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">Extra sample products loaded from a free public REST API. These are demo listings, not confirmed Folly inventory.</p>
          </div>
          <a href="https://dummyjson.com/docs/products" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:underline">
            API documentation <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {loading && <p className="py-10 text-center text-sm text-slate-500" role="status">Loading sample products…</p>}
        {!loading && error && <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800" role="status">{error} Your Folly collection above is still available.</p>}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
            {products.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <Link to={`/folly/${item.id}`} className="block bg-slate-50">
                  <img src={item.image} alt={item.product} loading="lazy" className="h-48 w-full object-contain p-3 md:h-60" />
                </Link>
                <div className="p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-purple-600">{item.category.replaceAll("-", " ")}</p>
                  <Link to={`/folly/${item.id}`} className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold capitalize text-slate-900 hover:text-purple-700">{item.product}</Link>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <strong className="text-sm text-slate-900">${Number(item.price).toFixed(2)}</strong>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500"><Star className="h-3 w-3 fill-amber-400 text-amber-400" />{item.rating}</span>
                  </div>
                  <button type="button" disabled={!item.isStocked} onClick={() => addCart(item, item.id)} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-50">
                    <ShoppingCart className="h-4 w-4" /> Add sample item
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        <p className="mt-5 text-xs text-slate-400">Powered by DummyJSON. Its product data and simulated operations are for prototyping; the API does not create real orders or reserve real stock.</p>
      </div>
    </section>
  );
};

export default ApiProducts;
