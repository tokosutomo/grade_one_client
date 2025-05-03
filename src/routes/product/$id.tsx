import { fetchProduct } from "@/api/products";
import ButtonAction from "@/sections/product/ButtonActions.tsx/ButtonsAction";
import DetailSection from "@/sections/product/DetailSection";
import NavbarProduct from "@/sections/product/NavbarProduct";
import {
  createFileRoute,
  useLoaderData,
  useParams,
} from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";

export const Route = createFileRoute("/product/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return fetchProduct(params.id);
  },
});

function RouteComponent() {
  const { id } = useParams({ from: "/product/$id" });
  const loaderData = useLoaderData({ from: "/product/$id" });

  return (
    <div className="relative">
      <ToastContainer limit={2} />

      {/* navigation */}
      <NavbarProduct />

      {/* detail information of product */}
      <DetailSection {...loaderData} />

      <ButtonAction id={id} />
    </div>
  );
}
