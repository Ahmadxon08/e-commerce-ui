"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { shippingFormInputs, shippingFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: shippingFormInputs) => void;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const handleSubmitForm: SubmitHandler<shippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-3"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="
          email"
          placeholder="johndoe@gmail.com"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Phone Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="phone"
          placeholder="123456789"
          {...register("phone")}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="address"
          placeholder="123, Main St, Anytown"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-red-500"> {errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          type="text"
          id="city"
          placeholder="New York"
          {...register("city")}
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
      </div>
      <button
        type="submit"
        className="flex justify-center items-center gap-3 bg-gray-800 hover:bg-gray-900 transition-all duration-300 cursor-pointer text-white  w-full rounded-md py-2"
      >
        Continue <ArrowRight />
      </button>
    </form>
  );
};

export default ShippingForm;
