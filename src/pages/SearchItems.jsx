import { useMemo, useState } from "react";
import { ArrowLeft, Search, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { productData } from "../components/Items";
import ProductBox from "../components/ProductBox";

const SearchItems = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const products = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return productData;
    return productData.filter((item) =>
      `${item.product} ${item.category}`.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-12 pt-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <Link to="/products" aria-label="Back to products" className="rounded-full bg-white p-3 text-slate-700 shadow-sm hover:bg-purple-50">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Find your style</h1>
        </div>

        <form onSubmit={(event) => event.preventDefault()} role="search" className="mx-auto mt-7 flex h-12 max-w-2xl items-center rounded-full border border-slate-200 bg-white px-4 shadow-sm focus-within:ring-2 focus-within:ring-purple-300">
          <Search className="h-5 w-5 shrink-0 text-slate-400" />
          <label htmlFor="search-products" className="sr-only">Search products</label>
          <input id="search-products" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products by name..." autoFocus className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-slate-800 outline-none" />
          {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="rounded-full p-1 text-slate-400 hover:bg-slate-100"><X className="h-4 w-4" /></button>}
        </form>

        <div className="mb-5 mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">{products.length} {products.length === 1 ? "product" : "products"} found</p>
          <Link to="/products" className="text-sm font-semibold text-purple-700 hover:underline">Back to collection</Link>
        </div>

        {products.length ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
            {products.map((item) => (
              <ProductBox
                key={item.id}
                id={item.id}
                image={item.image}
                product={item.product}
                price={item.price}
                category={item.category}
                isStocked={item.isStocked}
                pro={item}
                wish={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <h2 className="text-lg font-bold text-slate-900">No matching products</h2>
            <p className="mt-2 text-sm text-slate-500">Try another product name or clear your search.</p>
            <button type="button" onClick={() => setSearch("")} className="mt-5 rounded-full bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-800">Clear search</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchItems;
