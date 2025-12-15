"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { LocalCartType } from "@/lib/schemas/cartType";

type CartContextType = {
  cart: {
    quantity: number;
    productId: string;
  }[];
  setCart: Dispatch<
    SetStateAction<
      {
        quantity: number;
        productId: string;
      }[]
    >
  >;
  dbCartVersion: number;
  refreshDBCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<LocalCartType>([]);
  const [dbCartVersion, setDbCartVersion] = useState(0);

  function refreshDBCart() {
    setDbCartVersion((v) => v + 1);
  }

  useEffect(() => {
    const cartStr = window.localStorage.getItem("cart");
    const cart: LocalCartType = cartStr ? JSON.parse(cartStr) : [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(cart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        dbCartVersion,
        refreshDBCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart context was used outside of cart provider");
  }
  return context;
}

export { CartProvider, useCart };
