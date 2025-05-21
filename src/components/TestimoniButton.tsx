import { Link } from "@tanstack/react-router";

export default function TestimoniButton() {
  return (
    <button
      className="fixed right-5 bottom-25 p-3 bg-gray-50 rounded-full w-15 h-15 flex items-center justify-center  animate-bounce active:bg-white tooltip tooltip-open"
      data-tip="Testimoni"
    >
      <Link className="text-5xl font-black" to="/testimoni">
        T
      </Link>
    </button>
  );
}
