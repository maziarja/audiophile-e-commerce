import Category from "@/components/category/Category";
import { getProductByCategory } from "../_actions/products/getProductsByCategory";
import Products from "@/components/share/Products";
import BrandStory from "@/components/share/BrandStory";
import CategoryHeader from "@/components/category/CategoryHeader";
import CategoryContainer from "@/components/category/CategoryContainer";

export const metadata = {
  title: "Category",
};

type SearchParams = {
  type: "headphones" | "speakers" | "earphones";
};

async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const category = params.type || "";
  const products = await getProductByCategory(category);

  return (
    <>
      <section>
        <CategoryHeader category={category} />
        <CategoryContainer>
          {products?.map((product, i) => (
            <Category key={i} product={product} index={i} />
          ))}
        </CategoryContainer>
      </section>
      <Products className="mb-30 lg:mb-40" />
      <BrandStory className="mb-30 lg:mb-40" />
    </>
  );
}

export default Page;
