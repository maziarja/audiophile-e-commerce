import ShoppingCartContainer from "@/components/shoppingCart/ShoppingCartContainer";
import { isLoggedInUser } from "../_actions/users/isLoggedInUser";
import { getCartDB } from "../_actions/shoppingCart/getCartDB";

async function Page() {
  const loggedInUser = await isLoggedInUser();
  const shoppingCartDB = loggedInUser ? await getCartDB() : [];

  return (
    <ShoppingCartContainer
      shoppingCartDB={shoppingCartDB}
      loggedInUser={loggedInUser}
    />
  );
}

export default Page;
