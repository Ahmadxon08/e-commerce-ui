"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { shippingFormInputs } from "@/components/types";
import useStore from "@/store/cartStore";
import { formatCurrency } from "@/utils/utils";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const steps = [
  {
    id: 1,
    text: "Shopping Cart",
  },
  {
    id: 2,
    text: "Shipping Adress",
  },
  {
    id: 3,
    text: "Payment Method",
  },
];

// const cartItems: cartType[] = [
//   {
//     id: 1,
//     name: "Adidas CoreFit T-Shirt",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 39.9,
//     sizes: ["s", "m", "l", "xl", "xxl"],
//     colors: ["gray", "purple", "green"],
//     images: {
//       gray: "/products/1g.png",
//       purple: "/products/1p.png",
//       green: "/products/1gr.png",
//     },
//     quantity: 1,
//     selectedColor: "green",
//     selectedSize: "m",
//   },
//   {
//     id: 2,
//     name: "Puma Ultra Warm Zip",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//     quantity: 1,
//     selectedColor: "gray",
//     selectedSize: "xl",
//   },
//   {
//     id: 3,
//     name: "Puma Ultra Warm Zip",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//     quantity: 1,
//     selectedColor: "gray",
//     selectedSize: "xl",
//   },
//   {
//     id: 4,
//     name: "Puma Ultra Warm Zip",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//     quantity: 1,
//     selectedColor: "gray",
//     selectedSize: "xl",
//   },
// ];
const CartPage = () => {
  const [shippingForm, setShippingForm] = useState<shippingFormInputs | null>(
    null
  );

  const router = useRouter();
  const searchParams = useSearchParams();
  const { cart, removeFromCart } = useStore();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col gap-8 items-center mt-12">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        {steps.map((step) => (
          <div
            className={`flex items-center justify-center gap-3 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800 " : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`flex justify-center items-center rounded-full text-white p-4 w-6 h-6 ${
                step.id === activeStep ? "bg-gray-800 " : "bg-gray-400"
              } `}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800 " : "text-gray-400"
              }`}
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* step details sections */}
      <div className="w-full flex flex-col md:flex-row  gap-16">
        {/* step? */}
        <div className="w-full flex-col rounded-md flex gap-6 border-gray-100 shadow-lg p-4 md:max-w-7/12">
          {activeStep === 1 ? (
            cart.map((item) => (
              <div
                className="flex items-center border-b-1 border-gray-200 pb-2 justify-between"
                key={item.id + item.selectedColor + item.selectedSize}
              >
                {/* image side of the cardimage side of the card */}
                <div className="flex  gap-3">
                  {/* Image of card */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor]}
                      fill
                      alt={item.name}
                      className="object-contain"
                    />
                  </div>
                  {/* Details of the card */}
                  <div className="flex flex-col justify-between">
                    <div className=" flex flex-col gap-1 ">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sx text-gray-500 gap-2">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sx text-gray-500 gap-2">
                        Color: {item.selectedColor}
                      </p>
                      <p className="text-sx text-gray-500 gap-2">
                        Size: {item.selectedSize}
                      </p>
                    </div>
                    <p className="font-medium">{formatCurrency(item.price)}</p>{" "}
                  </div>
                </div>
                {/* Button of delete */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="flex justify-center cursor-pointer items-center w-6 h-6 bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 rounded-full"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-400">
              Please fill in the shipping form to continue
            </p>
          )}
        </div>
        {/* details? */}
        <div className="w-full flex-col rounded-md sticky top-6 flex gap-6 h-max border-gray-100 shadow-lg p-4 md:max-w-4/12">
          <h2>Cart Details</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="text-sm font-medium">{formatCurrency(total)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Discount(10%)</p>
              <p className="text-sm font-medium text-red-400">-$10</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Shipping fee</p>
              <p className="text-sm font-medium text-green-400">$10</p>
            </div>
            <div className="bg-gray-300 w-full h-[1.5px]" />
            <div className="flex justify-between">
              <p className="text-sm text-gray-800 font-semibold">Total</p>
              <p className="text-sm font-medium">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="flex justify-center items-center gap-3 bg-gray-800 hover:bg-gray-900 transition-all duration-300 cursor-pointer text-white  w-full rounded-md py-2"
            >
              Continue <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
