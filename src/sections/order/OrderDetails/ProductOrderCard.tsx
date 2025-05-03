import { TProductCard } from "@/types/TProductCard";
import RemoveOrderButton from "./RemoveOrderButton";

export default function ProductOrderCard(props: TProductCard) {
  return (
    <article className="flex gap-5 shadow-md p-3 relative">
      <RemoveOrderButton id={props.id} />
      <img
        src={props.photos[0].url}
        alt={props.name}
        width={200}
        height={200}
        className="object-cover aspect-square w-36"
      />
      <div>
        <h4 className="text-2xl font-semibold">{props.name}</h4>
        <div className="font-medium">
          {props.ram === 0 ? "" : <p>Ram : {props.ram}</p>}
          <p>Memory : {props.memory}</p>
          <p>Grade : {props.grade}</p>
        </div>

        <h5 className="font-light text-sm mt-3">
          {props.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h5>
      </div>
    </article>
  );
}
