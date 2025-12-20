"use client";

import { Skeleton } from "@/components/ui/skeleton";

function ProductDetailsSkeleton() {
  return (
    <div className="space-y-22 p-6 md:space-y-30 lg:space-y-40">
      {/* Product Image + Info */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-17.25 lg:gap-31.25">
        {/* Image Skeleton */}
        <Skeleton className="h-[352px] w-full rounded-[10px] bg-gray-300 lg:h-[560px]" />

        {/* Info Skeleton */}
        <div className="mt-6 space-y-4 md:mt-0">
          <Skeleton className="h-5 w-24 rounded-full" /> {/* NEW PRODUCT */}
          <Skeleton className="h-8 w-48 rounded-md" /> {/* Product Name */}
          <Skeleton className="h-6 w-full rounded-md" /> {/* Description */}
          <Skeleton className="h-8 w-32 rounded-md" /> {/* Price */}
          <Skeleton className="h-12 w-40 rounded-full" />{" "}
          {/* Add to Cart Button */}
        </div>
      </div>

      {/* Features + In The Box */}
      <div className="space-y-22 md:space-y-30 lg:grid lg:grid-cols-2 lg:gap-31.25 lg:space-y-0">
        <Skeleton className="h-40 w-full rounded-md" /> {/* Features */}
        <Skeleton className="h-40 w-full rounded-md" /> {/* In The Box */}
      </div>

      {/* Gallery */}
      <Skeleton className="h-[200px] w-full rounded-md md:h-[300px] lg:h-[400px]" />

      {/* Other Products */}
      <Skeleton className="h-[200px] w-full rounded-md md:h-[240px] lg:h-[280px]" />
    </div>
  );
}

export default ProductDetailsSkeleton;
