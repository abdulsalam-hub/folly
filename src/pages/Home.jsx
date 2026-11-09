import { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Popup from "../components/Popup";
import ApiProducts from "../components/ApiProducts";

const Home = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/searchproduct?q=${encodeURIComponent(searchItem.trim())}`);
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen w-full bg-slate-50 pt-24">
        <section className="bg-gradient-to-r from-amber-100 via-white to-purple-100 px-4 py-10 text-center md:px-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-purple-700">
            Find your everyday style
          </p>
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Fashion that feels like you.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
            Explore clothing, bags and accessories selected to help you look good and feel confident.
          </p>
          <form onSubmit={handleSearch} className="mx-auto mt-7 flex h-12 max-w-xl overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-purple-300">
            <label htmlFor="product-search" className="sr-only">Search products</label>
            <Search className="my-auto ml-4 h-5 w-5 shrink-0 text-slate-400" />
            <input
              id="product-search"
              type="search"
              value={searchItem}
              onChange={(event) => setSearchItem(event.target.value)}
              placeholder="Search clothing, bags and accessories..."
              className="min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-slate-800 outline-none"
            />
            <button type="submit" className="bg-purple-700 px-6 text-sm font-semibold text-white transition hover:bg-purple-800">
              Search
            </button>
          </form>
          <Link to="/products" className="mt-5 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-500">
            Browse collection
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">Our collection</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">Shop featured products</h2>
              <p className="mt-1 text-sm text-slate-500">Browse the products currently listed in the Folly collection.</p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-purple-700 hover:underline">View collection →</Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
            <Popup />
          </div>
        </section>

        <ApiProducts />
      </main>
    </>
  );
};

export default Home;
