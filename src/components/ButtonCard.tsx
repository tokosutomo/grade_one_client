import { Link } from "@tanstack/react-router";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function ButtonCart() {
  return (
    <aside className="bg-blue-600 fixed right-5 bottom-5 p-3  border rounded-full cursor-pointer flex items-center justify-center active:bg-blue-800">
      <Link to={"/order"}>
        <PiShoppingCartSimpleBold className="text-white text-4xl" />
      </Link>
    </aside>
  );
}
