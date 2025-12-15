import Hero from "@/components/home/Hero";
import ProductPreview from "../components/home/ProductPreview";
import Products from "../components/share/Products";
import BrandStory from "@/components/share/BrandStory";

function Page() {
  return (
    <>
      <Hero className="mb-9.25 md:mb-24 lg:mb-30" />
      <Products className="mb-30.75 md:mb-24 lg:mb-42" />
      <ProductPreview className="mb-30 md:mb-24 lg:mb-50" />
      <BrandStory className="mb-30 md:mb-24 lg:mb-50" />
    </>
  );
}

export default Page;
