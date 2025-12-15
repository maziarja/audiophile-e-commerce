"use client";

import { MenuIcon, ShoppingCartIcon, UserIcon, XIcon } from "lucide-react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../home/MobileMenu";
import Products from "./Products";
import { useCart } from "@/app/_contexts/CartContext";
import UserAccount from "../auth/UserAccount";
import { DBCartType } from "@/lib/schemas/cartType";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";

function Navbar({
  loggedInUser,
  cartDB,
}: {
  loggedInUser: boolean;
  cartDB: DBCartType;
}) {
  const nav = [
    { title: "home", href: "/" },
    { title: "headphones", href: "/category?type=headphones" },
    { title: "speakers", href: "/category?type=speakers" },
    { title: "earphones", href: "/category?type=earphones" },
  ];

  const { cart } = useCart();
  const quantity = loggedInUser
    ? cartDB.reduce((acc, cur) => acc + cur.quantity, 0)
    : cart.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <MobileMenu>
      <MobileMenu.Overlay />
      <div className="bg-[#191919]">
        <div className="flex max-w-[1110px] items-center justify-between border-b border-[#979797]/11 px-6 py-8 md:mx-10 md:justify-start md:gap-10.5 md:px-0 md:min-[1150px]:mx-auto lg:justify-between lg:pb-9">
          <MobileMenu.ContentTrigger>
            {({ isOpenMenu }) =>
              isOpenMenu ? (
                <XIcon color="white" className="lg:hidden" />
              ) : (
                <MenuIcon color="white" className="lg:hidden" />
              )
            }
          </MobileMenu.ContentTrigger>
          <Link className="z-99 ml-8 md:ml-0" href={"/"}>
            <Image src={logo} alt="logo" loading="eager" width={0} height={0} />
          </Link>
          <div className="hidden space-x-[34px] lg:flex">
            {nav.map((n) => (
              <Link
                href={n.href}
                key={n.title}
                className={`font hover:text-primary active:text-primary cursor-pointer text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase`}
              >
                {n.title}
              </Link>
            ))}
          </div>
          <div className="z-99 flex items-center gap-2 md:ml-auto lg:ml-0">
            <UserAccount
              trigger={<UserIcon className="text-white" />}
              loggedInUser={loggedInUser}
            />
            <div className="relative">
              <DropdownMenuTrigger asChild>
                <ShoppingCartIcon
                  color="white"
                  className="cursor-pointer md:ml-auto lg:ml-0"
                />
              </DropdownMenuTrigger>
              {quantity > 0 && (
                <p className="absolute -top-4 -right-3 flex size-4.5 items-center justify-center rounded-full bg-white text-xs font-bold">
                  {quantity}
                </p>
              )}
            </div>
          </div>
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
