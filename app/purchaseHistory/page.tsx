import PurchaseHistoryContainer from "@/components/user/PurchaseHistoryContainer";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getPurchaseHistory } from "../_actions/users/getPurchaseHistory";

async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  const purchaseHistory = await getPurchaseHistory();

  purchaseHistory?.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (!purchaseHistory) return null;
  return <PurchaseHistoryContainer purchaseHistory={purchaseHistory} />;
}

export default Page;
