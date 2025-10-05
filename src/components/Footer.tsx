import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:items-start md:justify-between bg-gray-800 p-2 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={36}
            height={36}
            className="size-16 md:size-9 "
          />
          <p className="text-md hidden md:block font-medium text-white tracking-wider">
            Trend Shop
          </p>
        </Link>
        <p className="text-xs text-white">&copy; 2025 Trend Shop</p>
        <p className="text-xs text-white">All rights reversed</p>
      </div>
      <div className="flex flex-col gap-3 text-sm text-gray-400  items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"} className="  hover:text-gray-300">
          Home
        </Link>
        <Link href={"/"} className=" hover:text-gray-300 ">
          Contact
        </Link>
        <Link href={"/"} className=" hover:text-gray-300 ">
          Term of the Service
        </Link>
        <Link href={"/"} className="  hover:text-gray-300">
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-3 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>All Products</Link>
        <Link href={"/"}>New Arrivals</Link>
        <Link href={"/"}>Best sellers</Link>
        <Link href={"/"}>Sale</Link>
      </div>
      <div className="flex flex-col gap-3 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
