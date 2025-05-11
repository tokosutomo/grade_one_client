import { redirect } from "@tanstack/react-router";
import checkIsAdmin from "./checkIsAdmin";

export default function loaderCheckIsAdmin() {
  const isAdmin = checkIsAdmin();
  if (!isAdmin) {
    throw redirect({
      to: "/admin/login",
      throw: true,
    });
  }
}
