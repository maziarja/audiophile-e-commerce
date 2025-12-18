"use client";

import { useForm } from "react-hook-form";
import BillingDetails from "./BillingDetails";
import { Button } from "../ui/button";
import { CheckoutSchema, CheckoutType } from "@/lib/schemas/checkoutType";
import { zodResolver } from "@hookform/resolvers/zod";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";
import SummaryShoppingCart from "./SummaryShoppingCart";
import { useGetProductsShoppingCart } from "@/app/_hooks/useGetProductsShoppingCart";

function CheckoutContainer({ loggedInUser }: { loggedInUser: boolean }) {
  const productShoppingCart = useGetProductsShoppingCart(loggedInUser);

  const form = useForm<CheckoutType>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
      zipcode: "",
      city: "",
      country: "",
      paymentMethod: null,
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  function onSubmit(data: CheckoutType) {
    console.log(data);
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-8 rounded-xl bg-white px-6 pt-6 pb-8">
        <p className="text-[28px] font-bold tracking-[1px]">CHECKOUT</p>
        <BillingDetails form={form} />
        <ShippingInfo form={form} />
        <PaymentDetails form={form} />
      </div>
      {productShoppingCart.length > 0 && (
        <div className="space-y-8 rounded-xl bg-white px-6 py-8">
          <SummaryShoppingCart productShoppingCart={productShoppingCart} />
          <Button type="submit" size={"lg"} className="w-full">
            continue & pay
          </Button>
        </div>
      )}
    </form>
  );
}

export default CheckoutContainer;
