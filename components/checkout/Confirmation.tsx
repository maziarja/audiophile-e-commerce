"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
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
  const total = confirmationCart.reduce(
    (acc, cur) => acc + cur.price * (1 - (cur.discount || 0)) * cur.quantity,
    0,
  );
  const grandTotal = total + SHIPPING;

  return (
    <Dialog onOpenChange={setShowConfirmation} open={showConfirmation}>
      <DialogContent>
        <DialogHeader className="gap-4.5">
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
            <p className="text-left text-[15px]! leading-[25px]! font-medium! text-black! opacity-50!">
              You will receive an email confirmation shortly.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-3 rounded-t-lg bg-[#f1f1f1] p-6">
            <ProductItem productItem={confirmationCart[0]} />
            {confirmationCart.length > 1 && (
              <>
                <Separator />
                <p className="text-center text-[12px] font-bold tracking-[-.21px] text-black opacity-50">
                  and {confirmationCart.length - 1} other items(s)
                </p>
              </>
            )}
          </div>
          <div className="space-y-2 rounded-b-lg bg-black p-6">
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
