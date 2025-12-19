"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { ProductCartItem } from "../shoppingCart/ShoppingCartContainer";
import IconOrderConfirmation from "../ui/icon-order-confirmation";
import ProductItem from "./ProductItem";
import { Separator } from "../ui/separator";
import { SHIPPING } from "@/lib/const";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  setShowConfirmation: Dispatch<SetStateAction<boolean>>;
  showConfirmation: boolean;
  confirmationCart: ProductCartItem[];
};

function Confirmation({
  setShowConfirmation,
  showConfirmation,
  confirmationCart,
}: Props) {
  const [showOtherItem, setShowOtherItem] = useState(0);

  const total = confirmationCart.reduce(
    (acc, cur) => acc + cur.price * (1 - (cur.discount || 0)) * cur.quantity,
    0,
  );
  const grandTotal = total + SHIPPING;

  return (
    <Dialog onOpenChange={setShowConfirmation} open={showConfirmation}>
      <DialogContent>
        <DialogHeader
          className={`md:gap-6 ${showOtherItem === 0 ? "gap-4.5" : "gap-1.5"}`}
        >
          <div className="mb-1.5">
            <IconOrderConfirmation />
          </div>
          <DialogTitle asChild>
            <div>
              <p className="text-left text-[24px]! leading-7! font-bold! tracking-[.86px]! text-pretty uppercase">
                thank you
              </p>
              <p className="text-left text-[24px]! leading-7! font-bold! tracking-[.86px]! text-pretty uppercase">
                for your order
              </p>
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="text-left text-[15px]! leading-[25px]! font-medium! text-black! opacity-50! md:mb-2">
              You will receive an email confirmation shortly.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="md:mb-6 md:grid md:grid-cols-[1fr_198px]">
          <div
            className={`space-y-3 rounded-t-lg bg-[#f1f1f1] p-6 md:rounded-l-lg md:rounded-tr-none ${showOtherItem === 0 ? "py-6" : "py-3"}`}
          >
            <div className="space-y-2 md:space-y-4">
              {confirmationCart.map((item, i) => {
                if (showOtherItem >= i) {
                  return <ProductItem key={i} productItem={item} />;
                }
              })}
            </div>
            {confirmationCart.length > 1 && (
              <>
                <Separator />
                <button
                  onClick={() =>
                    setShowOtherItem((prevState) =>
                      prevState === 0 ? Infinity : 0,
                    )
                  }
                  className="w-full text-center text-[12px] font-bold tracking-[-.21px] text-black opacity-50"
                >
                  {showOtherItem === 0
                    ? `and ${confirmationCart.length - 1} other item(s)`
                    : `View less`}
                </button>
              </>
            )}
          </div>
          <div
            className={`space-y-2 ${showOtherItem === 0 ? "py-6 md:justify-center" : "py-3 md:justify-end md:pb-12.5 md:pl-10"} rounded-b-lg bg-black p-6 md:flex md:flex-col md:rounded-r-lg md:rounded-bl-none`}
          >
            <p className="text-[15px] leading-[25px] font-medium text-white opacity-50">
              GRAND TOTAL
            </p>
            <p className="text-[18px] font-bold text-white">
              ${" "}
              {grandTotal.toLocaleString("en-us", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <Link href={"/"}>
          <Button size={"lg"} className="w-full">
            BACK TO HOME
          </Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
}

export default Confirmation;
