import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

function Authentication() {
  const [activeTab, setActiveTab] = useState<"signIn" | "joinUs">("signIn");
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as "signIn" | "joinUs")}
      className="w-[330px] sm:w-[400px]"
    >
      <div className="mb-2 flex flex-col items-center justify-center gap-4 rounded-md bg-black p-4">
        <Image src={logo} alt="logo" />

        <p className="text-center text-[15px] font-medium text-white">
          Sign in to access your account, track your orders, explore new
          challenges, and enjoy 10% off all your purchases.
        </p>
      </div>
      <TabsList className="w-full">
        <TabsTrigger value="signIn">Sign In</TabsTrigger>
        <TabsTrigger value="joinUs">Join Us</TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <SignInForm />
      </TabsContent>
      <TabsContent value="joinUs">
        <SignUpForm onActiveTab={setActiveTab} />
      </TabsContent>
    </Tabs>
  );
}

export default Authentication;
