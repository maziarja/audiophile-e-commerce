"use client";

import { Skeleton } from "@/components/ui/skeleton";

function CategorySkeleton({ count = 3 }: { count?: number }) {
  return (
    <section className="space-y-16 md:space-y-30 xl:space-y-40">
      {/* Header Skeleton */}
      <div className="py-8 text-center md:pt-26.25 md:pb-24.25">
        <Skeleton className="mx-auto h-10 w-60 rounded-md md:h-14 md:w-80" />
      </div>

      {/* Product Skeletons */}
      <div className="flex flex-col items-center gap-8 px-6 md:gap-13 lg:gap-31.25">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="grid w-full gap-8 md:gap-13 lg:grid-cols-2 lg:items-center lg:gap-31.25"
          >
            {/* Image Skeleton */}
            <Skeleton className="h-[352px] w-full rounded-[10px] bg-gray-300 lg:h-[560px]" />

            {/* Text Skeleton */}
            <div className="space-y-4 md:mx-auto md:w-[83%] lg:space-y-6">
              <Skeleton className="h-5 w-24 rounded-full md:h-6 md:w-32" />{" "}
              {/* new product */}
              <Skeleton className="h-8 w-48 rounded-md md:h-10 md:w-72" />{" "}
              {/* title part 1 */}
              <Skeleton className="h-8 w-36 rounded-md md:h-10 md:w-64" />{" "}
              {/* title part 2 */}
              <Skeleton className="h-6 w-full rounded-md md:h-7 md:w-[90%]" />{" "}
              {/* description */}
              <Skeleton className="h-12 w-32 rounded-full md:h-14 md:w-40" />{" "}
              {/* button */}
            </div>
          </div>
        ))}
      </div>

      {/* Products & BrandStory Skeleton */}
      <div className="space-y-12 md:space-y-16">
        <Skeleton className="h-[200px] w-full rounded-lg md:h-[240px]" />
        <Skeleton className="h-[200px] w-full rounded-lg md:h-[240px]" />
      </div>
    </section>
  );
}

export default CategorySkeleton;
