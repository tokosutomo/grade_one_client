import { logo } from "@/assets/assets";
import { useRouter } from "@tanstack/react-router";
import { CiSearch } from "react-icons/ci";

export default function MainNavbar() {
  const router = useRouter();

  return (
    <nav className="flex px-3 py-3 shadow-md justify-between">
      <div
        onClick={() => router.navigate({ to: "/" })}
        className="flex items-center justify-center gap-2"
      >
        <img src={logo} alt="logo" className="w-50 rounded-full" />
      </div>
      <div onClick={() => router.navigate({ to: "/search" })}>
        <CiSearch className="text-3xl cursor-pointer" />
      </div>
    </nav>
  );
}
