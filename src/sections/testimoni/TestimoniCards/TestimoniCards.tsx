import { getAllTestimoni } from "@/api/testimoni";
import { TestimoniImage } from "@/types/databases";
import { useQuery } from "@tanstack/react-query";
import TestimoniCardLoad from "./TestimoniCardLoad";
import TestimoniCard from "./TestimoniCard";

export default function TestimoniCards() {
  const { data, isLoading } = useQuery<TestimoniImage[], Error>({
    queryKey: ["testimoni"],
    queryFn: getAllTestimoni,
  });

  return (
    <section className="px-3 py-5">
      {isLoading ? (
        <TestimoniCardLoad />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data?.map((data, i) => <TestimoniCard key={i} {...data} />)}
        </div>
      )}
    </section>
  );
}
