import AddressInput from "@/sections/order/AddressInput";
import AlertOrder from "@/sections/order/AlertOrder";
import MethodPayment from "@/sections/order/MethodPayment";
import NavOrder from "@/sections/order/NavOrder";
import OrdersDetails from "@/sections/order/OrderDetails/OrderDetails";
import Total from "@/sections/order/TotalNav";
import { createFileRoute } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";

export const Route = createFileRoute("/order")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ToastContainer limit={2} />

      <NavOrder />

      <OrdersDetails />

      <AddressInput />

      <MethodPayment />

      <AlertOrder />

      <Total />
    </div>
  );
}
