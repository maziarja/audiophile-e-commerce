"use client";

import { MenuIcon, ShoppingCartIcon, XIcon } from "lucide-react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../home/MobileMenu";
import Products from "./Products";
import { useSearchParams } from "next/navigation";

function Navbar() {
  const nav = [
    { title: "home", href: "/" },
    { title: "headphones", href: "/category?type=headphones" },
    { title: "speakers", href: "/category?type=speakers" },
    { title: "earphones", href: "/category?type=earphones" },
  ];

  const searchParams = useSearchParams();
  const category = searchParams.get("type");

  return (
    <MobileMenu>
      <MobileMenu.Overlay />
      <div className="bg-[#191919]">
        <div className="flex max-w-[1110px] items-center justify-between border-b border-[#979797]/11 px-6 py-8 md:mx-6 md:px-0 md:min-[1150px]:mx-auto">
          <MobileMenu.ContentTrigger>
            {({ isOpenMenu }) =>
              isOpenMenu ? (
                <XIcon color="white" className="lg:hidden" />
              ) : (
                <MenuIcon color="white" className="lg:hidden" />
              )
            }
          </MobileMenu.ContentTrigger>
          <Link className="z-99" href={"/"}>
            <Image src={logo} alt="logo" loading="eager" width={0} height={0} />
          </Link>
          <div className="hidden space-x-[34px] lg:flex">
            {nav.map((n) => (
              <Link
                href={n.href}
                key={n.title}
                className={`font hover:text-primary active:text-primary cursor-pointer text-[13px] leading-[25px] font-bold tracking-[2px] uppercase ${n.title === category ? "text-[#d87d4a]" : "text-white"}`}
              >
                {n.title}
              </Link>
            ))}
          </div>

          <ShoppingCartIcon color="white" className="z-99" />
        </div>
      </div>

      <MobileMenu.Content>
        {({ closeMenu }) => (
          <Products
            closeMenu={closeMenu}
            className="py-8 md:pt-14 md:pb-16.75"
          />
        )}
      </MobileMenu.Content>
    </MobileMenu>
  );
}

export default Navbar;
