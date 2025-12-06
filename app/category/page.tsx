import Category from "@/components/category/Category";
import { getProductByCategory } from "../_actions/products/getProductsByCategory";
import Products from "@/components/share/Products";

export const metadata = {
  title: "Category",
};

type SearchParams = {
  type: string;
};

async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const category = params.type;
  const products = await getProductByCategory(category);

  return (
    <section>
      <div className="bg-[#191919] py-8 text-center text-[28px] font-bold tracking-[2px] text-white uppercase">
        {category}
      </div>
      <div className="mt-16 mb-30 flex flex-col items-center justify-center gap-30 px-6 md:mt-30 md:px-10 xl:mt-40 xl:mb-40 xl:gap-40 xl:px-41.25">
        {/* {products?.map((product, i) => (
          <Category key={i} product={product} index={i} />
        ))} */}
        {products?.map((p) => {
          return p.name;
        })}
      </div>
      <Products className="mb-30 lg:mb-40" />
    </section>
  );
}

export default Page;
