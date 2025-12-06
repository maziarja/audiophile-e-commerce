import { getTest } from "../_actions/products/getTest";

async function Page() {
  const test = await getTest("maz");
  return <div>{test?.name}</div>;
}

export default Page;
