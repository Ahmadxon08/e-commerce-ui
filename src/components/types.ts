import z from "zod";

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type CartItemsType = ProductType & {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
};

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().min(1, "Email is required!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits")
    .max(10, "Phone number must be between 7 and 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers!"),
});

export type shippingFormInputs = z.infer<typeof shippingFormSchema>;

////////////////Payment Form

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "Card number must be exactly 16 digits!"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiration date (MM/YY)!"),

  cvv: z.string().regex(/^\d{3}$/, "CVV must be exactly 3 digits!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType[];
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemsType) => void;
  removeFromCart: (product: CartItemsType) => void;
  clearCart: () => void;
};
