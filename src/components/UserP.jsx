//import {useEffect, useState} from "react";
//import {Link} from "react-router-dom";

//import {useContext} from "react";
//import {ProductContext} from "./ShopContextProvider";
import {Minus, Plus, PlusIcon, TrashIcon} from "lucide-react";



const UserP = ({item}) => {
 // const {increaseAmount,decreaseAmount,clear,cartQt}=useContext(ProductContext)
  return (
    <>
      <div>
        <div>
          <img src={item.image} alt="" />
          <h2>{item.product}</h2>
          <button>
            <TrashIcon /*onClick={() => clear(item.id)} */ />
          </button>
        </div>
        <div>
          <button /*onClick={()=>increaseAmount(item.id)} */>
            <PlusIcon />{" "}
          </button>
          <button /*onClick={()=>decreaseAmount(item.id)} */>
            <Minus />{" "}
          </button>
        </div>
        <div>{item.price}</div>
        <div>{/*{item.total(item.price * cartQt)} */}</div>
      </div>
      <div>
        {/*   <div
                      key={id}
                      className="flex gap-x-5 border-t border-b my-auto justify-between p-1 md:py-3 items-center md:px-3"
                    >
                      <div className="flex items-center md:gap-x-2">
                        <button
                          className="z-50 rounded-full transition-all duration-200 h-8 w-8 
                       hover:bg-slate-100 hover:border border-slate-400"
                          onClick={() => {
                            del(id);
                            console.log(del("cleared" + id));
                          }}
                        >
                          <Trash className="w-5 h-5 font-black text-purple-300 m-auto cursor-pointer" />
                        </button>
                        <img
                          src={item.image}
                          alt={item.product}
                          className="h-16 w-15 rounded"
                        />
                        <p className="font-bold">{item.product}</p>
                      </div>

                      <div className="flex justify-between gap-x-2 md:gap-x-5 items-center">
                        <button
                          className=" rounded-full font-bold bg-neutral-50 text-center cursor-pointer transition-all h-6 w-6 hover:bg-slate-300"
                          onClick={() => {
                            increaseQuantity(id);
                          }}
                        >
                          <Plus className="h-5 w-5 m-auto" />
                        </button>
                        <span className="text-[16px] md:text-xl">0</span>
                        <button
                          className="rounded-full font-bold bg-neutral-50 text-center cursor-pointer transition-all h-6 w-6 hover:bg-slate-300"
                          onClick={() => {
                            decreaseQuantity(id);
                          }}
                        >
                          {" "}
                          <MinusIcon className="h-5 w-5 font-bold text-center cursor-pointer transition-all m-auto" />
                        </button>
                      </div>
                      <span>{item.price}</span>
                      <span>{total(item.pirice * quantity)}</span>
                    </div> */}{" "}
      </div>
    </>
  );
};
export default UserP;
  