import { fetchProductsByQuery } from "@/api/products";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductCardLoad from "@/components/ProductCard/ProductCardLoad";
import { TProductCard } from "@/types/TProductCard";
import { useQuery } from "@tanstack/react-query";
import { TbMoodEmpty } from "react-icons/tb";

export default function ProductFIltered({
  query,
}: {
  query: string | string[] | undefined;
}) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery<TProductCard[], Error>({
    queryKey: ["search", query],
    queryFn: ({ queryKey }) => {
      const [, q] = queryKey;
      return fetchProductsByQuery(q as string);
    },
  });

  if (error)
    return (
      <section className="px-3 py-5">
        <p className="font-light text-red-500 text-center">
          Something Wrong with the server, please try next time!
        </p>
      </section>
    );

  if (products?.length === 0) {
    return (
      <section className="px-3 py-5">
        <div className="flex justify-center mb-3">
          <TbMoodEmpty className="text-7xl text-red-500" />
        </div>
        <p className="text-gray-600 text-center">
          Hasil tidak ditemukan. Coba cari dengan kata berbeda.
        </p>
      </section>
    );
  }

  return (
    <section className="px-3 py-5">
      {isLoading ? (
        <ProductCardLoad />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products?.map((data, i) => <ProductCard {...data} key={i} />)}
        </div>
      )}
    </section>
  );
}
