import { key } from "./AdminKey";

export default function checkIsAdmin() {
  const getKeyUser = localStorage.getItem("key");

  if (getKeyUser && getKeyUser === key) return true;

  return false;
}
