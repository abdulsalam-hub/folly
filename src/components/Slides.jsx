//import {useEffect} from "react";
import '../index.css'
import giftcart from "../assets/productImages/giftcart.jpg";
import girl from "../assets/productImages/girl.jpg";
//import   shop from '../assets/productImages/shop.jpg'
//src\assets\productImages\girl.jpg
const Slides=() =>
{
    const slide = [
      {
        image: {giftcart},
        promoName: "20% discount on all givenchi wears",
        promo: " one of our best fiesta promo."
      },
      {
        image: girl,
        promoName: "offers on all our new products",
        promo: "buy 3 take one free"
      },
      {
        image:'assets/productImages/shop.jpg',
        promoName: "exclusive friday sale is coming",
        promo: " the black friday runoff."
      }
    ];

   

    return (
      <>
        <div className="z-50 max-w-[350px] items-center mx-auto overflow-hidden  bg-[rgba(255,255,255,0.6)] p-3 flex justify-between my-5 ">
          <div className="flex justify-between gap-x-5 ">
            {slide.map((run,id) => {
              return (
                <div
                  key={id}
                  className={`flex flex-col px-5 w-[320px] h-full mx-auto border rounded-lg shadow-xl transition-transform duration-300 bg-cover bg-no-repeat bg-fixed bg-[url(${run.image})] runner`}
                  style={{
                backgroundImage:run.image
              }}  >
                  <h1 className="text-center font-bold text-xl text-red-600">
                    {run.promoName}
                  </h1>
                  <p className="text-center my-3 mx-auto text-black font-semibold ">
                    {run.promo}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}; export default Slides