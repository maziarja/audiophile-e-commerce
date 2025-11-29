import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const nav = [
    { title: "home", href: "/" },
    { title: "headphones", href: "/headphones" },
    { title: "speakers", href: "/speakers" },
    { title: "earphones", href: "/earphones" },
  ];

  return (
    <div className="flex items-center justify-between border-b border-b-[#979797] px-6 py-8">
      <MenuIcon color="white" className="lg:hidden" />
      <Image src={logo} alt="logo" loading="eager" width={0} height={0} />
      <div className="hidden space-x-[34px] lg:flex">
        {nav.map((n) => (
          <Link
            href={n.href}
            key={n.title}
            className="font hover:text-primary active:text-primary cursor-pointer text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase"
          >
            {n.title}
          </Link>
        ))}
      </div>
      <ShoppingCartIcon color="white" />
    </div>
  );
}

export default Navbar;
