function CategoryHeader({ category }: { category: string }) {
  return (
    <div className="bg-[#191919] py-8 text-center text-[28px] font-bold tracking-[2px] text-white uppercase md:pt-26.25 md:pb-24.25 md:text-[40px] md:leading-11 md:tracking-[1.43px] lg:pt-24.5">
      {category}
    </div>
  );
}

export default CategoryHeader;
