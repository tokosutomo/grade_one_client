import Button from "@/components/Button";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { toast, Bounce } from "react-toastify";
import ButtonAddProductToCart from "./ButtonAddToProduct";
import adminInfo from "@/utils/adminInfo";

interface TButtonAction {
  id: string;
  phoneName: string;
  ram?: number;
  memori: number;
  price: number;
}

export default function ButtonAction({
  id,
  phoneName,
  ram,
  memori,
  price,
}: TButtonAction) {
  const addValueProductId = () => {
    let productsOrderId = localStorage.getItem("productOrder");

    if (productsOrderId === null) {
      productsOrderId = "[]";
    }

    const productOrder = JSON.parse(productsOrderId) as Array<string>;

    if (productOrder.includes(id)) {
      toast.error(`Ups! Satu keranjang cuma bisa diisi satu produk aja`, {
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

      return;
    }

    productOrder.push(id);

    localStorage.setItem("productOrder", JSON.stringify(productOrder));

    toast.success(`Produk kamu sudah di keranjang`, {
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
  };

  const directToWhatsappAdmin = () => {
    const linkDirect = `https://wa.me/${adminInfo.noWhatsapp}?text=hai min, apakah ${phoneName.trim()} ${ram ? `${ram}/${memori}GB` : `${memori}GB`} dengan harga ${price.toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    )} masih ada?`;

    open(linkDirect, "_blank");

    console.log(linkDirect);
  };

  return (
    <aside className="sticky bottom-0 left-0 w-full bg-white p-3 border-t-2 dark:bg-black">
      <div className="flex items-center">
        <button onClick={addValueProductId}>
          <PiShoppingCartSimpleBold className="text-black-600 text-4xl me-3" />
        </button>
        <Button outline={true} onClick={directToWhatsappAdmin}>
          Tanya Admin
        </Button>
        <ButtonAddProductToCart productId={id}>
          Beli Sekarang
        </ButtonAddProductToCart>
      </div>
    </aside>
  );
}
