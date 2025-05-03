import AlertOrder from "@/sections/order/AlertOrder";
import MethodPayment from "@/sections/order/MethodPayment";
import NavOrder from "@/sections/order/NavOrder";
import OrdersDetails from "@/sections/order/OrderDetails/OrderDetails";
import Total from "@/sections/order/OrderDetails/TotalNav";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <NavOrder />

      <OrdersDetails />

      <MethodPayment />

      <AlertOrder />

      <Total />
    </div>
  );
}
