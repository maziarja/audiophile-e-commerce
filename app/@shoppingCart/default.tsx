import ShoppingCart from "@/components/shoppingCart/ShoppingCartContainer";
import { getCartDB } from "../_actions/shoppingCart/getCartDB";
import { isLoggedInUser } from "../_actions/users/isLoggedInUser";

async function Default() {
  const loggedInUser = await isLoggedInUser();
  const shoppingCartDB = loggedInUser ? await getCartDB() : [];

  return (
    <ShoppingCart shoppingCartDB={shoppingCartDB} loggedInUser={loggedInUser} />
  );
}

export default Default;
