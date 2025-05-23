import getOrders from "@/api/order";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/orders")({
  loader: () => getOrders(),
  component: RouteComponent,
});

function RouteComponent() {
  const loaderData = useLoaderData({ from: "/admin/orders" });

  return (
    <div className="flex flex-col gap-2">
      {loaderData.map((data, i) => (
        <div key={i} className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">#{data.id.slice(-7)}</h2>
            <div>
              {data.products.map((product, iProduct) => (
                <p key={iProduct}>
                  * {product.name} - ${product.ram ? product.ram + "/" : ""}$
                  {product.memory}GB
                </p>
              ))}
            </div>
            <p>lokasi cod :{data.location_input}</p>
            <p>
              total :
              {data.total.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
