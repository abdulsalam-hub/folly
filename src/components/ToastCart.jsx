import '../index.css'
const ToastCart=({image,product,price}) =>
{
  return (
    <>
     
        <div className="max-w-full w-[300px] left-[20%] top-[20%]  md:left-[40%] items-center h-80 rounded-xl  mx-auto absolute transition-transform border p-2 duration-800 shadow-xl bg-white text-center drop">
          <h1 className="mx-auto text-[26px] inline my-3 font-[monospace,arial] font-bold">
            your product is added to cart
          </h1>
          <img
            src={image}
            alt={`image of ${product}`}
            className="w-full h-22 mx-3 self-center"
          />
          <div className="items-center flex justify-around my-3 gap-x-2">
            <p className="font-bold text-[24px]">{product}</p>
            <span className="font-bold text-xl">${price}</span>
          </div>
          <span className="text-xl text-purple-300 my-2 mx-auto">
            go to cart to ckeck...
          </span>
        </div>
      
    </>
  );
};
export default ToastCart;
