import { useRouter } from "@tanstack/react-router";

export default function ButtonAddToProduct({
  children,
  productId,
}: {
  children: string;
  productId: string;
}) {
  const router = useRouter();

  const addValueProductId = () => {
    let productsOrderId = localStorage.getItem("productOrder");

    if (productsOrderId === null) {
      productsOrderId = "[]";
    }

    const productOrder = JSON.parse(productsOrderId) as Array<string>;

    productOrder.push(productId);

    localStorage.setItem("productOrder", JSON.stringify(productOrder));

    router.navigate({ to: "/order" });
  };

  return (
    <button
      onClick={addValueProductId}
      type="button"
      className="w-full border-2 border-blue-700 text-white bg-blue-700 hover:bg-blue-800   font-medium text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 outline-none"
    >
      {children}
    </button>
  );
}
