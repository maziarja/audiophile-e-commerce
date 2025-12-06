import logo from "@/public/assets/logo.svg";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className="bg-[#101010] px-6 pb-9.5 md:px-10 md:pb-11.5">
      <div className="mx-auto max-w-[1110px] lg:relative">
        <div className="mb-12 flex flex-col gap-12 md:mb-8 md:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid justify-center gap-12 md:justify-start md:gap-14 lg:gap-[71px]">
            <div className="mx-auto h-1 w-[70.60%] bg-[#d87d4a] md:mx-0" />
            <Image src={logo} alt={"logo"} width={0} height={0} />
          </div>
          <div className="flex flex-col gap-4 text-center text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase md:flex-row md:gap-8.5">
            <Link
              className="hover:text-[#d87d4a] active:text-[#d87d4a]"
              href={"/"}
            >
              home
            </Link>
            <Link
              className="hover:text-[#d87d4a] active:text-[#d87d4a]"
              href={"/headphones"}
            >
              headphones
            </Link>
            <Link
              className="hover:text-[#d87d4a] active:text-[#d87d4a]"
              href={"/speakers"}
            >
              speakers
            </Link>
            <Link
              className="hover:text-[#d87d4a] active:text-[#d87d4a]"
              href={"/earphones"}
            >
              earphones
            </Link>
          </div>
        </div>

        <p className="mb-12 text-center text-[15px] leading-[25px] font-medium text-white opacity-50 md:mb-20 md:text-left lg:mb-15 lg:w-[49%]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <p className="text-center text-[15px] leading-[25px] font-bold text-white opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="mx-auto flex items-center gap-4 md:mx-0 lg:absolute lg:top-50 lg:right-0">
            <SiFacebook
              color="#FFFFFF"
              className="cursor-pointer hover:fill-[#d87d4a]"
            />
            <SiX
              color="#FFFFFF"
              className="cursor-pointer hover:fill-[#d87d4a]"
            />
            <SiInstagram
              color="#FFFFFF"
              className="cursor-pointer hover:fill-[#d87d4a]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
