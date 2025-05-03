import { useRouter } from "@tanstack/react-router";
import { FaArrowLeft } from "react-icons/fa6";

export default function NavOrder() {
  const router = useRouter();

  return (
    <nav className="px-3 py-3 shadow-md">
      <div className="flex items-center">
        <FaArrowLeft
          className="text-xl me-3 font-thin cursor-pointer sticky "
          onClick={() => router.history.back()}
        />

        <h3 className="text-2xl font-bold cursor-pointer">Pesanan Saya</h3>
      </div>
    </nav>
  );
}
