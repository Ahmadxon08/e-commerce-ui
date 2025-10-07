"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center  justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort by:</span>
      <select
        className="ring ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to high</option>
        <option value="desc">Price: High to low</option>
      </select>
    </div>
  );
};

export default Filter;
