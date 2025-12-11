import { ProductType } from "@/lib/schemas/productType";
import Features from "./Features";
import InTheBox from "./InTheBox";
import ProductImage from "./ProductImage";
import ProductInformation from "./ProductInformation";
import AddToCard from "./AddToCard";
import Gallery from "./Gallery";
import OtherProducts from "./OtherProducts";

async function ProductDetails({
  className,
  product,
}: {
  className?: string;
  product: ProductType;
}) {
  return (
    <div className={`${className} `}>
      <div className="mb-22 md:mb-30 md:grid md:grid-cols-2 md:items-center md:gap-17.25 lg:mb-40 lg:gap-31.25">
        <ProductImage image={product.image} name={product.name} />
        <div>
          <ProductInformation
            isNew={product.new}
            name={product.name}
            description={product.description}
            price={product.price}
          />

          <AddToCard productId={product._id} />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-31.25">
        <div className="mb-22 md:mb-30">
          <Features features={product.features} />
        </div>
        <div className="mb-22 md:mb-30 lg:mb-40">
          <InTheBox includes={product.includes} />
        </div>
      </div>
      <div className="mb-30 lg:mb-40">
        <Gallery gallery={product.gallery} name={product.name} />
      </div>
      <div>
        <OtherProducts otherProducts={product.others} />
      </div>
    </div>
  );
}

export default ProductDetails;
