import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Authentication from "./Authentication";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import LogoutUser from "./LogoutUser";
import PurchaseHistoryLink from "../user/PurchaseHistoryLink";

function Profile({
  trigger,
  loggedInUser,
}: {
  trigger: React.ReactNode;
  loggedInUser: boolean;
}) {
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {loggedInUser ? <LogoutUser /> : <Authentication />}
            {loggedInUser ? <PurchaseHistoryLink /> : null}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Profile;

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
// } from "@/components/ui/dropdown-menu";
// import { useSession } from "next-auth/react";
// import Authentication from "./Authentication";
// import LogoutUser from "./LogoutUser";

// export default function Profile({ trigger }: { trigger: React.ReactNode }) {
//   const { status } = useSession();
//   const loggedInUser = status === "authenticated";

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

//       <DropdownMenuContent align="end">
//         {loggedInUser ? <LogoutUser /> : <Authentication />}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
