type ProductInformationProps = {
  isNew: boolean;
  name: string;
  description: string;
  price: number;
};

function ProductInformation({
  isNew,
  name,
  description,
  price,
}: ProductInformationProps) {
  return (
    <div className="mb-8 flex flex-col gap-6 md:gap-0 lg:mb-12">
      {isNew && (
        <p className="overlineClass uppercase md:mb-4 lg:tracking-[10px]">
          new product
        </p>
      )}
      <div className="md:mb-8">
        <p className="text-[28px] font-bold tracking-[1px] uppercase md:leading-8 lg:text-[40px] lg:leading-11 lg:tracking-[1.43px]">
          {name.split(" ").slice(0, -1).join(" ")}
        </p>
        <p className="text-[28px] font-bold tracking-[1px] uppercase md:leading-8 lg:text-[40px] lg:leading-11 lg:tracking-[1.43px]">
          {name.split(" ").at(-1)}
        </p>
      </div>
      <p className="text-[15px] leading-[25px] font-medium text-black opacity-50 md:mb-8">
        {description}
      </p>
      <p className="text-[18px] font-bold tracking-[1.29px]">
        $ {price.toLocaleString()}
      </p>
    </div>
  );
}

export default ProductInformation;
