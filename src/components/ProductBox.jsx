import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import {ShoppingBasket,Heart,Star} from "lucide-react";
import {ProductContext} from "./SharedContext";

const ProductBox = ({id,image,product,price,category,isStocked,pro,color,wish}) => {
  
  const {addCart} =useContext(ProductContext);
    return (
    <div
      
      className="my-2 h-70 overflow-hidden border hover:shadow-xl border-amber-600 rounded-lg hover:translate-0.5 transition-all"
    >
      <Link to={`/folly/${id}`}>
        {" "}
        <img
          src={image}
          alt={product}
          loading="lazy"
          className="w-full h-[51%] rounded hover:scale-105 object-center object-cover"
        />
      </Link>

      <div className="w-full h-[32%] px-2">
        <div className=" w-full ">
          <h4 className="font-bold block font-sans text-[17px] capitalize">
            {product}
          </h4>
        </div>
        <div className="flex justify-between text-xm">
          <h4 className="font-semibold font-sans text-[15px] text-black-600">
            ${price}
          </h4>

          <span>
            <Heart
              name="heart"
              className={`w-5 h-5 cursor-pointer text-amber-500 ${
                color && "fill-red-500"
              }`}
              onClick={() => wish(id)}
            />
          </span>
        </div>

        <div className="flex justify-between items-center text-xm">
          <h4
            className={`text-black font-bold ${
              isStocked ? "text-purple-500" : "text-red-600"
            }`}
          >
            {category}
            <span className="text-[10px] font-thin text-slate-500"> left</span>
          </h4>
          <span className="font-semibold font-sans flex gap-x-2">
            <Star className="w-3 h-3 text-amber-500 border-amber-600 fill-amber-400" />
            <Star className="w-3 h-3  text-amber-500 border-amber-600 fill-amber-400" />
            <Star className="w-3 h-3  text-amber-500 border-amber-600 fill-amber-400" />
            <Star className="w-3 h-3  text-amber-500 border-amber-600 fill-amber-400" />
          </span>
        </div>
      </div>
      <button title="add to cart"  onClick={()=>addCart(pro,id)} className="bg-purple-600 flex justify-center capitalize  self-center w-[90%] mx-auto cursor-pointer text-xm mt-3.5 font-bold text-amber-500  text-center  font-[sans-serif,tahoma] transition-all  rounded-[5px] hover:scale-102">
        <ShoppingBasket className="w-5 h-5 mr-2 font-bold" /> add to cart
      </button>
    </div>
  );
}

export default ProductBox