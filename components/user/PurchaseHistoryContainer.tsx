"use client";

import ProductItem from "@/components/checkout/ProductItem";
import { Separator } from "@/components/ui/separator";
import { ProductHistoryType } from "@/lib/schemas/purchaseHistoryType";

function PurchaseHistoryContainer({
  purchaseHistory,
}: {
  purchaseHistory: ProductHistoryType;
}) {
  return (
    <div className="mx-auto max-w-[730px] space-y-8 px-6 py-10">
      <p className="text-[32px] font-bold tracking-[1.14px] uppercase">
        Purchase History
      </p>

      {purchaseHistory.map((order, index) => (
        <div key={index} className="space-y-4 rounded-lg bg-[#f1f1f1] p-6">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-bold tracking-[1px] uppercase">
              Order #{index + 1}
            </p>
            <p className="text-[14px] text-black opacity-50">
              {new Date(order.date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>

          <Separator />

          {order.items.length === 0 ? (
            <p className="text-[14px] text-black opacity-50">
              No items available
            </p>
          ) : (
            <div className="space-y-4">
              {order.items.map((item, i) => {
                const product = { ...item.productId, quantity: item.quantity };

                return <ProductItem key={i} productItem={product} />;
              })}
            </div>
          )}
        </div>
      ))}

      {purchaseHistory.length === 0 && (
        <div className="rounded-lg bg-[#f1f1f1] p-10 text-center">
          <p className="text-[18px] font-bold">No purchase history yet</p>
          <p className="mt-2 text-[15px] text-black opacity-50">
            Your completed orders will appear here.
          </p>
        </div>
      )}
    </div>
  );
}

export default PurchaseHistoryContainer;
