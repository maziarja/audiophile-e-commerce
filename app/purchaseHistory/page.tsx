import PurchaseHistoryContainer from "@/components/user/PurchaseHistoryContainer";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getPurchaseHistory } from "../_actions/users/getPurchaseHistory";

async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  const purchaseHistory = await getPurchaseHistory();
  if (!purchaseHistory) return null;
  return <PurchaseHistoryContainer purchaseHistory={purchaseHistory} />;
}

export default Page;
