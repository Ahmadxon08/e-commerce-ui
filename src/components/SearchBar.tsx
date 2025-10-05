import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 shadow-md rounded-md ring-1 ring-gray-200 px-2 py-1">
      <label htmlFor="search">
        <Search className="size-4 cursor-pointer text-gray-500" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        name="search"
        className="text-sm outline-0"
      />
    </div>
  );
};

export default SearchBar;
