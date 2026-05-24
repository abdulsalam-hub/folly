import {useParams} from "react-router-dom";
import {productData} from "../components/Items";
import {useContext, useState, useEffect} from "react";
import {ProductContext} from "../components/SharedContext";
import ProductNav from "../components/ProductNav";
import ToastCart from "../components/ToastCart";
import {Heart, Star} from "lucide-react";
import Slides from "../components/Slides";
const ProductPage=() =>
{
  const {id} = useParams();
  const {addCart} = useContext(ProductContext);
  const products = productData.find((item) => {
    return item.id === parseInt(id);
  });
  const [wish,setWish]=useState(false)
  const {image, product, price, category} = products;
  const [toast, setToast] = useState(false);
  useEffect(() => {
  setTimeout(() => {
    setToast(false);
  }, 3000);
  },[toast])
  return (
    <>
      {toast && <ToastCart product={product} image={image} price={price} />}
      <ProductNav />

      <section className=" w-full transition-opacity duration-500 items-center h-screen py-auto mt-15 md:mt-25 md:px-7">
        <h1 className=" text-3xl font-[arial,verdana,monospace,tahoma] text-center capitalize p-2 font-bold ">
          product info
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full h-auto px-0 md:px-3 my-5">
          <div className="items-center w-full h-auto">
            <img
              src={image}
              alt="product"
              className="w-full h-90 md:h-110 self-center rounded-lg"
            />
          </div>
          <div className="w-full px-3">
            <div className="">
              <h2 className="text-3xl md:text-3xl font-bold font-[arial,tahoma,verdana] text-center">
                {product}
              </h2>
              <h4 className="my-2 ml-4 font-bold text-xl font-mono">
                ${price}
              </h4>
            </div>
            <div className="flex justify-around gap-x-10 py-2 px-1">
              <p>{category} remaining</p>
              <div className="flex gap-x-2 ">
                <Star className="w-6 h-6 fill-amber-500 border border-transparent text-2xl" />
                <Star className="w-6 h-6 fill-amber-500 border border-transparent text-2xl" />
                <Star className="w-6 h-6 fill-amber-500 border border-transparent text-2xl" />
                <Star className="w-6 h-6 fill-amber-500 border border-transparent text-2xl" />
              </div>
            </div>
            <div className="text-justify md:text-center text-xl font-arial">
              <p className="align-middle p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, ut.Lorem.
              </p>
            </div>
            <div className="items-center flex justify-around  mx-auto py-5">
              <button
                type="button"
                onClick={() => {
                  setToast(!toast);

                  addCart(products, id);
                }}
                className="border capitalize cursor-pointer border-amber-400 w-45 h-10 mx-5 bg-linear-90 from-purple-400 to-amber-400 rounded-xl self-center items-center font-bold text-white"
              >
                add to cart
              </button>
              <p className="items-center flex justify-center p-2 border border-black rounded ">
                <Heart
                  onClick={() => setWish((w) => !w)}
                  className={`w-6 h-6 cursor-pointer  transition-colors duration-300
                  ${wish ? "fill-white " : " fill-red-600"}
                 `}
                />
              </p>
            </div>
          </div>
        </div>
        <Slides />
      </section>
    </>
  );
};
export default ProductPage;
