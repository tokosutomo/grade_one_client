import { createFileRoute } from "@tanstack/react-router";
import MainNavbar from "@/components/Navbar/MainNavbar";
import BrandsSection from "@/sections/index/BrandSection/BrandsSection";
import ProductSection from "@/sections/index/ProductsSection/ProductSection";
import ButtonCart from "@/components/ButtonCard";
import Footer from "@/components/Footer";
import BannerSection from "@/sections/index/bannerSection/BannerSection";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen relative">
      {/* Navigation */}
      <MainNavbar />

      {/* carosel news */}
      <BannerSection />

      {/* quick search by brand */}
      <BrandsSection />

      {/* quick search by brand */}
      <ProductSection />

      {/* action fogo to order page */}
      <ButtonCart />

      {/* footer */}
      <Footer />
    </div>
  );
}
