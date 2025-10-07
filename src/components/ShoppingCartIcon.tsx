"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href={"/cart"} className="relative">
      <ShoppingCart className="text-gray-600 size-4" />
      <span className="absolute -top-3 text-xs font-semibold -right-3 justify-center items-center flex bg-amber-400 text-gray-600 rounded-full w-4 h-4">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
