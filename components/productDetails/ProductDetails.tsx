import { ProductType } from "@/lib/schemas/productType";

function ProductDetails({
  className,
  product,
}: {
  className?: string;
  product: ProductType;
}) {
  return <div className={`${className}`}></div>;
}

export default ProductDetails;
