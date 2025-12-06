import Hero from "@/components/home/Hero";
import ProductPreview from "../components/home/ProductPreview";
import Products from "../components/share/Products";

async function Page() {
  return (
    <>
      <Hero className="mb-9.25 md:mb-24 lg:mb-30" />
      <Products className="mb-30.75 md:mb-24 lg:mb-42" />
      <ProductPreview className="mb-40 md:mb-24 lg:mb-40.75" />
    </>
  );
}

export default Page;
