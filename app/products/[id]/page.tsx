import { getProductDetails } from "@/app/_actions/products/getProductDetails";
import GoBack from "@/components/productDetails/GoBack";
import ProductDetails from "@/components/productDetails/ProductDetails";
import BrandStory from "@/components/share/BrandStory";

import Products from "@/components/share/Products";

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
        <GoBack category={product.category} />
        <ProductDetails product={product} />
      </section>
      <Products className="mb-30 lg:mb-40" />
      <BrandStory className="mb-30 lg:mb-40" />
    </>
  );
}

export default Page;
