"use client";

import { SHIPPING, TAX } from "@/lib/const";
import { ProductCartItem } from "../shoppingCart/ShoppingCartContainer";
import ProductItem from "./ProductItem";

function SummaryShoppingCart({
  productShoppingCart,
}: {
  productShoppingCart: ProductCartItem[];
}) {
  const total = productShoppingCart.reduce(
    (acc, cur) => acc + cur.price * (1 - (cur.discount || 0)) * cur.quantity,
    0,
  );

  const vat = (total * TAX) / 100;

  const grandTotal = total + SHIPPING;

  return (
    <div className="space-y-8">
      <p className="text-[18px] font-bold tracking-[1.29px] uppercase">
        Summary
      </p>
      <div className="space-y-6">
        {productShoppingCart.map((productItem, i) => (
          <ProductItem key={i} productItem={productItem} />
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[15px] leading-[25px] font-medium text-black opacity-50">
            TOTAL
          </p>
          <p className="text-[18px] font-bold">
            ${" "}
            {total.toLocaleString("en-us", {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[15px] leading-[25px] font-medium text-black opacity-50">
            SHIPPING
          </p>
          <p className="text-[18px] font-bold">
            ${" "}
            {SHIPPING.toLocaleString("en-us", {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[15px] leading-[25px] font-medium text-black opacity-50">
            VAT (INCLUDED)
          </p>
          <p className="text-[18px] font-bold">
            ${" "}
            {vat.toLocaleString("en-us", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-[15px] leading-[25px] font-medium text-black opacity-50">
            GRAND TOTAL
          </p>
          <p className="text-[18px] font-bold text-[#d87d4a]">
            ${" "}
            {grandTotal.toLocaleString("en-us", {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryShoppingCart;
