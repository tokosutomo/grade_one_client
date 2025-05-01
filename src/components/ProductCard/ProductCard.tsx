import { TProductCard } from "@/types/TProductCard";
import { useRouter } from "@tanstack/react-router";

export default function ProductCard(props: TProductCard) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer shadow-md p-3"
      onClick={() => router.navigate({ to: `/product/${props.id}` })}
    >
      <div className="w-full mb-3">
        <img
          className="aspect-square object-cover"
          width={300}
          height={300}
          src={props.photos[0].url}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col justify-start gap-1">
        <h4 className="font-light text-sm">{props.brand.name}</h4>
        <div className="flex items-start justify-between gap-3">
          <h5 className="font-semibold">{props.name}</h5>
          <p className="text-sm text-nowrap">{`${
            props.ram === 0 ? "" : props.ram
          }${props.ram === 0 ? "" : "/"}${props.memory} GB`}</p>
        </div>
        <h6 className="text-red-600 font-bold text-sm">
          {props.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h6>
      </div>
    </div>
  );
}
