import {useState, useEffect, } from "react";
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
        return acc + isNo * sum.amount;

     
      },0);
 
 setTotal(total); 
     
    
  },[cart]);

  useEffect(() => {
    if (cart.length > 0) {
      const amount = cart.reduce((acc, sum) => {
        return acc + sum.amount;
      }, 0);
setQuantity(amount);
    } else {
      return;
    }
  },[cart]);
  

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
        if(item) {
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
    window.localStorage.removeItem("cart");
  
  };
  const del = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  
  };
  const increaseQuantity = (id) => {
    const cartItem=cart.map((item) =>
    {
   return item.id === id?{ ...item,amount:item.amount + 1} : item
  })

    setCart(cartItem);
  };
  const decreaseQuantity=(id) =>
  {
       
    const cartItem=cart.map((item) =>
    {
      if(item.id===id) {
          if (item.amount <= 0) {
            del(id);
          }
        return {...item,amount: item.amount-1};
   
      } else {
         if (item.amount <= 0) {
           del(id);
         }
        return item;
        
      }
    
    });
    setCart(cartItem)
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
