import { createFileRoute } from "@tanstack/react-router";
import MainNavbar from "../components/Navbar/MainNavbar";

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
          {/* <section className="ps-3 mt-5">
        <h3 className="text-lg font-semibold mt-3">Belanja Sesuai Merek</h3>
        <div className="mt-3">
          <Suspense fallback={<BrandLogoLoad />}>
            <SectionBrands />
          </Suspense>
        </div>
      </section> */}
    </div>
  );
}
