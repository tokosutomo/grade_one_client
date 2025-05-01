import { useRouter } from "@tanstack/react-router";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";

export default function NavbarProduct() {
  const router = useRouter();

  return (
    <nav className="flex px-3 py-3 shadow-md items-center justify-between">
      <div onClick={() => router.navigate({ to: "/" })}>
        <FaArrowLeft
          className="text-xl me-3 font-thin cursor-pointer"
          onClick={() => router.navigate({ to: "/" })}
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold cursor-pointer">Rincian Hp</h3>
      </div>

      <div onClick={() => router.navigate({ to: "/search" })}>
        <CiSearch className="text-3xl cursor-pointer" />
      </div>
    </nav>
  );
}
