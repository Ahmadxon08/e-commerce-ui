"use client";

import useStore from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useStore();

  if (!hasHydrated) return null;

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link href={"/cart"} className="relative">
      <ShoppingCart className="text-gray-600 size-4" />
      <span className="absolute -top-3 text-xs font-semibold -right-3 justify-center items-center flex bg-amber-400 text-gray-600 rounded-full w-4 h-4">
        {totalItemsInCart}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
