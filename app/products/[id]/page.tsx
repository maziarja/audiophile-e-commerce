import { getProductDetails } from "@/app/_actions/products/getProductDetails";
import ProductDetails from "@/components/productDetails/ProductDetails";
import ProductUnavailable from "@/components/productDetails/ProductUnavailable";
import Products from "@/components/share/Products";

type Params = Promise<{ id: string }>;

async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) return <ProductUnavailable />;

  return (
    <section>
      <ProductDetails className="mb-30 px-6" product={product} />
      <Products />
    </section>
  );
}

export default Page;
