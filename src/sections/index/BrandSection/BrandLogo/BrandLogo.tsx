import { useRouter } from "@tanstack/react-router";
import { Brand } from "@/types/databases";

type BrandLogo = Brand;

export default function BrandLogo(props: BrandLogo) {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.navigate({ to: `/search?q=${props.name}` })}
    >
      <div className="flex justify-center w-[65px] h-[65px] overflow-hidden rounded-full">
        <img
          src={props.url}
          alt={props.id}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <h6 className="w-auto text-center">{props.name}</h6>
    </div>
  );
}
