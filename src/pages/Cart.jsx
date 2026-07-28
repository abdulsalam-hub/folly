import {useContext} from "react";
import {ProductContext} from "../components/SharedContext";
import {Link} from "react-router-dom";

import {
  ArrowLeft,

  FormIcon,

  Trash2Icon
} from "lucide-react";
import Footer from "../components/Footer";
import CartBox from "../components/CartBox";
import {Pro} from "../components/UserLink";
const Cart = () => {
    
  const {cart,
    total,
    quantity,
    clearall} = useContext(ProductContext);
   
  return (
    <>
      <div className=" text-center transition-all duration-300 ease-linear md:overflow-hidden">
        <div className=" bg-slate-100 items-center flex justify-around relative top-0 left-0 w-full  p-2 border-b border-amber-200">
          <Link
            to="/products"
            className="items-center flex justify-center h-8 w-8 rounded-full text-3xl  bg-transparent hover:bg-slate-300 hover:shadow-xl"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-serif text-center text-3xl font-bold   text-purple-400">
            folly
          </h1>
          <div className="flex flex-col max-w-10 items-center">
            <Link
              to="/contact"
              className="rounded-full bg-transparent hover:bg-slate-100 hover:shadow-xl text-amber-500 transition-all"
            >
              <FormIcon className="w-6 h-6" />
            </Link>
            <span className="text-xs md:text-sm font-semibold">contact</span>
          </div>
        </div>
        <div className="md:flex w-full md:justify-between md:p-10 py-4 px-1">
          <div className="border rounded p-2 w-full shadow-2xl mx-0  md:w-[60%] md:mx-5">
            <div className="flex justify-evenly text-xl gap-5 md:py-2 border-b md:border-b-1.5 py-2  md:font-bold w-full">
              <h1 className=" font-[tahoma,sans-serif] hover:font-bold">
                SHOPPING CART
              </h1>
              <p className=" font-[tahoma,sans-serif]">ITEMS ({quantity})</p>
              <button
                className="items-center flex justify-center rounded-full bg-neutral-100/50 hover:bg-slate-200 h-8 w-8 
                "
                onClick={() => clearall()}
              >
                <Trash2Icon className="w-5 h-5 cursor-pointer" />
              </button>
            </div>
            <div className="flex justify-around md:justify-between   py-3 capitalize md:font-bold text-xl md:gap-x-5 gap-x-3 ">
              <span className="text-center "> products</span>
              <span className="text-center ">quantity</span>
              <span>price($)</span>
              <span>total</span>
            </div>
            <div className="w-full overflow-y-auto">
              {cart.length > 0 ? (
                cart.map((item) => {
                  return <CartBox item={item} key={item} />;
                })
              ) : (
                <h1 className="text-center text-2xl font-bold font-[consolas,courier] m-auto p-2 w-full border-t">
                  No added product to cart
                </h1>
              )}
            </div>
          </div>
          <div className="flex-1 md:w-[40%] mt-7 gap-10 md:m-auto md:mt-auto items-center">
            <div className="border p-2 text-justify">
              <h1 className="font-bold md:text-xl">ITEM SUMMARY</h1>
              <div className="flex justify-between px-5">
                <h4 className="font-medium text-xl">items</h4>
                <span className="font-bold">{quantity}</span>
              </div>
              <div className="flex justify-between px-5">
                <h4 className="font-medium text-xl">delivery</h4>
                <span className="font-bold">free</span>
              </div>
              <div className="flex justify-between px-5">
                <h4 className="font-medium text-xl">Price</h4>
                <span className="font-bold">${total}</span>
              </div>
              <div className="flex justify-between px-5">
                <h4 className="font-medium text-xl">total cost</h4>
                <span className="font-bold">${total}</span>
              </div>
              <div className=" self-center flex justify-center hover:font-extrabold my-2  hover:translate-x-2  ">
                <button
                  className="text-bold border-none rounded-[90px] 
                px-8 py-3 bg-[#d147fb] text-bold text-sm transition-all cursor-pointer shadow-sm hover:shadow-xs duration-300 "
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pro/>
      <Footer />
    </>
  );
};
export default Cart;
