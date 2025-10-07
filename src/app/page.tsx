import ProductsList from "@/components/ProductsList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[3/1] w-full mb-12">
        <Image src="/featured.png" alt="logo" fill className="object-cover" />
      </div>
      <ProductsList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
