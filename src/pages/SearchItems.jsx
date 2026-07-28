import {
  ArrowLeft,
  SearchAlert,
  TriangleAlert,
  ShoppingBasket,Check, Heart, Star,ShoppingCart
} from "lucide-react";

import {useEffect, useState,useContext,useRef} from "react";
import {productData} from "../components/Items";
import {Link} from "react-router-dom";
import { ProductContext } from "../components/SharedContext";
const SearchItems = () => {
  const [color, setColor] = useState(false);
  const [produt, setProdut] = useState([]);
  const [search, setsearch] = useState("");
   const formRef=useRef(null)
  const {addCart}=useContext(ProductContext);
  
  const products=productData.filter((item) =>
  {
    return item.product.includes(search);
  });
  const handleChange = (e) => {

    setsearch(
      e.target.value
    );
 const out = setTimeout(() => {
   return setProdut(products);
 }, 300);
 return () => clearTimeout(out); 
  };
 
  const handleSubmit=(e) =>
  {
    e.preventDefault();
  
  }
  
 
  useEffect(() =>
  {
    formRef.current=formRef.current.focus()
  },[])
  return (
    <>
      <div className="  transition-transform duration-300 bg-[rgba(255,255,255,0.01)] text-white">
        <div className=" w-full flex fixed top-0 left-0  justify-around items-center h-10 bg-slate-100 dark:slate-200 p-2 border-b border-b-amber-200">
          <button className="w-8 h-8 rounded-full items-center flex justify-center hover:bg-slate-200">
            <Link to="/products">
              <ArrowLeft className="h-5 w-5 text-xl text-black" />
            </Link>
          </button>
          <form
            onSubmit={handleSubmit}
            action=""
            className="md:w-90 w-80 relative flex items-center justify-center overflow-hidden  h-9 border border-slate-300 rounded-lg transition-all duration-300"
          >
            <input
              type="search"
              name=""
              id="seachitems"
              ref={formRef}
              required
              autoCorrect="true"
              value={search}
              autoFocus
              onChange={handleChange}
              className=" w-full  border-none h-full p-1 indent-1  caret-fuchsia-500 outline-0  text-slate-700"
            />
            <button
              type="submit"
              value="products"
              className="overflow-hidden w-[30%] rounded-r-lg h-full absolute right-0 -top-5 cursor-pointer font-bold capitalize  bg-linear-to-tr from-amber-400 to-fuchsia-500"
            >
              {" "}
              search
            </button>
          </form>
        </div>
        <div className="h-screen w-full px-10 my-25">
          {produt.length >0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {produt.map((stock, id) => {
                const pro = productData.find((item) => {
                  item.id === id;
                });
                return (
                  <div key={id} className="my-2 h-auto max-h-90 min-h-60   border hover:shadow-xl overflow-hidden w-auto border-amber-600 rounded-lg hover:translate-0.5 transition-all">
                    <Link to={`/folly/${id + 1}`}>
                    
                      <img
                        src={stock.image}
                        alt={stock.product}
                        loading="lazy"
                        title={`more about ${stock.product} & documentation`}
                        className="w-full h-[51%] backdrop:brightness-50 cursor-pointer rounded hover:scale-105 object-center object-cover"
                      />
                    </Link>

                    <div className="w-full h-[31%] px-2 text-black" >
                      <div className=" w-full py-2 ">
                        <h4 className="font-bold text-center font-sans text-[clamp(1.3rem,2vw,1.5rem)] capitalize">
                          {stock.product}
                        </h4>
                      </div>
                      <div className="flex justify-between  items-center">
                        <h4 className="font-semibold font-sans text-[18px] text-black-600">
                          {stock.price} 
                        </h4>

                        <span>
                          <Heart
                            name="heart"
                            className={`w-5 h-5 cursor-pointer  text-xm text-amber-500 ${
                              color && "fill-red-500"
                            }`}
                            onClick={() => setColor(!color)}
                          />
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xm">
                        <h4
                          className={`text-black font-bold ${
                            stock.isStocked ? "text-purple-500" : "text-red-600"
                          }`}
                        >
                          {stock.category}
                          <span className="text-[10px] font-thin text-slate-500">
                            {" "}
                            left
                          </span>
                        </h4>
                        <span className="font-semibold font-sans flex gap-x-2">
                          <Star className="w-3 h-3 text-amber-500 border-amber-600 fill-amber-400" />
                          <Star className="w-3 h-3  text-amber-500 border-amber-600 fill-amber-400" />
                          <Star className="w-3 h-3  text-amber-500 border-amber-600 fill-amber-400" />
                          <Star className="w-3 h-3  text-amber-500 border-amber-600 fill-amber-400" />
                        </span>
                      </div>
                    </div>
                    <button
                      title="add to cart"
                      onClick={() => addCart(pro, id)}
                      className="bg-purple-600  w-[90%] flex items-center   mx-auto cursor-pointer text-xs justify-center mt-3.5 py-2 font-bold text-amber-500  text-center  font-[sans-serif,tahoma] transition-all  rounded-[5px] hover:scale-102"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2 font-bold" />{" "}
                      <span>add to cart</span>
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-screen bg-transparent text-center flex justify-center items-center flex-col   opacity-35">
              <SearchAlert className="h-10 w-10 text-purple-400 my-5 items-center mx-auto" />
              <h2 className="text-xl w-full max-w-150 text-center mx-auto font-extrabold font-stretch-50% font-[arial,verdana,tahoma,sans-serif] capitalize text-black">
                no search product result found
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchItems;
