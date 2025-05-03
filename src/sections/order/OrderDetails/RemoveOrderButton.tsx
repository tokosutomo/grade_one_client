import { FaRegTrashAlt } from "react-icons/fa";

type TRemoveProduct = {
  id: string;
};

export default function RemoveOrderButton(props: TRemoveProduct) {
  const deletedProductOrderOnLocal = () => {
    let productsOrderId = localStorage.getItem("productOrder");

    if (productsOrderId === null) {
      productsOrderId = "[]";
    }

    const productOrder = JSON.parse(productsOrderId) as Array<string>;

    const productFiltered = productOrder.filter(
      (productIdOrder) => productIdOrder !== props.id
    );

    if (productFiltered.length === 0) {
      localStorage.removeItem("productOrder");
    } else {
      localStorage.setItem("productOrder", JSON.stringify(productFiltered));
    }

    window.location.reload();
  };

  return (
    <button onClick={deletedProductOrderOnLocal}>
      <FaRegTrashAlt />
    </button>
  );
}
