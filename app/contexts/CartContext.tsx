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
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<{ quantity: number; productId: string }[]>(
    [],
  );

  useEffect(() => {
    async function getCartItem() {
      // temporary
      const loggedInUser = false;
      if (!loggedInUser) {
        // Get cart from localStorage
        const cartStr = window.localStorage.getItem("cart");
        const cart: { productId: string; quantity: number }[] = cartStr
          ? JSON.parse(cartStr)
          : [];

        setCart(cart);
      } else {
        // Get cart from DB
        // Later we get cartQuantity on DB
      }
    }
    getCartItem();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
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
