"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { addToCart } from "@/lib/helpers/addToCart";
import { useCart } from "@/app/_contexts/CartContext";
import { isLoggedInUser } from "@/app/_actions/users/isLoggedInUser";
import { addToDBCart } from "@/app/_actions/shoppingCart/addToDBCart";

type AddToCardProps = {
  productId: string;
};

function AddToCard({ productId }: AddToCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { setCart, refreshDBCart } = useCart();

  async function handleClickCart() {
    const loggedInUser = await isLoggedInUser();
    if (!loggedInUser) {
      addToCart(productId, quantity);
      const cartStr = window.localStorage.getItem("cart");
      const cart = cartStr ? JSON.parse(cartStr) : [];
      setCart(cart);
    } else {
      await addToDBCart({ quantity, productId });
      refreshDBCart();
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-30 items-center justify-around bg-[#f1f1f1]">
        <button
          onClick={() =>
            setQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity))
          }
          className="cursor-pointer text-[20px] font-bold tracking-[1px] text-black opacity-25 hover:text-[#d87d4a] hover:opacity-100 active:text-[#d87d4a] active:opacity-100"
        >
          -
        </button>
        <span className="text-[13px] font-bold tracking-[1px]">{quantity}</span>
        <button
          onClick={() => setQuantity((quantity) => quantity + 1)}
          className="cursor-pointer text-[20px] font-bold tracking-[1px] text-black opacity-25 hover:text-[#d87d4a] hover:opacity-100 active:text-[#d87d4a] active:opacity-100"
        >
          +
        </button>
      </div>

      <Button onClick={handleClickCart} size={"lg"} className="font-bold">
        ADD TO CART
      </Button>
    </div>
  );
}

export default AddToCard;
