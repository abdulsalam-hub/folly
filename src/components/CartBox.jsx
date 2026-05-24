import {useContext} from "react";
import {ProductContext} from "./SharedContext";
import {

  MinusIcon,
  Plus,
  Trash,

} from "lucide-react";

const CartBox = ({item}) => {
  const {del, increaseQuantity, decreaseQuantity} = useContext(ProductContext);

  const {id, image, product, price, amount} = item;
  return (
    <>
      <div className="flex gap-x-2 border-t border-b my-auto justify-between p-[3px,3px,3px,0px] md:py-3 items-center md:px-3">
        <div className="flex items-center gap-0 md:gap-x-1">
          <button
            className="z-50 flex justify-center cursor-pointer rounded-full transition-all duration-500 h-6 w-6
                       hover:bg-slate-200 hover:border-1/2 border-slate-300 p-auto items-center"
            onClick={() => del(id)}
          >
            <Trash className="w-4 h-4 font-black px-auto text-slate-600" />
          </button>
          <img src={image} alt={item.product} className="h-16 w-15 rounded" />
          <p className="font-bold text-[10px] max-w-3">{product}</p>
        </div>

        <div className="flex gap-x-4 md:gap-x-6 items-center">
          <button
            className=" rounded-full font-bold bg-neutral-300 text-center cursor-pointer hover:bg-slate-100 transition-all h-6 w-5"
            onClick={() => {
              increaseQuantity(id);
            }}
          >
            <Plus className="h-5 w-5" />
          </button>
          <span className="text-[16px] md:text-xl">{parseInt(amount)}</span>
          <button
            className="rounded-full font-bold bg-neutral-300 h-6 w-6 text-center cursor-pointer  hover:bg-slate-100  transition-all"
            onClick={() => {
              decreaseQuantity(id);
            }}
          >
            {" "}
            <MinusIcon className="h-5 w-5 rounded-full font-bold mx-auto flex  cursor-pointer transition-all" />
          </button>
        </div>
        <span>${price}</span>
        <span>$ {parseInt(amount * price)}</span>
      </div>
    </>
  );
};
export default CartBox;
