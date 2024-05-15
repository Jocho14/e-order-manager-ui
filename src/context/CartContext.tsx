import { createContext, useState, ReactNode, useEffect } from "react";

import data from "../utils/data";

interface CartProduct {
  id: number;
  price: number;
  image: string;
  name: string;
}

interface CartContextInterface {
  items: CartProduct[];
  productsCount: number;
  addOneToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
}

const defaultContextValue: CartContextInterface = {
  items: [],
  productsCount: 0,
  addOneToCart: (id: number) => {},
  removeOneFromCart: (id: number) => {},
  deleteFromCart: (id: number) => {},
  getTotalCost: () => 0,
};

export const CartContext =
  createContext<CartContextInterface>(defaultContextValue);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const newProductsCount = cartProducts.reduce((sum) => sum + 1, 0);
    setProductsCount(newProductsCount);
  }, [cartProducts]);

  const [productsCount, setProductsCount] = useState(0);

  function addOneToCart(id: number) {
    const existingProduct = cartProducts.find((product) => product.id === id);
    if (existingProduct) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: 1 } : product
        )
      );
    } else {
      const productToAdd = data.find((product) => product.id === id);
      if (productToAdd) {
        const newProduct: CartProduct = {
          id: productToAdd.id,
          price: 20,
          name: productToAdd.title,
          image: productToAdd.imageUrl,
        };
        setCartProducts([...cartProducts, newProduct]);
      }
    }
  }

  function removeOneFromCart(id: number) {
    setCartProducts(
      cartProducts.reduce((acc, product) => {
        if (product.id === id) {
        } else {
          acc.push(product);
        }
        return acc;
      }, [] as CartProduct[])
    );
  }

  function deleteFromCart(id: number) {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  }

  function getTotalCost() {
    return cartProducts.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

  const contextValue = {
    items: cartProducts,
    productsCount,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
