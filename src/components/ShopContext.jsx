import { useEffect, useMemo, useState } from "react";
import { ProductContext } from "./SharedContext";

const CART_STORAGE_KEY = "folly-market-cart";

const readCart = () => {
  try {
    const savedCart =
      window.localStorage.getItem(CART_STORAGE_KEY) ||
      window.localStorage.getItem("cart");
    const parsed = savedCart ? JSON.parse(savedCart) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && item.id !== undefined && Number.isFinite(Number(item.price)))
      .map((item) => ({ ...item, amount: Math.max(1, Number(item.amount) || 1) }));
  } catch {
    return [];
  }
};

const ShopContext = ({ children }) => {
  const [cart, setCart] = useState(readCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.warn("Folly Market could not save the cart locally.", error);
    }
  }, [cart]);

  const quantity = useMemo(
    () => cart.reduce((sum, item) => sum + Math.max(0, Number(item.amount) || 0), 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.amount) || 0), 0),
    [cart]
  );

  const addCart = (product, id = product?.id) => {
    if (!product || id === undefined || !Number.isFinite(Number(product.price))) return;
    setCart((current) => {
      const existing = current.find((item) => String(item.id) === String(id));
      if (existing) {
        return current.map((item) =>
          String(item.id) === String(id)
            ? { ...item, amount: (Number(item.amount) || 0) + 1 }
            : item
        );
      }
      return [...current, { ...product, id, amount: 1 }];
    });
  };

  const clearall = () => setCart([]);
  const del = (id) =>
    setCart((current) => current.filter((item) => String(item.id) !== String(id)));

  const increaseQuantity = (id) =>
    setCart((current) =>
      current.map((item) =>
        String(item.id) === String(id)
          ? { ...item, amount: (Number(item.amount) || 0) + 1 }
          : item
      )
    );

  const decreaseQuantity = (id) =>
    setCart((current) =>
      current
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, amount: (Number(item.amount) || 1) - 1 }
            : item
        )
        .filter((item) => item.amount > 0)
    );

  return (
    <ProductContext.Provider
      value={{ addCart, cart, total, quantity, del, increaseQuantity, decreaseQuantity, clearall }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ShopContext;
