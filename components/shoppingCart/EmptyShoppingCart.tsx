"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

function EmptyShoppingCart() {
  return (
    <div className="bg-muted/40 flex flex-col items-center justify-center gap-6 rounded-lg px-6 py-10 text-center">
      <p className="text-[18px] font-bold tracking-[1.4px] text-black uppercase">
        YOUR CART IS EMPTY
      </p>

      <p className="max-w-[260px] text-[15px] leading-[25px] font-medium text-black/60">
        Looks like you haven&apos;t added anything yet.
      </p>
      <DropdownMenuItem className="mt-2 focus:bg-transparent">
        <Button variant="outline" className="w-full font-bold tracking-wide">
          CONTINUE SHOPPING
        </Button>
      </DropdownMenuItem>
    </div>
  );
}

export default EmptyShoppingCart;
