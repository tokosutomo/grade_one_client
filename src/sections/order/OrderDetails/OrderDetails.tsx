import { TProductCard } from "@/types/TProductCard";
import { Link } from "@tanstack/react-router";
import { BsCart4 } from "react-icons/bs";
import ProductOrderCard from "./ProductOrderCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByLocalStorage } from "@/api/products";
import ProductOrderCardLoad from "./ProductOrderCardLoad";

export default function OrdersDetails() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery<TProductCard[], Error>({
    queryKey: ["order"],
    queryFn: () => fetchProductsByLocalStorage(),
  });

  if (error)
    return (
      <div className="flex flex-col text-center items-center justify-center bg-gray-200 px-2 py-4 gap-3">
        <BsCart4 className="text-center text-6xl" />
        <div>
          <p className="mb-3">Belum ada produk yang bisa dibelanjakan nih</p>
          <Link
            className="text-blue-600 border border-blue-600 p-2 active:bg-blue-600 active:text-white"
            to={"/"}
          >
            Belanja Sekarang
          </Link>
        </div>
      </div>
    );

  if (isLoading) return <ProductOrderCardLoad />;

  return (
    <div className="p-5 flex flex-col gap-2">
      {products?.map((product, i) => <ProductOrderCard key={i} {...product} />)}
    </div>
  );
}
