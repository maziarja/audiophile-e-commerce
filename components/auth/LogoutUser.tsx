import { logoutUser } from "@/app/_actions/users/logout";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

function LogoutUser() {
  return (
    <Button
      onClick={async () => await logoutUser()}
      variant={"ghost"}
      className="text-sm"
    >
      <LogOutIcon />
      Logout
    </Button>
  );
}

export default LogoutUser;
