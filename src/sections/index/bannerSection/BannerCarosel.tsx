import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Banner } from "@/types/databases";

type TBannerCarosel = {
  banners: Banner[];
};

export default function BannerCarosel(props: TBannerCarosel) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 3000,
      }}
    >
      {props.banners.map((banner, i) => (
        <SwiperSlide
          key={i}
          onClick={
            banner.url_navigation !== "undefined"
              ? () => window.location.replace(String(banner.url_navigation))
              : () => {}
          }
        >
          <img
            src={banner.url_image}
            alt={banner.id}
            height={500}
            className="w-full object-cover h-44 object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
