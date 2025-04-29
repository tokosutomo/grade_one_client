import { fetchBrands } from "@/api/brand";
import { Brand } from "@/types/databases";
import { useQuery } from "@tanstack/react-query";
import BrandLogo from "./BrandLogo/BrandLogo";
import BrandLogoLoad from "./BrandLogo/BrandLogoLoad.";

export default function Brands() {
  const {
    isLoading,
    error,
    data: brands,
  } = useQuery<Brand[], Error>({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  if (error)
    return (
      <div className="text-center px-5 mt-5">
        <p className="font-light text-red-500">
          Something Wrong with the server!, but you still can checkout your
          phone
        </p>
      </div>
    );

  return (
    <section className="ps-3 mt-5">
      <h3 className="text-lg font-semibold mt-3">Belanja Sesuai Merek</h3>
      <div className="mt-3">
        <div className="flex gap-4">
          {isLoading ? (
            <BrandLogoLoad />
          ) : (
            brands?.map((data, i) => <BrandLogo {...data} key={i} />)
          )}
        </div>
      </div>
    </section>
  );
}
