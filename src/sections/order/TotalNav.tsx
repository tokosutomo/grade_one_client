"use client";

import Button from "@/components/Button";
import { MutationFunction, useMutation, useQuery } from "@tanstack/react-query";
import { fetchProductsByLocalStorage } from "@/api/products";
import { postOrder } from "@/api/order";
import { Bounce, toast } from "react-toastify";
import adminInfo from "@/utils/adminInfo";
import { useRef, useState } from "react";

export interface IOrderBody {
  total: number;
  location_input: string;
  products_id: string;
}

const createOrder: MutationFunction<string, IOrderBody> = async (data) => {
  try {
    const res = await postOrder(data);
    return res;
  } catch (error) {
    throw new Error("something wrong");
  }
};

export default function Total() {
  const toastId = useRef<string | number | null>(null);
  const [
    isEnableCheckoutWhileCreateOrder,
    setIsEnableCheckoutWhileCreateOrder,
  ] = useState(true);
  const { isLoading, data: total } = useQuery({
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

  const { mutate } = useMutation({
    mutationFn: createOrder,
    mutationKey: ["createOrder"],
    onMutate() {
      setIsEnableCheckoutWhileCreateOrder(false);
      toastId.current = toast.loading("sedang membuat order...", {
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    onSuccess(data) {
      if (toastId.current !== null) {
        toast.dismiss(toastId.current);
        setIsEnableCheckoutWhileCreateOrder(true);
        toast.success(`Pesanan sudah dibuat dengan id #${data}`, {
          position: "top-center",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
      open(
        `https://wa.me/${adminInfo.noWhatsapp}?text=hai kak, order id saya (${data})?`,
        "_blank"
      );
    },
    onError() {
      toast.error("Something Wrong!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
  });

  const orderAction = async () => {
    const addressValue = localStorage.getItem("address") as string;
    let products_id = localStorage.getItem("productOrder") as string;

    products_id = JSON.parse(products_id);

    const data: IOrderBody = {
      total: total || 0,
      location_input: addressValue,
      products_id,
    };

    mutate(data);
  };

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
          <Button
            disabled={!(Number(total) > 0) || !isEnableCheckoutWhileCreateOrder}
            onClick={orderAction}
          >
            <p className="font-extrabold text-xl">Beli Sekarang</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
