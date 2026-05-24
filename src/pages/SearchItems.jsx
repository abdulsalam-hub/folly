import {ArrowLeft, SearchAlert, TriangleAlert} from "lucide-react";
import {Check, Heart, Star} from "lucide-react";
import {useState} from "react";
import {productData} from "../components/Items";
import {Link} from "react-router-dom";
const SearchItems = () => {
  const [color, setColor] = useState(false);
  const [produt, setProdut] = useState(null);
  const [search, setsearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setsearch(
      e.target.value
    );
    console.log(search)
    const products = productData.filter((item) => {
      return item.product.startsWith(search,0);
    });
 
 setProdut(products)  };
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
            onSubmit={handleChange}
            action=""
            className="md:w-90 w-80 relative flex items-center justify-center overflow-hidden  h-9 border border-slate-300 rounded-lg transition-all duration-300"
          >
            <input
              type="search"
              name=""
              id="seachitems"
              required
              autoCorrect="true"
              value={search}
              autoFocus
              onChange={handleChange}
              className=" w-full  border-none h-full p-1 indent-1  caret-fuchsia-500 outline-0  text-slate-700"
            />
        <button type="submit"  value="products" className="overflow-hidden w-[30%] rounded-r-lg h-full absolute right-0 -top-5 cursor-pointer font-bold capitalize  bg-linear-to-tr from-amber-400 to-fuchsia-500"> search</button>
          </form>
        </div>
        <div className="flex flex-wrap mx-auto py-20  items-center justify-around">
          {produt ? (
            produt.map((stock) => {
              return (
                <div
                  key={stock.id}
                  className="w-50 h-70 overflow-hidden border hover:shadow-xl border-amber-600 rounded-[10px] hover:translate-0.5 transition-all m-4"
                >
                  <img
                    src={stock.image}
                    alt=""
                    className="w-full h-[51%] self-center bg-?{`${load}`} rounded hover:scale-102"
                  />
                  <div className="w-full h-[30%] flex flex-col px-2">
                    <div className="flex justify-center align-center">
                      <h4 className="font-semibold text-black font-sans text-xl">
                        {stock.product}
                      </h4>
                    </div>
                    <div className="flex justify-between text-xm">
                      <h4 className="font-semibold text-black font-sans text-xm text-black-600">
                        {stock.price}
                      </h4>

                      <span>
                        <Heart
                          name="heart"
                          className={`w-5 h-5 cursor-pointer ${
                            color ? "text-amber-500" : "fill-purple-500"
                          }`}
                          onClick={() => {
                            const love = productData.filter((item) => {
                              return item.id === stock.id;
                            });
                            if (love) {
                              setColor((color) => !color);
                            }
                            console.log(love, color);
                          }}
                        />
                      </span>
                    </div>

                    <div className="flex justify-between text-xm">
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
                  <Link
                    to={`/folly/${stock.id}`}
                    className="bg-purple-600 flex justify-center capitalize self-center w-[90%] mx-auto text-xm mt-3.5 font-bold text-amber-500  text-center  font-[sans-serif,tahoma] transition-all  rounded-[5px] hover:scale-102"
                  >
                    <Check className="w-5 h-5 text-white font-bold" /> ckeck
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="w-full h-screen bg-transparent items-center   flex-col justify-center text-center opacity-35">
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
