import MainNavbar from "@/components/Navbar/MainNavbar";
import TestimoniCards from "@/sections/testimoni/TestimoniCards/TestimoniCards";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimoni")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <MainNavbar />

      <TestimoniCards />
    </div>
  );
}
