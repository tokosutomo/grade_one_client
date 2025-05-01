import Footer from "@/components/Footer";
import NavigationSearch from "@/sections/search/NavigationSearch";
import ProductFIltered from "@/sections/search/ProductFiltered/ProductFiltered";
import { createFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
  component: RouteComponent,
});

function RouteComponent() {
  const { q: query }: { q: string } = useSearch({ from: "/search" });
  return (
    <div>
      <NavigationSearch query={query} />

      <ProductFIltered query={query} />

      <Footer />
    </div>
  );
}
