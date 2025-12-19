import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function PurchaseHistoryLink() {
  return (
    <Link href={"/purchaseHistory"} className="text-sm">
      <Button variant={"ghost"}>
        <ShoppingBagIcon />
        Purchase History
      </Button>
    </Link>
  );
}

export default PurchaseHistoryLink;
