import Category from "@/components/category/Category";
import { getProductByCategory } from "../_actions/products/getProductsByCategory";
import Products from "@/components/share/Products";

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
        <div className="bg-[#191919] py-8 text-center text-[28px] font-bold tracking-[2px] text-white uppercase md:pt-26.25 md:pb-24.25 md:text-[40px] md:leading-11 md:tracking-[1.43px] lg:pt-24.5">
          {category}
        </div>
        <div className="mt-16 mb-30 flex max-w-[1110px] flex-col items-center justify-center gap-30 px-6 md:mt-30 md:px-10 lg:mx-auto lg:min-[1150px]:pl-0 xl:mt-40 xl:mb-40 xl:gap-40">
          {products?.map((product, i) => (
            <Category key={i} product={product} index={i} />
          ))}
        </div>
      </section>
      <Products className="mb-30 lg:mb-40" />
    </>
  );
}

export default Page;
