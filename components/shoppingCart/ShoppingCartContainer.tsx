"use client";

import { DBCartType } from "@/lib/schemas/cartType";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { useCart } from "@/app/_contexts/CartContext";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ShoppingCartItems from "./ShoppingCartItems";
import { LocalProductCartType } from "@/lib/schemas/productType";
import { Button } from "../ui/button";
import { deleteDBCart } from "@/app/_actions/shoppingCart/deleteDBCart";
import { useRouter } from "next/navigation";
import EmptyShoppingCart from "./EmptyShoppingCart";
import { useGetProductsShoppingCart } from "@/app/_hooks/useGetProductsShoppingCart";

type Props = {
  shoppingCartDB: DBCartType;
  loggedInUser: boolean;
};

export type ProductCartItem = LocalProductCartType[0] & {
  quantity: number;
  discount?: number;
};

function ShoppingCart({ shoppingCartDB, loggedInUser }: Props) {
  const { cart: localCart, setCart, refreshDBCart } = useCart();
  const shoppingCart = loggedInUser ? shoppingCartDB : localCart;
  const router = useRouter();

  const shoppingCartProduct = useGetProductsShoppingCart(loggedInUser);

  async function handleRemoveAllCart() {
    if (!loggedInUser) {
      if (window.localStorage.getItem("cart") === null) return;
      window.localStorage.removeItem("cart");
      setCart([]);
    } else {
      await deleteDBCart();
      refreshDBCart();
    }
  }

  const totalPrice = shoppingCartProduct.reduce(
    (acc, cur) => cur.price * cur.quantity * (1 - (cur.discount ?? 0)) + acc,
    0,
  );

  if (shoppingCartProduct.length === 0) {
    return (
      <DropdownMenuContent sideOffset={40} align="end">
        <EmptyShoppingCart />
      </DropdownMenuContent>
    );
  }

  return (
    <DropdownMenuContent sideOffset={70} className="" align="end">
      <Card className="w-[327px] sm:w-[377px]">
        <CardHeader>
          <CardTitle className="text-[18px] font-bold tracking-[1.29px]">
            CART ({shoppingCart.length})
          </CardTitle>
          <CardAction
            onClick={handleRemoveAllCart}
            className="cursor-pointer text-[15px] leading-[25px] font-medium text-black underline opacity-50 hover:text-[#d87d41] hover:opacity-100 active:text-[#d87d41] active:opacity-100"
          >
            Remove All
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {shoppingCartProduct?.map((item) => (
              <ShoppingCartItems key={item._id} shoppingCartItem={item} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-6">
          <div className="flex w-full items-center justify-between">
            <p className="text-[15px] leading-[25px] font-medium text-black opacity-50">
              TOTAL
            </p>
            <p className="text-[18px] font-bold">
              ${" "}
              {totalPrice.toLocaleString("en-us", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <DropdownMenuItem
            className="w-full p-0"
            onSelect={() => router.push("/checkout")}
          >
            <Button size="lg" className="w-full font-bold">
              CHECKOUT
            </Button>
          </DropdownMenuItem>
        </CardFooter>
      </Card>
    </DropdownMenuContent>
  );
}

export default ShoppingCart;
