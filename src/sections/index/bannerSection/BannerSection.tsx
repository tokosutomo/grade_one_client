import { fetchBanners } from "@/api/banner";
import { Banner } from "@/types/databases";
import { useQuery } from "@tanstack/react-query";
import BannerCaroselLoad from "./BannerCaroselLoad";
import BannerCarosel from "./BannerCarosel";

export default function BannerSection() {
  const {
    isLoading,
    error,
    data: banners,
  } = useQuery<Banner[], Error>({
    queryKey: ["banners"],
    queryFn: fetchBanners,
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
    <section>
      <div>
        {isLoading ? (
          <BannerCaroselLoad />
        ) : (
          <BannerCarosel banners={banners!} />
        )}
      </div>
    </section>
  );
}
