import { fetchProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import ProductCardLoad from "./ProductCard/ProductCardLoad";
import ProductCard from "./ProductCard/ProductCard";
import { TProductCard } from "@/types/TProductCard";

export default function ProductSection() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery<TProductCard[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (error)
    return (
      <div className="text-center px-5 mt-5">
        <p className="font-light text-red-500">
          Something Wrong with the server!, please try next time
        </p>
      </div>
    );

  return (
    <section className="px-3 py-5">
      <h3 className="text-lg font-semibold mt-3">Untuk Kamu</h3>
      <div className="mt-3">
        {isLoading ? (
          <ProductCardLoad />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products?.map((data, i) => <ProductCard {...data} key={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}
