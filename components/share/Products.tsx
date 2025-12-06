import Image from "next/image";
import headphone from "@/public/assets/headphone-no-bg.png";
import earphone from "@/public/assets/earphones-no-bg.png";
import speaker from "@/public/assets/speaker-no-bg.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductLink from "./ProductLink";

const products = [
  { image: headphone, title: "headphones" },
  { image: speaker, title: "speakers" },
  { image: earphone, title: "earphones" },
];

function Products({
  className,
  closeMenu,
}: {
  className?: string;
  closeMenu?: () => void;
}) {
  return (
    <section
      className={`mx-auto max-w-[1110px] px-6 md:px-10 lg:min-[1150]:px-0 ${className}`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-2.5">
        {products.map((product) => (
          <div
            key={product.title}
            className="relative mt-[52px] flex items-center justify-center md:flex-1"
          >
            <Image
              src={product.image}
              alt="headphone"
              width={0}
              height={0}
              loading="eager"
              className="absolute top-0 -translate-y-1/2"
            />
            <div className="flex h-[165px] w-full flex-col items-center gap-4 rounded-lg bg-[#f1f1f1]">
              <p className="mt-22 text-center text-[15px] font-bold tracking-[1.07px] uppercase">
                {product.title}
              </p>
              {/* <Link
                onClick={closeMenu}
                href={`/category?type=${product.title}`}
                className="mx-auto flex items-center gap-1 text-center"
              >
                <span className="text-[13px] font-bold tracking-[1px] opacity-50">
                  SHOP
                </span>
                <ChevronRight color="#d87d4a" size={20} />
              </Link> */}
              <ProductLink title={product.title} closeMenu={closeMenu} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
