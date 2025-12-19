import Image from "next/image";
import { ProductCartItem } from "../shoppingCart/ShoppingCartContainer";

function ProductItem({ productItem }: { productItem: ProductCartItem }) {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex items-center gap-4">
        <Image
          src={productItem.categoryImage.mobile}
          alt={`${productItem.name} image`}
          width={64}
          height={64}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <p className="text-[15px] leading-[25px] font-bold">
            {productItem.name.split(" ").slice(0, -1).join(" ")}
          </p>
          <p
            className={`bold text-[14px] leading-[25px] text-black opacity-50 ${productItem.discount ? "line-through" : ""}`}
          >
            {`$ ${productItem.price.toLocaleString()}`}
          </p>
          {productItem.discount ? (
            <p className="bold text-[14px] leading-[25px] text-black opacity-50">
              {` $ ${(
                productItem.price *
                (1 - (productItem.discount ?? 0))
              ).toLocaleString("en-us", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}`}
            </p>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-[15px] leading-[25px] font-bold text-black opacity-50">
        x{productItem.quantity}
      </p>
    </div>
  );
}

export default ProductItem;
