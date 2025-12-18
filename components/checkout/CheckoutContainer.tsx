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
import { checkout } from "@/app/_actions/users/checkout";
import { useCart } from "@/app/_contexts/CartContext";
import Spinner from "../ui/spinner";
import { confirmation } from "@/app/_actions/users/confirmation";
import { useState } from "react";
import Confirmation from "./Confirmation";
import { ProductCartItem } from "../shoppingCart/ShoppingCartContainer";

function CheckoutContainer({
  loggedInUser,
  emailAddress,
}: {
  loggedInUser: boolean;
  emailAddress: string;
}) {
  const productShoppingCart = useGetProductsShoppingCart(loggedInUser);
  const { cart: localCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationCart, setConfirmationCart] = useState<ProductCartItem[]>(
    [],
  );

  const form = useForm<CheckoutType>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      fullName: "",
      emailAddress: emailAddress ?? "",
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

  async function onSubmit(data: CheckoutType) {
    const result = await checkout(data, loggedInUser, localCart);
    if (result?.success) {
      form.reset();

      const confirmationCart = await confirmation(
        loggedInUser,
        data.emailAddress,
      );
      if (confirmationCart) {
        const formatted = confirmationCart.map((product) => ({
          name: product.productId.name,
          _id: product.productId._id,
          categoryImage: product.productId.categoryImage,
          quantity: product.quantity,
          price: product.productId.price,
          discount: product.discount,
        }));
        setConfirmationCart(formatted);
        setShowConfirmation(true);
      }
    }
  }

  return (
    <>
      {showConfirmation && (
        <Confirmation
          setShowConfirmation={setShowConfirmation}
          showConfirmation={showConfirmation}
          confirmationCart={confirmationCart}
        />
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8 rounded-xl bg-white px-6 pt-6 pb-8">
          <p className="text-[28px] font-bold tracking-[1px]">CHECKOUT</p>
          <BillingDetails form={form} emailAddress={emailAddress} />
          <ShippingInfo form={form} />
          <PaymentDetails form={form} />
        </div>
        {productShoppingCart.length > 0 && (
          <div className="space-y-8 rounded-xl bg-white px-6 py-8">
            <SummaryShoppingCart productShoppingCart={productShoppingCart} />
            <Button type="submit" size={"lg"} className="w-full">
              {!form.formState.isSubmitting ? "continue & pay" : <Spinner />}
            </Button>
          </div>
        )}
      </form>
    </>
  );
}

export default CheckoutContainer;
