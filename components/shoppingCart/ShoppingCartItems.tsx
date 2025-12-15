import Image from "next/image";
import { ProductCartItem } from "./ShoppingCart";
import { isLoggedInUser } from "@/app/_actions/users/isLoggedInUser";
import { addToCart } from "@/lib/helpers/addToCart";
import { useCart } from "@/app/_contexts/CartContext";
import { addToDBCart } from "@/app/_actions/shoppingCart/addToDBCart";
import { useState } from "react";
import { REGISTRATION_DISCOUNT } from "@/lib/const";

function ShoppingCartItems({
  shoppingCartItem,
}: {
  shoppingCartItem: ProductCartItem;
}) {
  const [quantity, setQuantity] = useState(shoppingCartItem.quantity);

  const { setCart, refreshDBCart } = useCart();

  async function handleAddQuantity() {
    const loggedInUser = await isLoggedInUser();
    if (!loggedInUser) {
      addToCart(shoppingCartItem._id, 1);
      const cartStr = window.localStorage.getItem("cart");
      const cart = cartStr ? JSON.parse(cartStr) : [];
      setCart(cart);
      setQuantity((quantity) => quantity + 1);
    } else {
      const productId = shoppingCartItem._id;
      setQuantity((quantity) => quantity + 1);
      await addToDBCart({
        quantity: 1,
        productId,
        discount: REGISTRATION_DISCOUNT,
      });
      refreshDBCart();
    }
  }

  async function handleDecreaseQuantity() {
    const loggedInUser = await isLoggedInUser();
    if (!loggedInUser) {
      addToCart(shoppingCartItem._id, -1);
      const cartStr = window.localStorage.getItem("cart");
      const cart = cartStr ? JSON.parse(cartStr) : [];
      setCart(cart);
      setQuantity((quantity) => (quantity <= 0 ? quantity : quantity - 1));
    } else {
      const productId = shoppingCartItem._id;
      setQuantity((quantity) => (quantity <= 0 ? quantity : quantity - 1));
      await addToDBCart({
        quantity: -1,
        productId,
        discount: REGISTRATION_DISCOUNT,
      });
      refreshDBCart();
    }
  }

  if (shoppingCartItem.quantity <= 0) return null;
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <Image
          src={shoppingCartItem.categoryImage.mobile}
          alt={`${shoppingCartItem.name} image`}
          width={64}
          height={64}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <p className="text-[15px] leading-[25px] font-bold">
            {shoppingCartItem.name.split(" ").slice(0, -1).join(" ")}
          </p>
          <p
            className={`bold text-[14px] leading-[25px] text-black opacity-50 ${shoppingCartItem.discount ? "line-through" : ""}`}
          >
            {`$ ${shoppingCartItem.price.toLocaleString()}`}
          </p>
          {shoppingCartItem.discount && (
            <p className="bold text-[14px] leading-[25px] text-black opacity-50">
              {` $ ${(shoppingCartItem.price * (1 - (shoppingCartItem.discount ?? 0))).toFixed(2)}`}
            </p>
          )}
        </div>
      </div>

      <div className="flex h-8 w-24 items-center justify-around bg-[#f1f1f1]">
        <button
          onClick={handleDecreaseQuantity}
          className="cursor-pointer text-[20px] font-bold tracking-[1px] text-black opacity-25 hover:text-[#d87d4a] hover:opacity-100 active:text-[#d87d4a] active:opacity-100"
        >
          -
        </button>
        <span className="text-[13px] font-bold tracking-[1px]">{quantity}</span>
        <button
          onClick={handleAddQuantity}
          className="cursor-pointer text-[20px] font-bold tracking-[1px] text-black opacity-25 hover:text-[#d87d4a] hover:opacity-100 active:text-[#d87d4a] active:opacity-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItems;
