"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handleSubmitForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-3"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name for CARD
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="cardNumber"
          placeholder="123456789321"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="expirationDate"
          placeholder="01/32"
          {...register("expirationDate", {
            onChange: (e) => {
              let value = e.target.value.replace(/\D/g, "");
              if (value.length > 2) {
                value = value.slice(0, 2) + "/" + value.slice(2, 4);
              }
              e.target.value = value;
            },
          })}
        />
        {errors.expirationDate && (
          <p className="text-red-500">{errors.expirationDate.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="address"
          placeholder="123n"
          {...register("cvv")}
        />
        {errors.cvv && <p className="text-red-500"> {errors.cvv.message}</p>}
      </div>
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

      <button
        type="submit"
        className="flex justify-center items-center gap-3 bg-gray-800 hover:bg-gray-900 transition-all duration-300 cursor-pointer text-white  w-full rounded-md py-2"
      >
        Checkout <ShoppingCart />
      </button>
    </form>
  );
};

export default PaymentForm;
