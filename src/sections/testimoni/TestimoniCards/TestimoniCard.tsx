import { TestimoniImage } from "@/types/databases";

export default function TestimoniCard(props: TestimoniImage) {
  return (
    <div>
      <img className="object-cover aspect-square object-center" src={props.url} alt={props.id} />
    </div>
  );
}
