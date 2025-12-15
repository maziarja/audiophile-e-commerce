"use client";

import { DBCartType } from "@/lib/schemas/cartType";
import { DropdownMenuContent } from "../ui/dropdown-menu";
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
import { useEffect, useState } from "react";
import { getLocalCartProducts } from "@/app/_actions/shoppingCart/getLocalCartProducts";
import { LocalProductCartType } from "@/lib/schemas/productType";
import { getDBCartProducts } from "@/app/_actions/shoppingCart/getDBCartProducts";
import { Button } from "../ui/button";
import { deleteDBCart } from "@/app/_actions/shoppingCart/deleteDBCart";

type Props = {
  shoppingCartDB: DBCartType;
  loggedInUser: boolean;
};

export type ProductCartItem = LocalProductCartType[0] & {
  quantity: number;
  discount?: number;
};

function ShoppingCart({ shoppingCartDB, loggedInUser }: Props) {
  const { cart: localCart, setCart, dbCartVersion, refreshDBCart } = useCart();
  const shoppingCart = loggedInUser ? shoppingCartDB : localCart;
  const [shoppingCartProduct, setShoppingCartProduct] = useState<
    ProductCartItem[]
  >([]);

  useEffect(() => {
    async function getShoppingCart() {
      if (!loggedInUser) {
        const productIds = localCart.map((item) => item.productId);
        if (productIds.length === 0) {
          setShoppingCartProduct([]);
          return;
        }

        const products = await getLocalCartProducts(productIds);

        const formatted: ProductCartItem[] = localCart
          .map((cartItem) => {
            const product = products?.find((p) => p._id === cartItem.productId);

            if (!product) return null;

            return {
              ...product,
              quantity: cartItem.quantity,
            };
          })
          .filter(Boolean) as ProductCartItem[];
        setShoppingCartProduct(formatted);
      } else {
        const products = await getDBCartProducts();

        const formatted = products.map((product) => ({
          name: product.productId.name,
          _id: product.productId._id,
          categoryImage: product.productId.categoryImage,
          quantity: product.quantity,
          price: product.productId.price,
          discount: product.discount,
        }));
        setShoppingCartProduct(formatted);
      }
    }

    getShoppingCart();
  }, [localCart, loggedInUser, dbCartVersion]);

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

  return (
    <DropdownMenuContent sideOffset={50} className="mr-4">
      <Card className="w-[327px]">
        <CardHeader>
          <CardTitle className="text-[18px] font-bold tracking-[1.29px]">
            CART ({shoppingCart.length})
          </CardTitle>
          <CardAction
            onClick={handleRemoveAllCart}
            className="cursor-pointer text-[15px] leading-[25px] font-medium text-black underline opacity-50"
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
              $ {totalPrice.toLocaleString()}
            </p>
          </div>

          <Button size="lg" className="w-full font-bold">
            CHECKOUT
          </Button>
        </CardFooter>
      </Card>
    </DropdownMenuContent>
  );
}

export default ShoppingCart;
