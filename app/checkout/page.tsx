import CheckoutContainer from "@/components/checkout/CheckoutContainer";
import GoBack from "@/components/productDetails/GoBack";
import { isLoggedInUser } from "../_actions/users/isLoggedInUser";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Checkout",
};

async function Page() {
  const loggedInUser = await isLoggedInUser();
  const session = await auth();
  const emailAddress = session?.user?.email;

  return (
    <section className="bg-[#fafafa] px-6 pb-24.25">
      <GoBack />
      <CheckoutContainer
        loggedInUser={loggedInUser}
        emailAddress={emailAddress || ""}
      />
    </section>
  );
}

export default Page;
