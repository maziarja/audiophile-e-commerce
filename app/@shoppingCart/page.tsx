import ShoppingCart from "@/components/shoppingCart/ShoppingCart";
import { isLoggedInUser } from "../_actions/users/isLoggedInUser";
import { getCartDB } from "../_actions/shoppingCart/getCartDB";

async function Page() {
  const loggedInUser = await isLoggedInUser();
  const shoppingCartDB = loggedInUser ? await getCartDB() : [];

  return (
    <ShoppingCart shoppingCartDB={shoppingCartDB} loggedInUser={loggedInUser} />
  );
}

export default Page;
