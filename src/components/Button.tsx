import { ReactNode } from "react";

export default function Button({
  children,
  outline = false,
  disabled = false,
}: {
  children: ReactNode;
  outline?: boolean;
  disabled?: boolean;
}) {
  return outline ? (
    <button
      type="button"
      disabled={disabled}
      className={`w-full border-2 border-blue-600 text-blue-700 dark:text-white hover:bg-blue-800 font-medium text-sm px-5 py-2.5 ${
        disabled ? "disabled:bg-gray-300 border-none" : ""
      }`}
    >
      {children}
    </button>
  ) : (
    <button
      disabled={disabled}
      type="button"
      className={`w-full border-2 border-blue-700 text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 outline-none ${
        disabled ? "disabled:bg-gray-300 border-none" : ""
      }`}
    >
      {children}
    </button>
  );
}
