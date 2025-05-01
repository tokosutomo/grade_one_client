import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Photo } from "@/types/databases";

type TCarosel = {
  photos: Photo[];
  isClick: (value: boolean) => void;
};

export default function Carosel(props: TCarosel) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onClick={() => {
        props.isClick(true);
      }}
    >
      {props.photos.map((photo, i) => (
        <SwiperSlide key={i}>
          <img src={photo.url} alt={photo.id} width={500} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
