import Link from "next/link";
import { Button } from "../ui/button";

type OtherProducts = {
  slug: string;
  name: string;
  _id: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}[];

function OtherProducts({ otherProducts }: { otherProducts: OtherProducts }) {
  return (
    <div>
      <p className="mb-10 text-center text-[24px] leading-9 font-bold tracking-[0.86] uppercase md:mb-14 md:text-[32px] md:tracking-[1.14px] lg:mb-16">
        YOU MAY ALSO LIKE
      </p>
      <div className="space-y-14 md:grid md:grid-cols-3 md:gap-[11px] lg:gap-7.5">
        {otherProducts.map((product) => (
          <div key={product.name} className="space-y-8 md:space-y-0">
            <div className="mb-10">
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet={product.image.desktop}
                />
                <source
                  media="(min-width:768px)"
                  srcSet={product.image.tablet}
                />
                <img
                  src={product.image.mobile}
                  alt={`an image of ${product.name}`}
                  className="w-full rounded-[10px] md:w-auto"
                />
              </picture>
            </div>
            <p className="text-center text-[24px] font-bold tracking-[1.71px] md:mb-8">
              {product.name}
            </p>
            <Link
              href={`/products/${product._id}`}
              className="block text-center"
            >
              <Button size={"lg"} className="font-bold">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherProducts;
