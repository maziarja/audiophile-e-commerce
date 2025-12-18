"use client";

import { useEffect, useState } from "react";
import { useCart } from "../_contexts/CartContext";
import { LocalProductCartType } from "@/lib/schemas/productType";
import { getLocalCartProducts } from "../_actions/shoppingCart/getLocalCartProducts";
import { getDBCartProducts } from "../_actions/shoppingCart/getDBCartProducts";

export type ProductCartItem = LocalProductCartType[0] & {
  quantity: number;
  discount?: number;
};

export function useGetProductsShoppingCart(loggedInUser: boolean) {
  const [shoppingCartProduct, setShoppingCartProduct] = useState<
    ProductCartItem[]
  >([]);
  const { cart: localCart, dbCartVersion } = useCart();

  useEffect(() => {
    async function getShoppingCart() {
      if (!loggedInUser) {
        const productIds = localCart.map((item) => item.productId);

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

  return shoppingCartProduct;
}
