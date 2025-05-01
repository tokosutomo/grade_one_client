import { useState } from "react";
import Carosel from "./Carosel";
import { TProductCard } from "@/types/TProductCard";
import PhotosZoom from "./PhotosZoom";

export default function DetailSection(props: TProductCard) {
  const [isZoomActive, setIsZoomActive] = useState(false);

  return (
    <article className="min-h-screen">
      <PhotosZoom
        photos={props.photos}
        isActive={isZoomActive}
        setIsActive={setIsZoomActive}
      />
      <Carosel photos={props.photos} isClick={setIsZoomActive} />
      <div className="p-5">
        <div className="flex gap-7 mb-5">
          <h6 className="font-thin">{props.brand.name}</h6>
          <h6 className="font-thin">Grade {props.grade}</h6>
        </div>

        <h4 className="text-2xl font-semibold mb-2">{props.name}</h4>
        <p className="text-xl font-semibold text-red-600 mb-5">
          {props.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>

        <pre className="text-wrap">{props.description}</pre>
      </div>
    </article>
  );
}
