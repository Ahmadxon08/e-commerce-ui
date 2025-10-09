import ProductInteraction from "@/components/ProductInteraction";
import { formatCurrency } from "@/utils/utils";
import Image from "next/image";

import React from "react";

const product = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
  quantity: 1,
  selectedColor: "green",
  selectedSize: "m",
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    title: product.name,
    description: product.shortDescription,
  };
};

const ProductDetails = async ({
  searchParams,
}: {
  searchParams: { color?: string; size?: string };
}) => {
  const { size, color } = await searchParams;

  const selectedSize = searchParams.size || product.sizes[0];
  const selectedColor = (color ||
    product.colors[0]) as keyof typeof product.images;

  return (
    <div className="flex flex-col gap-3 md:flex-row mt-12">
      <div className="flex w-full md:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* card details */}
      <div className="flex w-full gap-4 flex-col md:w-7/12">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">
          {formatCurrency(product.price)}
        </h2>
        <ProductInteraction
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />

        <div className="flex flex-col items-start gap-3 ">
          <div className="flex items-center gap-3">
            <Image
              src={"/klarna.png"}
              alt="klarna"
              width={50}
              height={25}
              className="rounded-md"
            />
            <Image
              src={"/cards.png"}
              alt="klarna"
              width={50}
              height={25}
              className="rounded-md"
            />
            <Image
              src={"/stripe.png"}
              alt="klarna"
              width={50}
              height={25}
              className="rounded-md"
            />
          </div>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            vitae excepturi dolore eligendi ratione corrupti,
            <span className="underline hover:text-black">
              {" "}
              non molestias rerum, obcaecati,
            </span>
            ducimus neque ullam commodi sequi doloremque illo iste temporibus
            <span className="underline hover:text-black">
              praesentium architecto itaque? Voluptatibus distinctio
            </span>
            animi assumenda, similique eum necessitatibus error asperiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
