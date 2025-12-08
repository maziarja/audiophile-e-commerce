type Includes = {
  item: string;
  quantity: number;
}[];

function InTheBox({ includes }: { includes: Includes }) {
  return (
    <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-1 lg:space-y-8">
      <p className="text-[24px] leading-9 font-bold tracking-[0.86] uppercase md:text-[32px] md:tracking-[1.14px]">
        IN THE BOX
      </p>
      <div className="flex flex-col gap-2">
        {includes.map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-[15px] leading-[25px] font-bold text-[#d87d4a]">
              {item.quantity}x
            </span>
            <span className="text-[15px] leading-[25px] font-medium text-black opacity-50">
              {item.item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InTheBox;
