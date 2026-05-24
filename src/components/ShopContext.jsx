import {useState, useEffect} from "react";
import { ProductContext } from "./SharedContext";
const ShopContext=function({children})
{
  const [cart,setCart]=useState(() =>
  {
    const savedCart=window.localStorage.getItem("cart");
  return  savedCart ? JSON.parse(savedCart) : []
  });
  const [quantity,setQuantity]=useState(0);
  const [total,setTotal]=useState(0);
  useEffect(() =>
  {
window.localStorage.setItem("cart",JSON.stringify(cart))
    
},[cart])
  useEffect(() =>
  {        
        const total=cart.reduce((acc,sum) =>
      {
        const isNo=parseFloat(sum.price);
        if (isNaN(isNo)) {
          return acc;
        }
        return acc +  isNo * sum.amount;

     
      },0);
 
      setTotal(total); 
     
    
  },[cart]);
  useEffect(() =>
  {
        if(cart){
  const amount=cart.reduce((acc,sum) =>
      {
        return acc + sum.amount;
      },0)
          setQuantity(amount);
      
    }
}
  ,[cart]);
  const addCart=(product,id) =>
  {
    const newItem={...product,amount: 1};
    const cartItem=cart.find((item) =>
    {
      return item.id===id;
    });
    if(cartItem) {
      const newCart=[cartItem].map((item) =>
      {
        if(item.id===id) {
          return {...item,amount: cartItem.amount + 1};
        } else {return item}
      });
      setCart(newCart);
    }
    else {
      setCart([...cart,newItem]);
    }
  }

  const clearall = () => {
    setCart([]);
  };
  const del = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id===id;
    });
    addCart(cartItem, id);
  };
  const decreaseQuantity = (id)=>{
          const cartItem=  cart.find((item)=>{
       return item.id === id
        }) 
        if(cartItem){
          const newCart=[cartItem].map((item) =>
          {
            if(item.id===id) {
              return {...item,amount: cartItem.amount-1};
            } else {
              return item;
            }
          }); setCart(newCart)
          }
          else{
            if(cartItem.amount < 2){
            del(id)
            }}
            }

  return (
    <>
      <ProductContext.Provider
        value={{
          addCart,
          cart,
          total,
          quantity,
          del,
          increaseQuantity,
          decreaseQuantity,
          clearall
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  )
};
export default ShopContext;
