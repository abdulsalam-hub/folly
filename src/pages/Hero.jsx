import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import yel from "../assets/productImages/yelback.jpg";

const Hero = () => {
  return (
    <>
      <NavBar />
      <main className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-slate-950 pt-20">
        <img
          src={yel}
          alt="Fashion inspiration from the Folly Market collection"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/15" />
        <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
              Everyday fashion • Your style
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl">
              Dress well.
              <span className="block text-amber-300">Feel unforgettable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
              Discover clothing, bags and accessories selected to bring more confidence and character to your everyday look.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-300">
                Shop the collection
              </Link>
              <Link to="/about" className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Discover Folly
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <span>Clothing</span><span>Bags</span><span>Accessories</span><span>Personal style</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
