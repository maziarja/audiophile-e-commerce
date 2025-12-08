import { Button } from "../ui/button";

function AddToCard() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-30 items-center justify-around bg-[#f1f1f1]">
        <button className="cursor-pointer text-[20px] font-bold tracking-[1px] text-black opacity-25 hover:text-[#d87d4a] hover:opacity-100 active:text-[#d87d4a] active:opacity-100">
          -
        </button>
        <span className="text-[13px] font-bold tracking-[1px]">1</span>
        <button className="cursor-pointer text-[20px] font-bold tracking-[1px] text-black opacity-25 hover:text-[#d87d4a] hover:opacity-100 active:text-[#d87d4a] active:opacity-100">
          +
        </button>
      </div>
      <Button size={"lg"} className="font-bold">
        ADD TO CART
      </Button>
    </div>
  );
}

export default AddToCard;
