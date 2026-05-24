import { ShoppingCartIcon} from "lucide-react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./SharedContext";
const Nav=({openMenu,setOpenMenu}) =>
{
  const {quantity}= useContext(ProductContext)
  useEffect(() => {
    document.body.style.display = openMenu ? "block" : " ";
  }, [openMenu]);
  return (
    <>
      <div className="w-full fixed transition-all duration-300 top-0 left-0 z-50  dark:text-purple-800 dark:bg-slate-200 text-center p-3 border-b-2 border-purple-500 overflow-hidden">
        <div className="flex items-center gap-5  md:text-xl md:gap-1 md:justify-evenly justify-around">
          <div
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
            title="open menu"
            className="font-mono text-3xl text-purple-600 cursor-pointer md:hidden rounded-[5px] p-0.5 bg-[rgba(255_255_255_0.8)] transition-all hover:bg-slate-400"
          >
            &#9776;
          </div>
          <h2 className="text-amber-500 text-3xl font-semibold font-arial">
            FOLLY
          </h2>

          <nav className="md:flex  md:gap-0 font-semibold hidden md:justify-center gap-x-6 text-[20px] text-center text-purple-400">
            <Link
              to="/"
              className="font-sans  hover:text-purple-700 active:text-purple-700 rounded px-6"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="font-sans hover:text-purple-700  active:text-purple-700 rounded hover:underline px-6"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="font-sans  hover:text-purple-700 active:text-purple-700 rounded px-6"
            >
              About
            </Link>
        
            <Link
              to="/contact"
              className="font-sans hover:text-purple-700  active:text-purple-700 rounded px-6"
            >
              Contact
            </Link>
          </nav>
          <div className="items-center flex justify-center inset-0 w-10 h-10 hover:bg-slate-300 rounded-full ">
            <button
              type="button"
              className="relative items-center flex justify-center font-mono m-auto cursor-pointer transition-all hover:translate-0.5 rounded-full"
            >
              <Link to="/cart">
                <ShoppingCartIcon className="w-6 h-6 items-center" />
              </Link>
              <span className="absolute -top-3 left-3.5 bg-purple-400 rounded-full w-6 h-6 text-slate-700 border-neutral-50 z-50 text-center items-center flex justify-center">
                {quantity}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
