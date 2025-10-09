"use client";
import { Minus, Plus, ShoppingCartIcon } from "lucide-react";
import { ProductType } from "./types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useStore from "@/store/cartStore";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("Product added to cart!");
  };
  return (
    <div className="flex flex-col gap-4 mt-4 ">
      {/* Size  */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center  gap-3">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 rounded-md p-[2px] ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`flex items-center text-[16px] rounded-md justify-center w-6 h-6 ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center  gap-3">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedColor === color ? "border-gray-600" : "border-gray-300"
              }`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div
                className="w-6 h-6"
                style={{
                  backgroundColor: color,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex gap-2">
          <button
            className="flex items-center justify-center cursor-pointer border-1 border-gray-300 p-1 "
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="flex items-center justify-center cursor-pointer border-1 border-gray-300 p-1 "
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* button */}
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <Plus className="w-4 h-4" /> Add to Cart
      </button>
      <button className="bg-white transition-all duration-300 hover:ring-1 ring-gray-800  text-gray-800 px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <ShoppingCartIcon className="w-4 h-4" /> Shopping this Item
      </button>
    </div>
  );
};

export default ProductInteraction;
