import { createContext, useState, ReactNode, useEffect } from "react";

import { CartProductProps } from "../components/CartProduct";
import { get } from "../services/ebook";

interface CartContextInterface {
  products: CartProductProps[];
  cartCount: number;
  add: (id: number) => Promise<Boolean>;
  remove: (id: number) => void;
  getTotalCost: () => number;
}

const defaultContextValue: CartContextInterface = {
  products: [],
  cartCount: 0,
  add: async () => false,
  remove: () => {},
  getTotalCost: () => 0,
};

export const CartContext =
  createContext<CartContextInterface>(defaultContextValue);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartProductProps[]>([]);

  useEffect(() => {
    const newcartCount = cartProducts.reduce(
      (currentCount) => currentCount + 1,
      0
    );
    setcartCount(newcartCount);
  }, [cartProducts]);

  const [cartCount, setcartCount] = useState(0);

  const add = async (id: number): Promise<boolean> => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);
    if (!!product) {
      return false;
    } else {
      const productToAdd = await get(id);
      if (productToAdd) {
        const newProduct: CartProductProps = {
          id: productToAdd.id,
          price: productToAdd.price,
          title: productToAdd.title,
          image: productToAdd.image,
        };
        setCartProducts([...cartProducts, newProduct]);
      }
      return true;
    }
  };

  const remove = (id: number) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  const getTotalCost = () => {
    return cartProducts.reduce((currentCost, product) => {
      return currentCost + product.price;
    }, 0);
  };

  const contextValue = {
    products: cartProducts,
    cartCount,
    add,
    remove,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
