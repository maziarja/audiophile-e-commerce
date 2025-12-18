import CheckoutContainer from "@/components/checkout/CheckoutContainer";
import GoBack from "@/components/productDetails/GoBack";
import { isLoggedInUser } from "../_actions/users/isLoggedInUser";

export const metadata = {
  title: "Checkout",
};

async function Page() {
  const loggedInUser = await isLoggedInUser();

  return (
    <section className="bg-[#fafafa] px-6 pb-24.25">
      <GoBack />
      <CheckoutContainer loggedInUser={loggedInUser} />
    </section>
  );
}

export default Page;
