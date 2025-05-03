"use client";

import Button from "@/components/Button";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByLocalStorage } from "@/api/products";

export default function Total() {
  const {
    isLoading,
    error,
    data: total,
  } = useQuery({
    queryKey: ["total"],
    queryFn: async () => {
      const getProductsOrder = await fetchProductsByLocalStorage();

      const dataSubtotal = getProductsOrder.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );

      return dataSubtotal;
    },
  });

  if (isLoading) {
    return (
      <div className="sticky bottom-0 right-0 w-full border-t px-2 py-4 bg-white dark:bg-black">
        <h5 className="font-bold mb-3">Total Harga</h5>
        <div className="flex space-y-2 flex-col">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="font-light text-sm">Sub Total</p>
              <div className="h-2 rounded bg-gray-200 w-14  animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-light text-sm">Ongkir</p>
              <div className="h-2 rounded bg-gray-200 w-14  animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm">Total</p>
              <div className="h-4 rounded bg-gray-200 w-1/2"></div>
            </div>
            <Button disabled={true}>
              <p className="font-extrabold text-xl">Beli Sekarang</p>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky bottom-0 right-0 w-full border-t px-2 py-4 bg-white dark:bg-black">
      <h5 className="font-bold mb-3">Total Harga</h5>
      <div className="flex space-y-2 flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-light text-sm">Sub Total</p>
            <p className="font-extralight text-sm">
              {total?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-light text-sm">Ongkir</p>
            <div className="flex items-center gap-1">
              <p className="font-extralight text-sm line-through">Rp 10,000</p>
              <p className="font-extralight text-sm">
                (<span className="no-underline text-red-500">0</span>)
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm">Total</p>
            <p className="font-semibold text-xl">
              {total?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <Button disabled={!(Number(total) > 0)}>
            <p className="font-extrabold text-xl">Beli Sekarang</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
