import Link from "next/link";
import { Button } from "../ui/button";

function ProductUnavailable() {
  return (
    <div className="mx-6 my-12 space-y-4 rounded-lg border border-neutral-300 bg-neutral-50 p-8 text-center shadow-sm">
      <h2 className="text-2xl font-bold tracking-wide">Product Unavailable</h2>
      <p className="text-[15px] leading-[25px] font-medium text-black opacity-50">
        Unfortunately, this product is not available at the moment. Please check
        back later or explore our other amazing items!
      </p>
      <Link href={"/"}>
        <Button size={"lg"}>Back to home</Button>
      </Link>
    </div>
  );
}

export default ProductUnavailable;
