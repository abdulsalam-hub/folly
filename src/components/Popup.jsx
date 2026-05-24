
import {productData} from "./Items";

import {useState} from "react";
import ProductBox from "./ProductBox";
const Popup = () => {
  const [color, setColor] = useState(false);

  const wish = (id) => {
    const love = productData.filter((item) => {
      return item.id === id;
    });
    if (love) {
      return setColor((color) => !color);
    }
  };

  {
    return (
      <>
        {productData.map((stock,id) =>
        {
        const pro = productData.find(item=>(item.id === stock.id));
          return(        
          <ProductBox
            key={id}
            id={stock.id}
            product={stock.product}
            price={stock.price}
            category={stock.category}
            isStocked={stock.isStocked}
            image={stock.image}
            color={color}
              wish={wish}
              pro={pro}
          />
        )})}
      </>
    );
  }
};
export default Popup;
