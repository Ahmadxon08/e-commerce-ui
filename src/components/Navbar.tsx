import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Bell, HomeIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between border-b border-gray-200 pb-4 items-center">
      {/* Left */}
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={36}
          height={36}
          className="size-16 md:size-9 "
        />
        <p className="text-md hidden md:block font-medium tracking-wider">
          Trend Shop
        </p>
      </Link>
      {/* Right */}
      <div className="flex gap-2.5 items-center">
        <SearchBar />
        <Link href={"/"}>
          <HomeIcon className="text-gray-600 size-4" />
        </Link>
        <Bell className="text-gray-600 size-4" />

        <ShoppingCartIcon />
        <Link href={"/login"} className="text-gray-600 ">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
