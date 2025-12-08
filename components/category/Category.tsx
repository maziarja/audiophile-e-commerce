import { ProductTypeByCategory } from "@/lib/schemas/productType";
import { Button } from "../ui/button";
import Link from "next/link";

function Category({
  product,
  index,
}: {
  product: ProductTypeByCategory;
  index: number;
}) {
  return (
    <div className="grid w-full gap-8 md:gap-13 lg:grid-cols-2 lg:items-center lg:gap-31.25">
      <picture className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
        <source
          media="(min-width: 1024px)"
          srcSet={product.categoryImage.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={product.categoryImage.tablet}
        />
        <img
          src={product.categoryImage.mobile}
          alt={product.name}
          className="h-[352px] w-full rounded-[10px] bg-[#f1f1f1] object-contain object-center lg:h-[560px]"
        />
      </picture>
      <div
        className={`space-y-6 text-center md:mx-auto md:w-[83%] md:space-y-0 lg:text-left ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
      >
        {product.new && (
          <p className="overlineClass uppercase md:mb-4">new product</p>
        )}
        <div className="md:mb-8">
          <p className="text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-11 md:tracking-[1.43px]">
            {product.name.split(" ").slice(0, -1).join(" ")}
          </p>
          <p className="text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-11 md:tracking-[1.43px]">
            {product.name.split(" ").at(-1)}
          </p>
        </div>
        <p className="text-[15px] leading-[25px] font-medium text-black opacity-50 md:mb-6 lg:mb-10">
          {product.description}
        </p>
        <Link href={`products/${product._id}`}>
          <Button size={"lg"}>see product</Button>
        </Link>
      </div>
    </div>
  );
}

export default Category;
