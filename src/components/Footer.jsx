import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 md:grid-cols-3 md:px-8">
        <div>
          <Link to="/" className="text-2xl font-black tracking-wide text-white">FOLLY<span className="text-amber-400">.</span></Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">Fashion, clothing and accessories for your everyday style.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <nav className="mt-3 flex flex-col items-start gap-2 text-sm">
            <Link to="/products" className="hover:text-amber-300">Shop collection</Link>
            <Link to="/about" className="hover:text-amber-300">About Folly</Link>
            <Link to="/contact" className="hover:text-amber-300">Contact</Link>
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Need help?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">For product enquiries, bulk purchases and order questions, reach out to our team.</p>
          <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-300 hover:text-amber-200">Get in touch <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folly Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
