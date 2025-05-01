import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom } from "swiper/modules";
import { Dispatch, SetStateAction } from "react";
import { ImCancelCircle } from "react-icons/im";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Photo } from "@/types/databases";

type TCarosel = {
  photos: Photo[];
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export default function PhotosZoom(props: TCarosel) {
  return props.isActive ? (
    <article className="z-40 fixed top-0 left-0 w-full min-h-screen bg-gray-900 flex justify-center items-center">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Zoom]}
        className="mySwiper mb-20"
        zoom={true}
      >
        {props.photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-zoom-container">
              <img src={photo.url} alt={photo.id} width={500} height={500} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="text-5xl text-gray-400 fixed z-50 bottom-10 right-1/2 translate-x-1/2"
        onClick={() => props.setIsActive(false)}
      >
        <ImCancelCircle />
      </button>
    </article>
  ) : (
    ""
  );
}
