"use client";

import { Skeleton } from "@/components/ui/skeleton";

function CheckoutSkeleton() {
  return (
    <div className="space-y-8 lg:grid lg:grid-cols-[1fr_350px] lg:gap-7.5">
      {/* Left side: form skeleton */}
      <div className="space-y-8 rounded-xl bg-white px-6 pt-6 pb-8 md:space-y-0 md:px-7 md:pt-7.5 md:pb-7.5">
        <Skeleton className="mb-6 h-10 w-40" /> {/* Checkout title */}
        {/* Billing Details Skeleton */}
        <div className="mb-8">
          <Skeleton className="mb-4 h-5 w-32" /> {/* billing details label */}
          <div className="grid grid-cols-1 gap-4 space-y-6 md:grid-cols-2 md:space-y-0">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full md:col-span-2" />
          </div>
        </div>
        {/* Shipping Info Skeleton */}
        <div className="mb-8">
          <Skeleton className="mb-4 h-5 w-32" /> {/* shipping info label */}
          <div className="grid grid-cols-1 gap-4 space-y-6 md:grid-cols-2 md:space-y-0">
            <Skeleton className="h-10 w-full md:col-span-2" /> {/* address */}
            <Skeleton className="h-10 w-full" /> {/* zipcode */}
            <Skeleton className="h-10 w-full" /> {/* city */}
            <Skeleton className="h-10 w-full" /> {/* country */}
          </div>
        </div>
        {/* Payment Details Skeleton */}
        <div className="mb-8">
          <Skeleton className="mb-4 h-5 w-32" /> {/* payment details label */}
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>

      {/* Right side: summary cart skeleton */}
      <div className="space-y-8 rounded-xl bg-white px-6 py-8 md:px-8 lg:self-start">
        <Skeleton className="mb-4 h-6 w-40" /> {/* Summary header */}
        <div className="space-y-4">
          <Skeleton className="h-16 w-full" /> {/* cart item */}
          <Skeleton className="h-16 w-full" /> {/* cart item */}
        </div>
        <Skeleton className="mt-4 h-12 w-full" /> {/* continue & pay button */}
      </div>
    </div>
  );
}

export default CheckoutSkeleton;
