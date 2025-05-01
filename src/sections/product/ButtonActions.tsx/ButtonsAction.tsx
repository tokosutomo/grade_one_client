import Button from "@/sections/product/ButtonActions.tsx/Button";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { toast, Bounce } from "react-toastify";
import ButtonAddProductToCart from "./ButtonAddToProduct";

export default function ButtonAction({ id }: { id: string }) {
  const addValueProductId = () => {
    let productsOrderId = localStorage.getItem("productOrder");

    if (productsOrderId === null) {
      productsOrderId = "[]";
    }

    const productOrder = JSON.parse(productsOrderId) as Array<string>;

    productOrder.push(id);

    console.log(productOrder);

    localStorage.setItem("productOrder", JSON.stringify(productOrder));

    toast.success(`Produk kamu sudah di keranjang`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <aside className="sticky bottom-0 left-0 w-full bg-white p-3 border-t-2 dark:bg-black">
      <div className="flex items-center">
        <button onClick={addValueProductId}>
          <PiShoppingCartSimpleBold className="text-black-600 text-4xl me-3" />
        </button>
        <Button outline={true}>Tanya Admin</Button>
        <ButtonAddProductToCart productId={id}>
          Beli Sekarang
        </ButtonAddProductToCart>
      </div>
    </aside>
  );
}
