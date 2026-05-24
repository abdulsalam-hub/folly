import {ProductContext} from "./SharedContext";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ArrowLeft, ShoppingCartIcon} from "lucide-react";
const ProductNav = () => {
  const {quantity} = useContext(ProductContext);
  return (
    <>
      <div className="items-center flex justify-between md:justify-around text-center fixed top-0 left-0 w-full p-2 border-b border-amber-200 bg-slate-200">
        <Link
          to="/products"
          className="items-center flex justify-center text-center rounded-full text-3xl h-8 w-8 font-light hover:bg-slate-100  hover:shadow-xl"
        >
          <ArrowLeft className="h-6 w-6 bg-transparent " />
        </Link>
        <h1 className="font-serif text-center text-3xl font-bold   text-purple-400">
          folly
        </h1>
        <Link
          to="/cart"
          className="items-center flex justify-center text-center  relative h-8 w-8 rounded-full hover:bg-slate-100 hover:shadow-xl "
        >
          <div className="rounded-full hover:translate-0.5 hover:shadow-xl text-amber-500 transition-all">
            <ShoppingCartIcon className="w-6 h-6 bg-transparent" />
          </div>
          <span
            className="items-center flex justify-center absolute -top-1.5 left-4.5 text-center text-xs md:text-sm font-semibold h-5 w-5 rounded-full
             bg-purple-500"
          >
            {parseFloat(quantity)}
          </span>
        </Link>
      </div>
    </>
  );
};
export default ProductNav;
