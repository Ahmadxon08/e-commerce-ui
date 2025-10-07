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
