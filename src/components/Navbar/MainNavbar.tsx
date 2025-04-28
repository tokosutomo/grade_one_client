import { useRouter } from "@tanstack/react-router";
import { CiSearch } from "react-icons/ci";

export default function MainNavbar() {
  const router = useRouter();

  return (
    <nav className="flex px-3 py-3 shadow-md justify-between">
      <div onClick={() => router.navigate({ to: "/" })}>
        <h3 className="text-3xl italic font-bold cursor-pointer">
          Gadgetpedia
        </h3>
      </div>
      <div onClick={() => router.navigate({ to: "/search" })}>
        <CiSearch className="text-3xl cursor-pointer" />
      </div>
    </nav>
  );
}
