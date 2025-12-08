import { getProductDetails } from "@/app/_actions/products/getProductDetails";
import ProductDetails from "@/components/productDetails/ProductDetails";

import Products from "@/components/share/Products";
import Link from "next/link";

export const metadata = {
  title: "Details",
};

type Params = Promise<{ id: string }>;

async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProductDetails(id);
  if (!product) return;
  return (
    <>
      <section className="mb-30 max-w-[1110px] px-6 md:px-10 lg:mx-auto lg:mb-40 lg:min-[1150px]:px-0">
        <Link
          href={`/category?type=${product.category}`}
          className="mt-4 mb-6 inline-block text-[15px] leading-[25px] font-medium text-black opacity-50 md:mt-[33px] lg:mt-20 lg:mb-14"
        >
          Go Back
        </Link>
        <ProductDetails product={product} />
      </section>
      <Products className="mb-30" />
    </>
  );
}

export default Page;
