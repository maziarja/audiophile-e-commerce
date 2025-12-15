function CategoryContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 mb-30 flex max-w-[1110px] flex-col items-center justify-center gap-30 px-6 md:mt-30 md:px-10 lg:mx-auto lg:min-[1150px]:pl-0 xl:mt-40 xl:mb-40 xl:gap-40">
      {children}
    </div>
  );
}

export default CategoryContainer;
