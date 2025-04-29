import { createFileRoute } from "@tanstack/react-router";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Brands from "@/sections/index/BrandSection/Brands";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen relative">
      {/* Navigation */}
      <MainNavbar />

      {/* carosel news */}
      <section>
        <div className="w-full bg-gray-700 h-40"></div>
      </section>

      {/* quick search by brand */}
      <Brands />
    </div>
  );
}
