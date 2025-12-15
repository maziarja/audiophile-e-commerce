import Link from "next/link";

function GoBack({ category }: { category: string }) {
  return (
    <Link
      href={`/category?type=${category}`}
      className="mt-4 mb-6 inline-block text-[15px] leading-[25px] font-medium text-black opacity-50 md:mt-[33px] lg:mt-20 lg:mb-14"
    >
      Go Back
    </Link>
  );
}

export default GoBack;
