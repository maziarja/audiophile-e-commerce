"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductLinkProps {
  title: string;
  closeMenu?: () => void;
}

export default function ProductLink({ title, closeMenu }: ProductLinkProps) {
  return (
    <Link
      href={`/category?type=${encodeURIComponent(title)}`}
      onClick={() => closeMenu?.()}
      className="mx-auto flex items-center gap-1 text-center"
    >
      <span className="text-[13px] font-bold tracking-[1px] opacity-50">
        SHOP
      </span>
      <ChevronRight color="#d87d4a" size={20} />
    </Link>
  );
}
