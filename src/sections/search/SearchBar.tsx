import { useRouter } from "@tanstack/react-router";
import { ChangeEventHandler, FormEventHandler } from "react";

export default function SearchBar({
  onChangeValue,
  defaultValue,
}: {
  onChangeValue?: (value: string) => void;
  defaultValue?: string;
}) {
  const router = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChangeValue) {
      onChangeValue(e.target.value);
    }
  };

  const onSumbit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const q = formData.get("search") as string;

    router.navigate({ to: `/search?q=${q}` });
  };

  return (
    <form className="w-full mx-auto" onSubmit={onSumbit}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          defaultValue={defaultValue}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50  dark:bg-gray-700 dark:border-gray-600  dark:text-white outline-none"
          placeholder="Cari Hp Kesukaanmu..."
          required
          name="search"
          onChange={onChange}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cari
        </button>
      </div>
    </form>
  );
}
