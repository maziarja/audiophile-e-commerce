type Image = {
  desktop: string;
  tablet: string;
  mobile: string;
};

function ProductImage({ image, name }: { image: Image; name: string }) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <img
        src={image.mobile}
        alt={name}
        className="mb-8 h-[327px] w-full rounded-[10px] bg-[#f1f1f1] object-contain object-center md:h-[480px] lg:h-[560px]"
      />
    </picture>
  );
}

export default ProductImage;
