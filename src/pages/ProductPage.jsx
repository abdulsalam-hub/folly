import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react";
import { productData } from "../components/Items";
import { ProductContext } from "../components/SharedContext";
import ToastCart from "../components/ToastCart";

const ProductPage = () => {
  const { id } = useParams();
  const { addCart } = useContext(ProductContext);
  const isApiProduct = id?.startsWith("api-");
  const localProduct = !isApiProduct
    ? productData.find((item) => String(item.id) === String(id))
    : null;
  const [product, setProduct] = useState(localProduct || null);
  const [loading, setLoading] = useState(Boolean(isApiProduct));
  const [error, setError] = useState("");
  const [wish, setWish] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!isApiProduct) {
      setProduct(localProduct || null);
      setLoading(false);
      return undefined;
    }

    const controller = new AbortController();
    setLoading(true);
    fetch(`https://dummyjson.com/products/${encodeURIComponent(id.slice(4))}`, {
      signal: controller.signal
    })
      .then((response) => {
        if (!response.ok) throw new Error("We could not find this product.");
        return response.json();
      })
      .then((item) => setProduct({
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
      .catch((requestError) => {
        if (requestError.name !== "AbortError") setError(requestError.message || "Unable to load this product.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [id, isApiProduct]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(false), 2500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  if (loading) return <main className="grid min-h-screen place-items-center text-slate-600">Loading product details…</main>;
  if (error || !product) {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Product unavailable</h1>
        <p className="mt-2 text-slate-600">{error || "This product could not be found."}</p>
        <Link to="/products" className="mt-5 rounded-full bg-purple-700 px-5 py-3 font-semibold text-white">Back to products</Link>
      </main>
    );
  }

  const { image, product: name, price, category, description, rating, isStocked } = product;

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-12 pt-20 md:px-8">
      {toast && <ToastCart product={name} image={image} price={price} />}
      <div className="mx-auto max-w-6xl">
        <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>
        <div className="grid gap-8 rounded-3xl bg-white p-4 shadow-sm md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img src={image} alt={name} className="h-[380px] w-full object-contain md:h-[520px]" />
          </div>
          <div className="flex flex-col justify-center px-1 py-4 md:px-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">{category}</p>
            <h1 className="mt-3 text-3xl font-extrabold capitalize text-slate-900 md:text-4xl">{name}</h1>
            <p className="mt-4 text-2xl font-bold text-slate-900">${Number(price).toFixed(2)}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {rating ? `${rating} / 5` : "Featured item"}
              <span className={isStocked ? "text-emerald-700" : "text-red-600"}>{isStocked ? "In stock" : "Currently unavailable"}</span>
            </div>
            <p className="mt-6 leading-7 text-slate-600">{description || "A versatile addition to your everyday wardrobe. Explore the Folly collection for more styles."}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                disabled={!isStocked}
                onClick={() => { addCart(product, product.id); setToast(true); }}
                className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-7 py-3 font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ShoppingCart className="h-5 w-5" /> Add to cart
              </button>
              <button type="button" onClick={() => setWish((current) => !current)} aria-pressed={wish} aria-label={wish ? "Remove from wishlist" : "Add to wishlist"} className="rounded-full border border-slate-200 p-3 text-rose-600 hover:bg-rose-50">
                <Heart className={wish ? "h-5 w-5 fill-rose-500" : "h-5 w-5"} />
              </button>
            </div>
            {isApiProduct && <p className="mt-5 text-xs text-slate-400">Sample catalog item supplied by DummyJSON for demonstration. Verify real availability and pricing before accepting orders.</p>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
