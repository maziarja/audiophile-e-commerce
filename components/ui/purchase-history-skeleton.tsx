"use client";

import { Skeleton } from "@/components/ui/skeleton";

function PurchaseHistorySkeleton({ orderCount = 3, itemCount = 2 }) {
  return (
    <div className="mx-auto max-w-[730px] space-y-8 px-6 py-10">
      {/* Page Title */}
      <Skeleton className="h-10 w-64 rounded-md" />

      {/* Orders */}
      {Array.from({ length: orderCount }).map((_, index) => (
        <div key={index} className="space-y-4 rounded-lg bg-[#f1f1f1] p-6">
          {/* Order Header */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32 rounded-md" /> {/* Order # */}
            <Skeleton className="h-4 w-20 rounded-md" /> {/* Date */}
          </div>
          <div className="my-4 h-px bg-gray-300" /> {/* Separator */}
          {/* Order Items */}
          <div className="space-y-4">
            {Array.from({ length: itemCount }).map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-md" />{" "}
                {/* Product image */}
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32 rounded-md" />{" "}
                  {/* Product name */}
                  <Skeleton className="h-4 w-20 rounded-md" />{" "}
                  {/* Quantity/price */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Empty State Skeleton */}
      {orderCount === 0 && (
        <div className="rounded-lg bg-[#f1f1f1] p-10 text-center">
          <Skeleton className="mx-auto h-6 w-48 rounded-md" />{" "}
          {/* No purchase history */}
          <Skeleton className="mx-auto mt-2 h-4 w-64 rounded-md" />{" "}
          {/* Your completed orders will appear here */}
        </div>
      )}
    </div>
  );
}

export default PurchaseHistorySkeleton;
